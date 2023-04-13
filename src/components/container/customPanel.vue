<template>
  <div class="custom-panel">
    <!-- title part -->
    <div class="custom-panel-title">
      <div class="title-left"><div class="title-tag"></div>{{title}}</div>
      <div class="title-right">
        <el-button @click="handleClick('cancel')" link type="primary">取消</el-button>
        <!-- <span class="segment-tag"> | </span> -->
        <el-button @click="handleClick('save')" link type="primary" style="margin-right: 10px;">确定</el-button>
          <!-- <template v-if="modefied">
            <el-button @click="handleClick('cancel')" type="text" size="small">取消</el-button>
            <span class="segment-tag"> | </span>
            <el-button @click="handleClick('save')" type="text" size="small">确定</el-button>
          </template>
          <template v-else>
            <el-button @click="handleClick('edit')" type="text" size="small">编辑</el-button>
          </template> -->
      </div>
    </div>
    <!-- body part -->
    <div class="custom-panel-body">
      <!-- <slot name="read" v-if="!modefied.value"></slot>
      <slot name="write" v-else></slot> -->
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'customPanel',
  props: {
    title: { // 标题
      type: String,
      default: ''
    },
    titleBgColor: {
      type: String,
      default: '#f2f4f8'
    },
    isEdit: { // 是否编辑状态
      type: Boolean,
      default: false
    },
    type: { // read or write
      type: String
    }
  },
  setup(props, context) {
    let modefied = ref(false);
    const handleClick = (type:string) => {
      modefied.value = false;
      if (type === 'edit') {
        modefied.value = true;
      }
      context.emit('btnClick', type)
    }
    const color = '#f2f4f8';
    return {
      handleClick,
      modefied,
      color
    }
  },
})
</script>

<style lang="scss" scoped>
.custom-panel {
    // padding: 10px 12px;
    color: rgba(0,0,0,0.87);
    background: #FFFFFF;
    border: 1px solid var(--el-border-color-light);
    border-radius: 5px;
    .custom-panel-title {
      background: var(--el-background-color-base);
      padding: 10px;
      // padding-bottom: 5px;
      border-bottom: 1px solid var(--el-border-color-light);
      display: flex;
      .title-left {
        font-size: 16px;
        line-height: 24px;
        width: 60%;
        display: flex;
        .title-tag {
          width: 6px;
          height: 18px;
          background: #659BF6;
          margin-top: 4px;
          margin-right: 8px;
        }
      }
      .title-right {
        display: flex;
        flex-direction:row-reverse;
        width: 40%;
      }
    }
    .custom-panel-body {
      padding: 18px;
    }
  }
</style>
