<template>
  <div class="custom-panel" :class="props.hasBorder ? 'border' : ''">
    <!-- title part -->
    <div class="custom-panel-title">
      <div class="title-left"><div class="title-tag"></div>{{ props.title }}</div>
      <div class="title-right">
        <el-button v-if="props.showClose" @click="handleClick('close')" :link="props.linkBtn" type="primary">关闭</el-button>
        <el-button v-if="props.showCancel" @click="handleClick('cancel')" :link="props.linkBtn" type="primary">取消</el-button>
        <el-button v-if="props.showSubmit" @click="handleClick('save')" :link="props.linkBtn" type="primary" class="mr10">确定</el-button>
        <el-tooltip v-if="props.showAddBtn" content="添加" placement="top">
          <el-button type="primary" size="small" circle @click="handleClick('add')">
            <el-icon>
              <ele-Plus />
            </el-icon>
          </el-button>
        </el-tooltip>
      </div>
    </div>
    <!-- body part -->
    <div class="custom-panel-body" :class="props.hasPadding ? 'padding18' : ''" :style="props.bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts" name="panel">
// 定义父组件传过来的值
const props = defineProps({
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
  },
  hasBorder: {
    type: Boolean,
    default: true
  },
  hasPadding: {
    type: Boolean,
    default: true
  },
  bodyStyle: {
    type: String,
    defaults: ''
  },
  linkBtn: { // 按钮是否为文字按钮
    type: Boolean,
    default: false
  },
  showSubmit: {
    type: Boolean,
    default: true
  },
  showCancel: {
    type: Boolean,
    default: true
  },
  showClose: {
    type: Boolean,
    default: false
  },
  showAddBtn: {
    type: Boolean,
    default: false
  }
})

// 定义子组件向父组件传值/事件
const emit = defineEmits(['btnClick']);

// 按钮点击事件
const handleClick = (type:string) => {
  emit('btnClick', type)
}

</script>

<style lang="scss" scoped>
.custom-panel {
    display: flex;
    flex-direction: column;
    // padding: 10px 12px;
    color: rgba(0,0,0,0.87);
    background: #FFFFFF;
    // border: 1px solid var(--el-border-color-light);
    // border-radius: 5px;
    .custom-panel-title {
      background: var(--el-background-color-base, #f5f7fa);
      padding: 0px 10px;
      // padding-bottom: 5px;
      border-bottom: 1px solid var(--el-border-color-light);
      display: flex;
      .title-left {
        font-size: 16px;
        line-height: 36px;
        width: 60%;
        display: flex;
        .title-tag {
          width: 6px;
          height: 18px;
          background: #659BF6;
          margin-top: 8px;
          margin-right: 8px;
        }
      }
      .title-right {
        display: flex;
        flex-direction:row-reverse;
        align-items: center;
        width: 40%;
      }
    }
    .custom-panel-body {
      flex: 1;
      overflow: auto;
    }
  }
  .border {
    border: 1px solid var(--el-border-color-light);
    border-radius: 5px;
  }
  .padding18 {
    padding: 18px;
  }
</style>
