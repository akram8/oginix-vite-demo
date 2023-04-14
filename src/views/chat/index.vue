<template>
  <div class="chat-container">
    <el-container class="chat-panel">
      <el-aside width="200px" class="menu">
        <ChatMenu />
      </el-aside>
      <el-main class="main">Main</el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts" name="chat">
import { defineAsyncComponent } from 'vue';

// 组件引入
const ChatMenu = defineAsyncComponent(() => import('./components/chatMenu.vue'));
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
}
</style>