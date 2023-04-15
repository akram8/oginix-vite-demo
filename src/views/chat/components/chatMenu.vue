<template>
  <div class="chant-menu-container">
    <div class="search-panel">
      <el-input
        v-model="state.search"
        class="w-50 m-2"
        placeholder="搜索"
        :prefix-icon="Search"
      />
      <el-dropdown trigger="click" placement="bottom-end">
        <!-- <el-icon class="ele-CirclePlus"></el-icon> -->
        <SvgIcon name="ele-CirclePlus" class="plusIocn"></SvgIcon>
        <template #dropdown>
          <el-dropdown-item>创建群组</el-dropdown-item>
          <el-dropdown-item>添加外部联系人</el-dropdown-item>
          <el-dropdown-item>创建文档</el-dropdown-item>
          <el-dropdown-item>加入会议</el-dropdown-item>
        </template>
      </el-dropdown>
    </div>
    <div class="menu-panel" v-loading="state.loading">
      <!-- <div class="menu-item" v-for="item in state.userData" :key="item.id" @click="checkItemClick(item)"> -->
      <div class="menu-item" v-for="item in state.userData" :key="item.id">
        <div class="item-avatar">
          <img v-if="item.avatar.length > 0" :src="item.avatar" />
          <span v-else>{{ item.name.substring(0, 2) }}</span>
        </div>
        <div class="item-name">
          <div class="user">{{ item.name }}</div>
          <div class="message text-ellipsis"><span>{{ item.lastMessage }}</span></div>
        </div>
        <div class="item-time">{{ getFormatTime(item.time) }}</div>
      </div>
    </div>
    
  </div>
</template>

<script setup lang="ts" name="chatMenu">
import { onMounted, reactive } from 'vue';
import { Search } from '@element-plus/icons-vue'
import { ALL_USER } from '../data/user';
// import { getUserList } from '/@/api/chat';
// import emitter from '/@/utils/mitt';

const state = reactive({
  userData: <any>[],
  search: '',
  loading: false
});

const isCurrentYear = (date: string) => {
  return new Date(date).getFullYear() === new Date().getFullYear();
}
const isCurrentDay = (date: string) => {
  if (!isCurrentYear(date)) return false;
  if (new Date(date).getMonth() + 1 !== new Date().getMonth() + 1) return false;
  return new Date(date).getDay() === new Date().getDay();
}
const getFormatTime = (time: any) => {
  if (time == '') return '';
  const data = time.split(' ');
  const yearData = data[0].split('-');
  if (isCurrentDay(time)) {
    return data[1];
  } else {
    if (isCurrentYear(time)) {
      return yearData[1] + '月' + yearData[2] + '日';
    }
    return yearData[0] + '年' + yearData[1] +'月' + yearData[2] +'日';
  }
}



// 获取用户列表数据
const getUserData = () => {
  state.loading = true;
  state.userData = ALL_USER.data;
  state.loading = false;
  // getUserList().then((res: any) => {
  //   if (res.code == 200) {
  //     state.userData = res.data as any;
  //   } else {
  //     // console.log('error', res.msg)
  //   }
  //   state.loading = false;
  // })
}
// 选择 用户 / 群组
// const checkItemClick = (data: any) => {
//   emitter.emit('changeCurrentUserData', data);
// }

onMounted(() => {
  getUserData();
})

</script>

<style lang="scss" scoped>
.chant-menu-container {
  height: 100%;
  overflow: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
  .search-panel {
    height: 42px;
    padding: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    .plusIocn {
      font-size: 20px !important;
      :hover {
        color: var(--el-color-primary);
        cursor: pointer;
      }
    }
  }
  .menu-panel {
    flex: 1;
    // display: flex;
    // flex-direction: column;
    overflow: auto;
    .menu-item {
      height: 60px;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0px 5px;
      .item-avatar {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: var(--el-color-primary);
        color: #ffffff;
        font-size: 12px;
        line-height: 32px;
        text-align: center;
        img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
        }
        
      }
      .item-name {
        flex: 1;
        min-width:0;
        padding: 0px 10px;
        .user {
          font-size: 14px;
        }
        .message {
          font-size: 12px;
          color: #8f959e;
        }
      }
      .item-time {
        font-size: 12px;
        color: #8f959e;
      }
    }
    .menu-item:hover {
      background: #dee0e3;
      cursor: pointer;
    }
    .menu-item:focus {
      background: #dee0e3;
    }
    .menu-item:active {
      background: #dee0e3;
    }
  }
  .text-ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>