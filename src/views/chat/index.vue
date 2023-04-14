<template>
  <div class="chat-container">
    <el-container class="chat-panel">
      <el-aside width="200px" class="menu">Aside</el-aside>
      <el-main class="main">Main</el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts" name="chat">

</script>

<style lang="scss" scoped>
.chat-container {
  flex: 1;
  margin: 10px;
  width: auto !important;
  border: 1px solid var(--next-border-color-light);
  border-radius: 4px;
  background: #ffffff;
  padding: 10px;
  box-sizing: border-box;
  .chat-panel {
    
  }
  .menu {
    border-right: 1px solid var(--next-border-color-light);
  }
  .main {}
}
</style>