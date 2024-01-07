<template>
  <div class="chat-container">
    <!-- <el-container class="chat-panel">
      <el-aside width="200px" class="menu">
        <ChatMenu />
      </el-aside>
      <el-main class="main">Main</el-main>
    </el-container> -->
    <splitpanes class="default-theme" style="height: 100%; width: 100%;">
      <pane min-size="20" max-size="40" size="20px">
        <ChatMenu />
      </pane>
      <pane>
        <div class="chat-top">
          【XXX】的聊天记录
        </div>
        <div class="chat-main">
          <!-- <ChatItem /> -->
        </div>
        <div class="chat-footer">
          <ChatSendPanel />
        </div>
      </pane>
    </splitpanes>
  </div>
</template>

<script setup lang="ts" name="chat">
import { defineAsyncComponent } from 'vue';
import { Splitpanes, Pane } from 'splitpanes';
import 'splitpanes/dist/splitpanes.css';

// 组件引入
const ChatMenu = defineAsyncComponent(() => import('./components/chatMenu.vue'));
// const ChatItem = defineAsyncComponent(() => import('./components/chatItem.vue'));
const ChatSendPanel = defineAsyncComponent(() => import('./components/chatSendPanel.vue'));
</script>

<style lang="scss" scoped>
.chat-container {
  display: flex;
  flex: 1;
  margin: 10px;
  width: auto !important;
  border: 1px solid var(--next-border-color-light);
  border-radius: 4px;
  background: #ffffff;
  box-sizing: border-box;
  .chat-panel {

  }
  .menu {
    border-right: 1px solid var(--next-border-color-light);
  }
  .main {}

  .splitpanes__pane {
	// justify-content: center;
	// align-items: center;
	// display: flex;
	// position: relative;
	// font-size: 70px;
	// color: var(--el-color-primary-light-5);
	// border: 1px solid var(--el-border-color-lighter);
	background-color: #ffffff !important;
}
}
</style>