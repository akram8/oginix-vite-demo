<template>
	<div class="login-container">
		<div class="login-logo">
			<!-- <span>{{ getThemeConfig.globalViceTitle }}</span> -->
		</div>
		<div class="login-content">
			<div class="login-content-main">
				<h4 class="login-content-title">oginix-vite-demo</h4>
				<div>
					<el-tabs v-model="state.tabsActiveName">
						<el-tab-pane :label="'Login'" name="account">
							<Account />
						</el-tab-pane>
						<!-- <el-tab-pane :label="$t('message.label.two2')" name="mobile">
							<Mobile />
						</el-tab-pane> -->
					</el-tabs>
				</div>
			</div>
		</div>
		<div class="login-copyright">
			<div class="mb5 login-copyright-company">Copyright © 2022-present xxxx.xxxx Akram8</div>
			<div class="login-copyright-msg">xxxx</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { toRefs, reactive, computed } from 'vue';
import Account from './component/account.vue';

const state =  reactive({
  tabsActiveName: 'account',
  isTabPaneShow: true,
  isScan: false,
})
</script>


<style scoped lang="scss">
.login-container {
	width: 100%;
	height: 100%;
	background: url('https://images.unsplash.com/photo-1516053256215-94022213b13c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80') no-repeat;
	background: url('https://images.unsplash.com/photo-1488998527040-85054a85150e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80') no-repeat;
	// background: url('https://images.unsplash.com/photo-1611783629608-1954434566ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80') no-repeat;
	// background: url('https://images.unsplash.com/photo-1588736833957-45c001fef8a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80') no-repeat;
	// background: #A2D2FF;
	background-size: 100% 100%;
	.login-logo {
		position: absolute;
		top: 30px;
		left: 50%;
		height: 50px;
		display: flex;
		align-items: center;
		font-size: 20px;
		color: var(--color-primary);
		letter-spacing: 2px;
		width: 90%;
		transform: translateX(-50%);
	}
	.login-content {
		width: 500px;
		padding: 20px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) translate3d(0, 0, 0);
		background-color: rgba(255, 255, 255, 0.99);
		border: 5px solid var(--color-primary-light-8);
		border-radius: 4px;
		transition: all 0.3s ease;
		overflow: hidden;
		z-index: 1;
		.login-content-main {
			margin: 0 auto;
			width: 80%;
			.login-content-title {
				color: #333;
				font-weight: 500;
				font-size: 22px;
				text-align: center;
				letter-spacing: 4px;
				margin: 15px 0 30px;
				white-space: nowrap;
				z-index: 5;
				position: relative;
				transition: all 0.3s ease;
			}
		}
		.login-content-main-sacn {
			position: absolute;
			top: 0;
			right: 0;
			width: 50px;
			height: 50px;
			overflow: hidden;
			cursor: pointer;
			transition: all ease 0.3s;
			&-delta {
				position: absolute;
				width: 35px;
				height: 70px;
				z-index: 2;
				top: 2px;
				right: 21px;
				background: var(--el-color-white);
				transform: rotate(-45deg);
			}
			&:hover {
				opacity: 1;
				transition: all ease 0.3s;
				color: var(--color-primary);
			}
			i {
				width: 47px;
				height: 50px;
				display: inline-block;
				font-size: 48px;
				position: absolute;
				right: 2px;
				top: -1px;
			}
		}
	}
	.login-copyright {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		bottom: 30px;
		text-align: center;
		color: var(--color-whites);
		font-size: 12px;
		opacity: 0.8;
		.login-copyright-company {
			white-space: nowrap;
		}
		.login-copyright-msg {
			@extend .login-copyright-company;
		}
	}
}
</style>