<template>
  <div class="send border" style="flex-direction: column;">
    <!-- 引用内容 -->
    <div class="send-quote" v-if="props.chatPlan.senderQuoteAction">
      <el-button type="primary" link size="small" style="float: left;line-height: 26px;" @click="clearQouteAction">关闭</el-button>
      <span style="float: left; color: #8f959e;line-height: 30px;">&nbsp;|&nbsp;</span>
      <pre>{{ `引用 ${props.chatPlan.senderQuoteData.name}: ${props.chatPlan.senderQuoteData.file && props.chatPlan.senderQuoteData.file.fileId ? '【文件】'+ props.chatPlan.senderQuoteData.file.name : chatPlan.senderQuoteData.message}` }}</pre>
    </div>
    <!-- 发送内容 -->
    <div class="send-panel direction-column" style="background: #ffffff;">
    <el-input
        type="textarea"
        v-model="state.sendMessage"
        :autosize="{ minRows: props.minRows, maxRows: props.maxRows }"
        :placeholder="props.placeholder"
        :disabled="props.disabled"
        @keydown="handleKeydown"
      />
      <div style="display: flex; flex-direction: row;justify-content: flex-end;padding: 5px 11px;background: #ffffff;width: 100%;">
        <el-button type="primary" size="large" link :disabled="$props.disabled" title="清空" @click="clearInputFun">
          <el-icon :size="20"><ele-Delete title="清空" /></el-icon>
        </el-button>
        <el-text size="small" class="mx-1" style="flex: 1;line-height: normal;" tag="i" :type="$props.disabled ? 'info' : 'warning'">Shift + Enter 换行</el-text>
        <!-- 自定义插槽 -->
        <slot name="footer"></slot>
        <el-upload
          style="line-height: 22px;"
          class="upload-demo"
          ref="upload"
          multiple
          :action="uploadURL"
          :on-change="onFileChange"
          :before-upload="beforeUpload"
          :on-success="uploadSuccess"
          :auto-upload="false"
          :show-file-list="false"
          :disabled="$props.disabled"
        >
          <el-icon title="选择文件" :disabled="$props.disabled" class="link-button" :style="`cursor:${$props.disabled ? 'not-allowed' : 'pointer'};`" style="margin: 5px 10px;font-size: 22px;color: #8f959e;">
            <ele-Picture title="选择文件" :disabled="$props.disabled" />
          </el-icon>
        </el-upload>
        <!-- 支持 Web Speech API 时使用语音输入 -->
        <!-- <el-icon v-if="hasSpeech" :disabled="$props.disabled" class="blink" title="语音输入" @click="startListening" :style="`cursor:${$props.disabled ? 'not-allowed' : 'pointer'}; color:${recording ? '#ff5722' : '#8f959e'};`" style="margin: 5px 10px 5px 0px;font-size: 22px;">
          <ele-Mic title="语音输入" :disabled="$props.disabled" />
        </el-icon> -->
        
        <el-icon v-if="props.hasAudio" :disabled="$props.disabled" title="语音发送" @click="clickRecording" class="link-button" :style="`cursor:${$props.disabled ? 'not-allowed' : 'pointer'};`" style="margin: 5px 10px 5px 0px;font-size: 22px;">
          <ele-Microphone title="语音发送" :disabled="$props.disabled" />
        </el-icon>
        <template v-if="props.videoMode === 1">
          <el-dropdown trigger="click" @command="handleCommand">
            <span class="el-dropdown-link">
              <el-icon v-if="props.hasVideo" :disabled="$props.disabled" title="开启视频/音频" class="link-button" :style="`cursor:${$props.disabled ? 'not-allowed' : 'pointer'};`" style="margin: 5px 10px 5px 0px;font-size: 22px;">
                <ele-VideoCamera title="开启视频1" :disabled="$props.disabled" />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="voice" icon="ele-Phone" :disabled="state.disableBtnVoice">语音（开启/关闭）</el-dropdown-item>
                <el-dropdown-item command="camera1" icon="ele-VideoCamera" :disabled="state.disableBtnCamera1">视频1（开启/关闭）</el-dropdown-item>
                <el-dropdown-item command="camera2" icon="ele-VideoCameraFilled" :disabled="state.disableBtnCamera2">视频2（开启/关闭）</el-dropdown-item>
                <el-dropdown-item command="share" icon="ele-Platform" :disabled="state.disableBtnShare">桌面共享</el-dropdown-item>
                <el-dropdown-item command="setting" icon="ele-Setting" :disabled="state.disableBtnSetting">设置</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </template>
        <template v-else>
          <el-icon v-if="hasVideo" :disabled="$props.disabled" title="开启语音" @click="openVoice" class="link-button" :style="`cursor:${$props.disabled ? 'not-allowed' : 'pointer'};`" style="margin: 5px 10px 5px 0px;font-size: 22px;">
            <ele-Phone title="开启语音" :disabled="$props.disabled" />
          </el-icon>
          <el-icon v-if="hasVideo" :disabled="$props.disabled" title="开启视频1" @click="openCamera(1)" class="link-button" :style="`cursor:${$props.disabled ? 'not-allowed' : 'pointer'};`" style="margin: 5px 10px 5px 0px;font-size: 22px;">
            <ele-VideoCamera title="开启视频1" :disabled="$props.disabled" />
          </el-icon>
          <el-icon v-if="hasVideo" :disabled="$props.disabled" title="开启视频2" @click="openCamera(2)" class="link-button" :style="`cursor:${$props.disabled ? 'not-allowed' : 'pointer'};`" style="margin: 5px 10px 5px 0px;font-size: 22px;">
            <ele-VideoCameraFilled title="开启视频2" :disabled="$props.disabled" />
          </el-icon>
          <el-icon v-if="hasVideo" :disabled="$props.disabled" title="桌面共享" @click="shareDesktop" class="link-button" :style="`cursor:${$props.disabled ? 'not-allowed' : 'pointer'};`" style="margin: 5px 10px 5px 0px;font-size: 22px;">
            <!-- <SvgIcon name="iconfont icon-diannao1" title="开启视频2" :disabled="$props.disabled" /> -->
            <ele-Platform title="桌面共享" :disabled="$props.disabled" />
          </el-icon>
          <el-icon v-if="hasVideo" :disabled="$props.disabled" title="设置" @click="setting" class="link-button" :style="`cursor:${$props.disabled ? 'not-allowed' : 'pointer'};`" style="margin: 5px 10px 5px 0px;font-size: 22px;">
            <ele-Setting title="设置" :disabled="$props.disabled" />
          </el-icon>
        </template>
        <el-button type="primary" size="default" :disabled="$props.disabled" @click="btnSendMessage">发送</el-button>
      </div>
    </div>
    <!-- <ChatVideo :show="false" /> -->

    <AudioDialog ref="audioDialogRef" @sendAudio="sendAudio"></AudioDialog>

  </div>
</template>

<script setup lang="ts" name="chatSendPanel">
import { onMounted, reactive, ref, /*watch, inject,*/ defineAsyncComponent } from 'vue';
import { ElMessage } from 'element-plus';

// 定义父组件传过来的值
const props = defineProps({
  currentMeeting: Object,
  placeholder: {
    type: String,
    default: '请输入'
  },
  minRows: {
    type: Number,
    default: 1
  },
  maxRows: {
    type: Number,
    default: 4
  },
  chatPlan: <any>{},
  isSingleRow: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  hasAudio: {
    type: Boolean,
    default: true
  },
  hasVideo: {
    type: Boolean,
    default: true
  },
  videoMode: { // 视频服务相关按钮排版模式（1为：下拉菜单；2为：横向排版）
    type: Number,
    default: 1
  },
})

// 定义子组件向父组件传值/事件
const emit = defineEmits([
  'clearQouteAction', 'handleKeydown', 'clickSend', 'onFileChange',
  'openCamera', 'openVoice', 'sendAudio', 'shareDesktop', 'setting', 'clickRecording'
])

// 引入组件
const AudioDialog = defineAsyncComponent(() => import('./audioDialog.vue'));

// 定义变量内容
const baseURL = import.meta.env.VITE_API_URL;
const uploadURL = baseURL + "/common/sys/file/upload";
const upload = ref(null);
const audioDialogRef = ref();
const state = reactive({
  isSingleRow: false,
  sendMessage: '',
  panelClass: props.isSingleRow ? 'direction-row' : 'direction-column',
  hasSpeech: false,
  recognition: <any>null,
  recording: false,
  disableBtnVoice: true,
  disableBtnCamera1: true,
  disableBtnCamera2: true,
  disableBtnShare: true,
  disableBtnSetting: true,
})

// 父组（父组件或更上层的组件provide传的响应式数据）组件件全量state数据
// const videoData = inject('videoData') as any;
// if (videoData) {
//   // 监听视频服务相关按钮状态
//   watch(() => [videoData.videoObj2.loading, videoData.videoObj3.loading, videoData.secondVideo.state, videoData.cameraSecond.state],
//   ([newObj2Value, newObj3Value, newSecondVideoValue, newCameraSecondValue]) => {
//     // 视频服务加载loading,''未加载，'false'已加载完成，'true'正在加载
//     if (newObj2Value != 'false') {
//       state.disableBtnSetting = true;
//       state.disableBtnShare = true;
//     } else {
//       state.disableBtnSetting = false;
//       state.disableBtnShare = false;
//     }

//     if (newObj2Value != 'false' || (newSecondVideoValue == 'on' && newCameraSecondValue == 'off')) {
//       state.disableBtnCamera2 = true;
//     } else {
//       state.disableBtnCamera2 = false;
//     }

//     if (newObj3Value != 'false') {
//       state.disableBtnVoice = true;
//       state.disableBtnCamera1 = true;
//     } else {
//       state.disableBtnVoice = false;
//       state.disableBtnCamera1 = false;
//     }
//   }, { immediate: true })
// }

const clearQouteAction = () => {
  emit('clearQouteAction');
}

/**
 * @name handleKeydown 回车按键发送消息
 * @param event
*/
const handleKeydown = (event: any) => {
  const sendMessage = state.sendMessage;
  if (!event.shiftKey && event.keyCode == 13) {
    state.sendMessage = '';
  }
  emit('handleKeydown', event, sendMessage);
}

const btnSendMessage = () => {
  const sendMessage = state.sendMessage;
  state.sendMessage = '';
  emit('clickSend', sendMessage);
}

const onFileChange = (file: any) => {
  emit('onFileChange', file);
}

// 上传前做校验
const beforeUpload = (file: File) => {
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    ElMessage.error('文件大小不能超过2MB');
    return false;
  }
  return true;
};

// 上传成功后
const uploadSuccess = (res: any, file: any, fileList: any) => {
  if (res["code"] == 200) {
    ElMessage.success("上传成功");
    // props.onSuccess(res.data);
    // emits('onSuccess', res.data)
  } else {
    ElMessage.error(res["msg"]);
  }
};

// 执行上传
const submitUpload = () => {
  (upload.value! as any).submit()
}

const clearInputFun = () => {
  state.sendMessage = '';
}

const handleCommand = (command: string) => {
  if (command === 'voice') {
    openVoice();
  } else if (command === 'camera1') {
    openCamera(1);
  } else if (command === 'camera2') {
    openCamera(2);
  } else if (command === 'share') {
    shareDesktop();
  } else if (command === 'setting') {
    setting();
  }
}

// 开启语音输入
// const startListening = () => {
//   if (!props.disabled && !state.recording) {
//     state.recording = true;
//     state.recognition.start();
//   }
// }

// 停止语音输入
// const stopListening = () => {
//   state.recording = false;
//   state.recognition.stop()
// }

// 开启视频
const openCamera = (cameraType: number) => {
  emit('openCamera', cameraType);
}

// 开启语音
const openVoice = () => {
  emit('openVoice');
}

// 发送语音
const sendAudio = (data: any) => {
  emit('sendAudio', data);
}

// 桌面共享
const shareDesktop = () => {
  emit('shareDesktop');
}

// 视频，音频设置
const setting = () => {
  emit('setting');
}

const clickRecording = () => {
  if (!props.disabled) {
    audioDialogRef.value.openAudioDialog()
    emit('clickRecording')
  }
}

// 初始化视频服务相关配置数据
const initVideo = () => {}

// 初始化SpeechAPI
const initSpeechAPI = () => {
  const win = window as any;
  // 判断当前浏览器是否支持语音输入（ Web Speech API ）
  if (win.SpeechRecognition || win.webkitSpeechRecognition || win.mozSpeechRecognition || win.msSpeechRecognition) {
    state.hasSpeech = true;
    state.recognition = new (win.SpeechRecognition || win.webkitSpeechRecognition || win.mozSpeechRecognition || win.msSpeechRecognition)();
    state.recognition.lang = 'zh-CN'; // 设置识别语言为中文
    state.recognition.continuous = false; // 连续识别
    state.recognition.interimResults = false; // 设置是否返回临时结果
    state.recognition.maxAlternatives = 1; // 设置最多返回几个备选结果
    state.recognition.onresult = (event: any) => {
      if (typeof (event.results) == 'undefined') {
        ElMessage.error('识别结果undefined');
        state.recognition.onend = null
        state.recording = false;
        state.recognition.stop()
      } else {
        state.sendMessage += event.results[0][0].transcript; // 获取识别结果
        state.recording = false;
      }
    }
    state.recognition.onerror = (event: any) => {
      ElMessage.error('语音识别出错（Web Speech API）：' + event.error)
      state.recording = false;
    }
  } else {
    state.hasSpeech = false;
  }
}

onMounted(() => {
  initSpeechAPI();
  initVideo();
})

// 暴露变量
defineExpose({ submitUpload });
</script>
