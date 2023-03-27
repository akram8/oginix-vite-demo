<template>
	<div class="croppers-container layout-pd">
		<el-card shadow="hover" header="cropper 图片裁剪">
			<el-alert
				title="感谢优秀的 `cropperjs`，项目地址：https://github.com/fengyuanchen/cropperjs"
				type="success"
				:closable="false"
				class="mb15"
			></el-alert>
			<div class="cropper-img-warp">
				<div class="mb15 mt15">
					<img class="cropper-img" :src="state.cropperImg" />
				</div>
				<el-button type="primary" size="default" @click="onCropperDialogOpen">
					<el-icon>
						<ele-Crop />
					</el-icon>
					更换头像
				</el-button>
			</div>
		</el-card>
		<CropperDialog ref="cropperDialogRef" />
	</div>
</template>

<script setup lang="ts" name="funCropper">
import { defineAsyncComponent, ref, reactive } from 'vue';

// 引入组件
const CropperDialog = defineAsyncComponent(() => import('/@/components/cropper/index.vue'));

// 定义变量内容
const cropperDialogRef = ref();
const state = reactive({
	cropperImg: 'https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60WFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60WFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
});

// 打开裁剪弹窗
const onCropperDialogOpen = () => {
	cropperDialogRef.value.openDialog(state.cropperImg);
};
</script>

<style scoped lang="scss">
.croppers-container {
	.cropper-img-warp {
		text-align: center;
		.cropper-img {
			margin: auto;
			width: 150px;
			height: 150px;
			border-radius: 100%;
		}
	}
}
</style>
