<template>
  <div>
    <el-dialog v-model="dialogVisible" :title="dialogTitle" :close-on-click-modal="false" :before-close="handleBeforeClose" width="420px">
      <div class="img-panel">
        <div v-if="state.fileData.length === 1 && getFileSuffixType(state.fileData[0].fileName) === 'image'">
          <img class="img" :src="state.fileData[0].fileSrc" />
          <!-- <div v-else class="file-avatar">{{ getFileSuffixType(item.fileName) }}</div> -->
          <div class="content">
            <div class="name">{{ state.fileData[0].fileName }}</div>
            <div class="size">{{ getFileSize(state.fileData[0].fileSize) }}</div>
          </div>
        </div>
        <div v-else v-for="item in state.fileData" :key="item.fileName" class="item-list">
          <img v-if="getFileSuffixType(item.fileName) === 'image'" class="img" :src="item.fileSrc" />
          <div v-else class="file-avatar" :style="{backgroundColor: getFileColor(item.fileName)}">{{ getFileSuffixType(item.fileName) }}</div>
          <div class="content">
            <div class="name">{{ item.fileName }}</div>
            <div class="size">{{ getFileSize(item.fileSize) }}</div>
          </div>
        </div>
        <!-- 上传文件使用 -->
        <!-- <input type="file" style="display: none;" /> -->
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="cancelClick">取消</el-button>
          <el-button type="primary" @click="sendClick">
            发送
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts" name="sendDialog">
import { reactive, ref } from 'vue';
import axios from 'axios';
import { getFileSuffixType, getFileColor, getFileSize } from '/@/utils/file';

// 定义子组件向父组件传值/事件
const emit = defineEmits(['submitForm']);

// 定义变量内容
const dialogVisible = ref(false);
const dialogTitle = ref('发送文件'); // 图片 / 文件 / 名片（暂延后）
// const imgSrc = ref('');
// const imgSize = ref('');
// const imgName = ref('image.png');
const state = reactive({
  fileData: <any[]>([])
})

// 取消
const cancelClick = () => {
  dialogVisible.value = false;
  state.fileData = [];
}

// 关闭之前处理函数（清空数据）
const handleBeforeClose = (done: () => void) => {
  done();
  state.fileData = [];
}

// 文件上传逻辑
const uploadFile = async () => {
  const baseURL = import.meta.env.VITE_API_URL;
  const uploadURL = baseURL + "/upload";
  let data: { id: string; name: any; type: string; typeColor: string; size: string; fileSrc?: any; fileId: any }[] = [];
  const promises = [];
  for (const item of state.fileData) {
    const formData = new FormData();

    // 图片和文件做区分
    if (typeof item.fileSrc === 'string') {
      formData.append('file', dataURLtoBlob(item.fileSrc), item.fileName); // 流文件（截图的图片）
    } else {
      formData.append('file', item.fileSrc, item.fileName); // 文件
    }

    const promise = axios.post(uploadURL, formData, {
      // 'Content-type': 'multipart/form-data'
    }).then(res => {
      data.push({
        id: '',
        name: item.fileName,
        type: getFileSuffixType(item.fileName),
        typeColor: getFileColor(item.fileName),
        size: getFileSize(item.fileSize),
        // fileSrc: item.fileSrc
        fileId: res.data.data
      })
    });
    promises.push(promise);
  }
  await Promise.all(promises);
  return data;
}

// 发送
const sendClick = async () => {
  dialogVisible.value = false;
  const data = await uploadFile()
  await emit('submitForm', data);
  state.fileData = [];
}
// 转二进制文件
const dataURLtoBlob = (dataUrl: string): Blob => {
  const parts = dataUrl.split(',');
  const mimeType = parts[0].match(/:(.*?);/)?.[1] || '';
  const b64 = atob(parts[1]);
  let n = b64.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = b64.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mimeType });
}
</script>

<style lang="scss" scoped>
.img-panel {
  border: 1px solid #e5ecef;
  text-align: center;
  padding: 16px;
  max-height: 412px;
  overflow: auto;
  .img {
    width: auto;
    height: auto;
    max-width: 240px;
    max-height: 240px;
    margin: 0 auto 16px;
  }
  .item-list {
    display: flex;
    flex-direction: row;
    margin-bottom: 16px;
    .img {
      width: 40px;
      height: 40px;
      margin: 0px 16px 0px 0px;
      flex-shrink: 0;
    }
    .file-avatar {
      width: 40px;
      height: 40px;
      margin-right: 16px;
      background: var(--el-color-primary);
      color: #ffffff;
      text-align: center;
      font-size: 20px;
      line-height: 40px;
    }
    .content {
      line-height: 20px;
      font-size: 14px;
      text-align: left;
      flex: 1;
      min-width: 0px;
      .name {
        white-space: nowrap;
        overflow-x: hidden;
        text-overflow: ellipsis;
      }
      .size {
        font-size: 12px;
        color: #646a73;
      }
    }
  }
  .content {
    line-height: 20px;
    font-size: 14px;
    .size {
      font-size: 12px;
      color: #646a73;
    }
  }
}
</style>