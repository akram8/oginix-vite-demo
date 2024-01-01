<template>
  <div class="item-panel" :style="getPanelStyle()">
    <!-- 选择 -->
    <!-- <el-checkbox></el-checkbox> -->
    <!-- 头像 -->
    <div class="avatar" :style="'background:' + utils.getColor(chatData.name)">
      <!-- <img v-if="chatData.avatar.length > 0" :src="chatData.avatar" />
      <span v-else>{{ chatData.name.substring(0, 2) }}</span> -->
      <span>{{ chatData.name.substring(0, 2) }}</span>
    </div>
    <!-- 消息 -->
    <div class="message" :style="mStyle">
      <div class="message-name">
        <span>{{ chatData.name }}</span>
        <span class="message-time">{{ chatData.time }}</span>
      </div>
      <!-- 消息面板 -->
      <div class="message-panel" :style="chatData.qoute && (chatData.qoute.message || chatData.qoute.file) ? 'background: #cce0ff;padding: 10px 12px;border-radius: 5px;' : ''">
        <!-- 引用信息面包 -->
        <div class="send-quote" v-if="chatData.qoute" @click="openQuotePanel(chatData.qoute)">
          <span style="float: left; color: #8f959e;">|&nbsp;</span>
          <pre>{{ `引用 ${chatData.qoute.name}: ${chatData.qoute.file && chatData.qoute.file.fileId ? '【文件】'+chatData.qoute.file.name : chatData.qoute.message}` }}</pre>
        </div>
        <!-- 文本 -->
        <div class="message-info" :style="chatData.qoute && (chatData.qoute.message || chatData.qoute.file) ? 'padding: 0px;' : ''" v-if="chatData.message">
          <!-- 文本信息面板 -->
          <pre v-if="chatData.showEdit === undefined || chatData.showEdit === ''">{{ chatData.message }}</pre>
          <el-form v-else :inline="true">
            <el-form-item>
              <!-- <el-input type="textarea" v-model="chatData.message" style="width: 600px;min-width: auto;" :autosize="{ minRows: 1, maxRows: 4 }"></el-input> -->
              <el-input type="textarea" v-model="$props.chatData.message" style="width: 600px;min-width: auto;" :autosize="{ minRows: 1, maxRows: 4 }"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button round size="small" type="primary" @click="messageEdit(chatData)">保存</el-button>
              <el-button round size="small" @click="messageEditCancel(chatData)">取消</el-button>
            </el-form-item>
          </el-form>
        </div>
        <!-- 图片 -->
        <div class="demo-image__preview" v-if="chatData.file && chatData.file.type && chatData.file.type  === 'image'">
          <el-image
            style="width: auto; height: 100px; min-width: 30px; min-height: 30px; max-width: 380px;"
            :src1="chatData.file.fileSrc"
            :src="uploadURL + chatData.file.fileId"
            :zoom-rate="1.2"
            :preview-src-list="[uploadURL + chatData.file.fileId]"
            :initial-index="4"
            fit="contain"
          />
        </div>
        <!-- 视频 -->
        <div v-if="chatData.file && chatData.file.type && chatData.file.type === 'video'">
          <!-- <div class="file-name">{{ item.file.name }}</div> -->
          <video :style="videoStyle" :src="uploadURL + chatData.file.fileId" controls>
            <track kind="metadata" :label="chatData.file.name">
          </video>
        </div>
        <!-- 音频 -->
        <div v-if="chatData.file && chatData.file.type && chatData.file.type === 'audio'">
          <!-- <div class="file-name">{{ item.file.name }}</div> -->
          <audio :style="audioStyle" :src="uploadURL + chatData.file.fileId" controls></audio>
        </div>
        <!-- 文件 -->
        <div class="message-file" :style="fStyle" v-if="chatData.file && chatData.file.type && chatData.file.type  !== 'image' && chatData.file.type  !== 'video' && chatData.file.type  !== 'audio'">
          <div class="file-avatar" :style="{ backgroundColor: chatData.file.typeColor }">{{ chatData.file.type }}</div>
          <div class="file-content">
            <div class="file-name">{{ chatData.file.name }}</div>
            <div class="file-size">{{ chatData.file.size }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="other" v-if="hasAction">
      <div class="other-button-group">
        <el-button-group class="ml-4" size="small">
          <el-tooltip v-if="!(chatData.file && chatData.file.fileId && String(chatData.file.fileId).length > 0) && isCurrentUser(chatData.userId)" content="编辑" :show-after="300" placement="top">
            <el-button :disabled="chatData.file && chatData.file.fileId && String(chatData.file.fileId).length > 0" @click="showMessageEdit(chatData)" size="small">
              <el-icon><Edit /></el-icon>
            </el-button>
          </el-tooltip>
          <el-tooltip content="引用" :show-after="300" placement="top">
            <el-button @click="messageQuote(chatData)" size="small">
              <el-icon><Comment /></el-icon>
            </el-button>
          </el-tooltip>
          <el-tooltip v-if="isCurrentUser(chatData.userId)" content="删除" :show-after="300" placement="top">
            <el-button :disabled="!isCurrentUser(chatData.userId)" @click="messageDelete(chatData)" size="small">
              <el-icon><DeleteFilled /></el-icon>
            </el-button>
          </el-tooltip>
          <el-tooltip v-if="chatData.file && chatData.file.type" content="下载" :show-after="300" placement="top">
            <el-button @click="downloadFile(chatData)" size="small">
              <el-icon><Download /></el-icon>
            </el-button>
          </el-tooltip>
          <el-tooltip v-if="false" content="更多" :show-after="300" placement="top">
            <el-button size="small">
              <el-icon><MoreFilled /></el-icon>
            </el-button>
          </el-tooltip>
        </el-button-group>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, reactive, toRefs } from 'vue'
import { Edit, Comment, Download, DeleteFilled, MoreFilled } from '@element-plus/icons-vue';
import * as utils from '/@/utils/utils';

export default defineComponent({
  name: 'chatItem',
  components: { Edit, Comment, Download, DeleteFilled, MoreFilled },
  props: {
    chatData: {
      type: Object,
      default: () => {}
    },
    direction: { // 显示方向 [default:左右, left：只左, right：只右 ]
      type: String,
      default: 'default'
    },
    hasAction: {
      type: Boolean,
      default: true
    },
    mStyle: {
      type: String,
      default: ''
    },
    fStyle: {
      type: String,
      default: ''
    },
    audioStyle: {
      type: String,
      default: ''
    },
    videoStyle: {
      type: String,
      default: 'height: 300px; width: 100%;'
    }
  },
  setup(props, context) {
    const baseURL = import.meta.env.VITE_API_URL;
    const uploadURL = baseURL + "/download/backlogFilePreview/";

    const state = reactive({
      message: computed(() => props.chatData.message)
    })

    // 点击 - 引用消息事件
    const openQuotePanel = (quoteData: any) => {
      context.emit('onClickQuote', quoteData)
    }

    // 操作-【编辑】按钮
    const showMessageEdit = (data: any) => {
      context.emit('btnEdit', data);
    }
    // 操作-编辑【保存】按钮
    const messageEdit = (data: any) => {
      context.emit('btnSaveEdit', data);
    }
    // 操作-编辑【取消】按钮
    const messageEditCancel = (data: any) => {
      context.emit('btnCancelEdit', data);
    }
    // 操作-【引用】按钮
    const messageQuote = (data: any) => {
      context.emit('btnQuote', data);
    }
    // 操作-【删除】按钮
    const messageDelete = (data: any) => {
      context.emit('btnDelete', data);
    }
    // 操作-【下载】按钮
    const downloadFile = (data: any) => {
      window.location.href = uploadURL + data.file.fileId;
    }

    // 判断是否为当前用户
    const isCurrentUser = (userId: any) => {
      if (String(localStorage.getItem('userId')) === String(userId)) return true;
      return false;
    }

    // 获取排版方向样式
    const getPanelStyle = () => {
      let style = '';
      if (props.direction === 'default') {
        style = isCurrentUser(props.chatData.userId) ? 'flex-direction: row-reverse;' : 'flex-direction: row;'
      } else if(props.direction === 'left') {
        style = 'flex-direction: row;'
      } else if (props.direction === 'right') {
        style = 'flex-direction: row-reverse;'
      }
      return style;
    }

    return {
      uploadURL,
      ...toRefs(state),
      openQuotePanel,
      showMessageEdit,
      messageEdit,
      messageEditCancel,
      messageQuote,
      messageDelete,
      downloadFile,
      isCurrentUser,
      getPanelStyle,
      utils
    }
  },
})
</script>

<style lang="scss" scoped>
.item-panel {
  display: flex;
  flex-direction: row;
  padding: 5px 0px;
  .avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: var(--el-color-primary);
    color: #ffffff;
    font-size: 12px;
    line-height: 32px;
    text-align: center;
    flex-shrink: 0;
    img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }
  }
  .message {
    padding: 0px 10px;
    overflow: hidden;
    .message-name {
      color: #8f959e;
      font-size: 12px;
      margin-bottom: 5px;
      .message-time {
        margin-left: 8px;
      }
    }
    .message-info {
      // background: #eff0fe;
      background: #cce0ff;
      padding: 10px 12px;
      border-radius: 5px;
    }
    .message-file {
      display: flex;
      flex-direction: row;
      background: #eff0fe;
      border: 1px solid #e5ecef;
      border-radius: 4px;
      width: 360px;
      padding-right: 10px;
      cursor: pointer;
      .file-avatar {
        width: 78px;
        height: 78px;
        margin-right: 16px;
        background: var(--el-color-primary);
        color: #ffffff;
        text-align: center;
        font-size: 32px;
        font-weight: bold;
        line-height: 78px;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }
      .file-content {
        line-height: 20px;
        font-size: 14px;
        text-align: left;
        flex: 1;
        min-width: 0px;
        line-height: 39px;
        .file-name {
          white-space: nowrap;
          overflow-x: hidden;
          text-overflow: ellipsis;
        }
        .file-size {
          font-size: 12px;
          color: #646a73;
        }
      }
    }
  }
  .other {
    flex-shrink: 0;
    margin-right: 10px;
    width: 170px;
    .other-button-group {
      display: none;
    }
  }
}

.item-panel:hover {
  .other-button-group {
    display: block;
  }
}

pre {
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
  font-size: 14px;
  line-height: 20px;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow-wrap: anywhere;
  margin: 0px;
  user-select: text;
}

.send-quote {
  padding: 8px 0px;
  border-radius: 5px;
  // background: #eff0fe;
  background: #cce0ff;
  cursor: pointer;
  pre {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #8f959e;
  }
}
</style>