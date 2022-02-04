<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
defineProps<{ msg: string }>()

const open = () => {
  ElMessage({
    message: 'this is a message.',
    grouping: true,
    type: 'success',
  })
}

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <el-check-tag checked style="margin-right: 8px">Let's start the show!!!</el-check-tag>
  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <el-button type="button" @click="count++">count is: {{ count }}</el-button>

  <el-button :plain="true" @click="open">Show message</el-button>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: hsl(208, 28%, 26%);
}
</style>
