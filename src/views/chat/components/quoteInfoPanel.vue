<template>
  <panel
    title="详情页"
    style="height: 100%;"
    linkBtn
    showClose
    :showSubmit="false"
    :showCancel="false"
    :has-border="false"
    :has-padding="false"
    @btnClick="btnClick"
  >
    <div class="chat-panel" style="height: auto;">
      <div style="padding: 10px; border-bottom: 1px solid #e5ecef;background: #e5ecef;">
        <ChatItem
          direction="left"
          :has-action="false"
          :chat-data="props.chatData"
          mStyle="width: 100%;"
          fStyle="width: 100%;"
          audioStyle="width: 100%"
          videoStyle="width: 100%;height: auto;max-height: 300px;"
        ></ChatItem>
      </div>
      <div class="chat-item-panel">
        <ChatItem
          v-for="item in props.quoteData" 
          :key="item.id"
          :has-action="false"
          :chat-data="item"
          direction="left"
          mStyle="width: 100%;"
          fStyle="width: 100%;"
          audioStyle="width: 100%"
          videoStyle="width: 100%;height: auto;max-height: 300px;"
        ></ChatItem>
      </div>
    </div>
  </panel>
</template>

<script setup lang="ts" name="chatQuotePanel">
import { defineAsyncComponent } from 'vue';

// 引入组件
const Panel = defineAsyncComponent(() => import('/@/components/panel.vue'));
const ChatItem = defineAsyncComponent(() => import('./chatItem.vue'));

// 定义父组件传过来的值
const props = defineProps({
  chatData: { // 被引用的消息对象
    type: Object,
    default: () => {}
  },
  quoteData: { // 引用的消息对象数组
    type: Array<EmptyObjectType>,
    default: () => []
  }
});

// 定义子组件向父组件传值/事件
const emit = defineEmits(['btnClose']);

// 关闭事件
const btnClick = (type: string) => {
  emit('btnClose', type)
}

</script>

<style lang="scss" scoped>
.chat-panel {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .chat-item-panel {
    flex: 1;
    margin: 10px;
    overflow: auto;
    &-active {
      border: 1px solid #2260ff;
    }
  }
}
</style>

