<template>
	<el-form class="login-content-form">
		<el-form-item class="login-animation-one">
			<el-input type="text" :placeholder="'username'" v-model="state.ruleForm.userName" clearable autocomplete="off">
				<template #prefix>
					<el-icon class="el-input__icon"><elementUser /></el-icon>
				</template>
			</el-input>
		</el-form-item>
		<el-form-item class="login-animation-two">
			<el-input
				:type="state.isShowPassword ? 'text' : 'password'"
				:placeholder="'password'"
				v-model="state.ruleForm.password"
				autocomplete="off"
			>
				<template #prefix>
					<el-icon class="el-input__icon"><elementUnlock /></el-icon>
				</template>
				<template #suffix>
					<i
						class="iconfont el-input__icon login-content-password"
						:class="state.isShowPassword ? 'icon-yincangmima' : 'icon-xianshimima'"
						@click="state.isShowPassword = !state.isShowPassword"
					>
					</i>
				</template>
			</el-input>
		</el-form-item>
		<el-form-item class="login-animation-three">
			<el-row :gutter="15">
				<el-col :span="16">
					<el-input
						type="text"
						maxlength="4"
						:placeholder="'code'"
						v-model="state.ruleForm.code"
						clearable
						autocomplete="off"
					>
						<template #prefix>
							<el-icon class="el-input__icon"><elementPosition /></el-icon>
						</template>
					</el-input>
				</el-col>
				<el-col :span="8">
					<div class="login-content-code">
						<span class="login-content-code-img">1234</span>
					</div>
				</el-col>
			</el-row>
		</el-form-item>
		<el-form-item class="login-animation-four">
			<el-button type="primary" class="login-content-submit" round @click="onSignIn" :loading="state.loading.signIn">
				<span>aaa</span>
			</el-button>
		</el-form-item>
		<el-form-item class="login-animation-five">
			<el-button type="text" size="small">addd</el-button>
			<el-button type="text" size="small">bbbd</el-button>
		</el-form-item>
	</el-form>
</template>

<script setup lang="ts">
import {reactive} from 'vue'
function onSignIn() {}
const state = reactive({
  isShowPassword: false,
  ruleForm: {
    userName: 'admin',
    password: '123456',
    code: '1234',
  },
  loading: {
    signIn: false
  }
})
</script>

<style scoped lang="scss">
.login-content-form {
	margin-top: 20px;
	.login-animation-one,
	.login-animation-two,
	.login-animation-three,
	.login-animation-four,
	.login-animation-five {
		opacity: 0;
		animation-name: error-num;
		animation-duration: 0.5s;
		animation-fill-mode: forwards;
	}
	.login-animation-one {
		animation-delay: 0.1s;
	}
	.login-animation-two {
		animation-delay: 0.2s;
	}
	.login-animation-three {
		animation-delay: 0.3s;
	}
	.login-animation-four {
		animation-delay: 0.4s;
		margin-bottom: 5px;
	}
	.login-animation-five {
		animation-delay: 0.5s;
	}
	.login-content-password {
		display: inline-block;
		width: 25px;
		cursor: pointer;
		&:hover {
			color: #909399;
		}
	}
	.login-content-code {
		display: flex;
		align-items: center;
		justify-content: space-around;
		.login-content-code-img {
			width: 100%;
			height: 40px;
			line-height: 40px;
			background-color: #ffffff;
			border: 1px solid rgb(220, 223, 230);
			color: #333;
			font-size: 16px;
			font-weight: 700;
			letter-spacing: 5px;
			text-indent: 5px;
			text-align: center;
			cursor: pointer;
			transition: all ease 0.2s;
			border-radius: 4px;
			user-select: none;
			&:hover {
				border-color: #c0c4cc;
				transition: all ease 0.2s;
			}
		}
	}
	.login-content-submit {
		width: 100%;
		letter-spacing: 2px;
		font-weight: 300;
		margin-top: 15px;
	}
}
</style>
