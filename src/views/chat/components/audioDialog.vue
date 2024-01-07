<template>
  <el-dialog v-model="state.dialogVisible" title="语音发送" :close-on-click-modal="false" :before-close="handleBeforeClose" width="420px">
    <div>
      <el-tooltip v-if="state.isRecording" content="点击结束聆听" effect="light">
        <div class="recording" @click="stopRecording">
          <div class="icon">
            <div class="circle">
              <div class="circle-in">
                <SvgIcon name="ele-Microphone" :size="20"></SvgIcon>
              </div>
            </div>
          </div>
          <span>正在聆听...</span>
        </div>
      </el-tooltip>
      <div v-else>
        <audio style="width: 100%;" :src="state.audioUrl" controls></audio>
      </div>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancelClick">取消</el-button>
        <el-button type="primary" :disabled="state.isRecording" @click="sendClick">发送</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts" name="audioDialog">
import { ref, reactive } from 'vue';
import { ElMessage } from 'element-plus';
import { getFileSuffixType, getFileColor, getFileSize } from '/@/utils/file';
import axios from 'axios';

// 定义子组件向父组件传值/事件
const emit = defineEmits(['sendAudio']);

// 定义变量
const mediaRecorder = ref<any>(null);
const audioChunks = ref<any>([]);
const state = reactive({
  dialogVisible: false,
  isRecording: false, // 是否正在录音
  audioTime: 0, // 音频时长（秒）
  stream: <any>null,
  audioBlob: <any>null,
  audioUrl: '',
})

// 开启录音
const startRecording = async () => {
  state.isRecording = true;
  try {
    state.stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder.value = new MediaRecorder(state.stream);

    mediaRecorder.value.ondataavailable = (event: any) => {
      audioChunks.value.push(event.data);
    };

    mediaRecorder.value.onstop = async () => {
      state.audioBlob = new Blob(audioChunks.value, { type: 'audio/mpeg' });
      state.audioUrl = URL.createObjectURL(state.audioBlob);
    };

    mediaRecorder.value.start();
  } catch (error) {
    state.isRecording = false;
    ElMessage.error('录音失败：' + error);
  }
}

// 关闭录音
const stopRecording = () => {
  if (mediaRecorder.value) {
    mediaRecorder.value.stop();
    state.isRecording = false;
  }
}

// 音频文件上传逻辑
const uploadFile = async (audioBlob: any) => {
  const baseURL = import.meta.env.VITE_API_URL;
  const uploadURL = baseURL + "/upload";
  let data: { id: string; name: any; type: string; typeColor: string; size: string; fileSrc?: any; fileId: any }[] = [];
  const promises = [];
  const formData = new FormData();
  formData.append('file', audioBlob, 'audio-' + Date.now() + '.mp3');
  const promise = axios.post(uploadURL, formData, {
    // 'Content-type': 'multipart/form-data'
  }).then((res: any) => {
    const currentUser = localStorage.getItem('name');
    const fileName = currentUser + '的发言' + Date.now() + '.mp3';
    data.push({
      id: '',
      name: fileName,
      type: getFileSuffixType(fileName),
      typeColor: getFileColor(fileName),
      size: getFileSize(audioBlob.size),
      // fileSrc: item.fileSrc
      fileId: res.data.data
    })
  });
  promises.push(promise);
  await Promise.all(promises);
  return data;
}

// 打开弹框
const openAudioDialog = () => {
  state.dialogVisible = true;
  startRecording()
}

// 发送
const sendClick = async () => {
  const data = await uploadFile(state.audioBlob)
  emit('sendAudio', data)
  cancelClick();
}

// 关闭窗口
const cancelClick = async () => {
  closeAudioSteam();
  initAudioData();
  state.dialogVisible = false;
}

// 关闭之前处理函数（清空数据）
const handleBeforeClose = (done: () => void) => {
  done();
  closeAudioSteam();
  initAudioData();
}

// 关闭音频流
const closeAudioSteam = () => {
  if (state.stream) {
    // 关闭音频流
    state.stream.getTracks().forEach((track: any) => {
      track.stop();
    });
  }
}

// 初始化音频数据
const initAudioData = () => {
  state.audioBlob = null;
  state.audioUrl = '';
  mediaRecorder.value = null;
  audioChunks.value = [];
}

// 暴露变量
defineExpose({
  openAudioDialog
})
</script>

<style lang="scss" scoped>
.recording {
  height: 80px;
  text-align: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .icon {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
  }
  .circle {
    width: 50px;
    height: 50px;
    background-color: #03A9F4;
    border-radius: 50%;
    padding: 10px;
    
    animation: blink 1s infinite;
    .circle-in {
      width: 30px;
      height: 30px;
      background-color: #bbdefb;
      border-radius: 50%;
      padding: 5px;
      color: #e91e63;
    }
  }
}

@keyframes blink {
  0% {
    opacity: 1;
    padding: 10px;
    width: 50px;
    height: 50px;
  }
  50% {
    padding: 5px;
    width: 40px;
    height: 40px;
  }
  100% {
    opacity: 1;
    padding: 10px;
    width: 50px;
    height: 50px;
  }
}
</style>
