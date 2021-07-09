<template>
  <div class="login_container">
    <div class="login_box">
      <img src="../assets/logo.png"/>
      <!-- 表单 -->
      <el-form ref="loginFormRef" :model="loginData" :rules="formRules" label-width="100px" class="login_form">
        <el-form-item label="用户名" prop="account">
          <el-input v-model="loginData.account"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginData.password" type="password"></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginData: {
        account: 'admin',
        password: '111111'
      },
      formRules: {
        account: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    login () {
      // this.$refs.loginFormRef.validate(async valid => {
      //   if (!valid) {
      //     return
      //   }
      //   // const { data: res } = await this.$http.post('/api/account/loginAction', this.loginData)
      //   // if (res.meta.status !== 200) return this.$message.error('登录失败！')
      //   console.log(valid)
      //   // this.$message.success('登录成功')
        this.$router.push('/') // 跳转到下个页面
      // })
    }
  }
}
</script>
<!-- lang="less" scoped-->
<style>
.login_container {
  background-color: #2b4b6b;
  height: 100%;
}

.login_box {
  width: 450px;
  height: 300px;
  background-color: white;
  border-radius: 3px;
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
}

/* icon */
img {
  width: 150px;
  left: 50%;
  top: 0%;
  position: absolute;
  transform: translate(-50%, -50%);
}

/* 登录按钮 */
.btns {
  display: flex;
  justify-content: center;
}

.login_form {
  position: absolute;
  bottom: 0;
  width: 80%;
  padding: 0 20px;
  box-sizing: border-box;
}
</style>
