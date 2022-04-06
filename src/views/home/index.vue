<template>
  <div>
    <!-- head(week name) -->
    <el-row :gutter="20">
      <el-col :span="3">
        <div class="grid-title bg-blank">2022-04-04</div>
        <div class="grid-title bg-blank">周一</div>
      </el-col>
      <el-col :span="3"><div class="grid-title bg-blank"></div></el-col>
      <el-col :span="3"><div class="grid-title bg-blank"></div></el-col>
      <el-col :span="3"><div class="grid-title bg-blank"></div></el-col>
      <el-col :span="3"><div class="grid-title bg-blank"></div></el-col>
      <el-col :span="3"><div class="grid-title bg-blank"></div></el-col>
      <el-col :span="3"><div class="grid-title bg-blank"></div></el-col>
    </el-row>
    <!-- aaa -->
    <el-row :gutter="20">
      <el-col :span="3"><div class="grid-content bg-purple" @click="dialogFormVisible = true"></div></el-col>
      <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <!-- dialog -->
    <el-dialog v-model="dialogFormVisible" title="添加工时">
      <el-form :model="form">
        <el-form-item label="开始时间" :label-width="formLabelWidth">
          <el-input v-model="form.startTime" autocomplete="off" />
        </el-form-item>
        <el-form-item label="结束时间" :label-width="formLabelWidth">
          <el-input v-model="form.endTime" autocomplete="off" />
        </el-form-item>
        <el-form-item label="项目名称" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择项目名称">
            <el-option label="项目01" value="project01" />
            <el-option label="项目02" value="project02" />
          </el-select>
        </el-form-item>
        <el-form-item label="工作内容" :label-width="formLabelWidth">
          <el-input v-model="form.name" :rows="4" type="textarea" autocomplete="off" />
        </el-form-item>
        
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false"
            >确定</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'

export default defineComponent({
  setup() {
    let dialogFormVisible = ref(false);
    const formLabelWidth = '140px'
    const form = reactive({
      name: '',
      startTime: '',
      endTime: '',
      region: '',
      date1: '',
      date2: '',
      delivery: false,
      type: [],
      resource: '',
      desc: '',
    });
    const openDialog = () => {
    //  dialogFormVisible = true;
    }
    function getCurrentWeek () {
      let now: any = new Date()
      var weekFirstDay: any = new Date(now- (now.getDay() - 1) * 86400000)
      var firstMonth = Number(weekFirstDay.getMonth()) + 1
      var weekLastDay = new Date((weekFirstDay / 1000 + 6 * 86400) * 1000)
      var lastMonth = Number(weekLastDay.getMonth()) + 1
      var currentWeek = weekFirstDay.getFullYear() + '-' + firstMonth + '-' + weekFirstDay.getDate() + '~' + weekLastDay.getFullYear() + '-' + lastMonth + '-' + weekLastDay.getDate()
      console.log('currentWeeek', currentWeek)
    }
    getCurrentWeek();
    return {
      form,
      formLabelWidth,
      dialogFormVisible,
      openDialog
    }
  },
})
</script>


<style>
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-title {
  border-radius: 4px;
  min-height: 36px;
  text-align: center;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  height: 400px;
  cursor: pointer;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>