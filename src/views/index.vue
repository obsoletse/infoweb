<template>
   <div class="my">
      <div class="background">
        <img :src="imgSrc" width="100%" height="100%" alt=""/>
      </div>
      <div class="front" >
                <el-form class="login-container" ref="loginForm" :model="form"  :rules="rules" label-position="left" label-width="0px">
                  <h3 class="login_title">用户登录</h3>
                  <el-form-item  prop="username">
                       <el-input v-model="form.username" clearable="true" auto-complete="off" placeholder="账号" ></el-input>
                  </el-form-item>
                  <el-form-item prop="password">
                  <el-input type="password" v-model="form.password" clearable="true" auto-complete="off" placeholder="密码"></el-input>
                  </el-form-item>
                <el-form-item style="width: 100%">
                  <el-row :gutter="20">
                    <el-col :span="16">
                      <el-checkbox v-model="form.checked">记住密码</el-checkbox>
                    </el-col>
                    <el-col :span="8">
                      <el-button type="text" style="float: right;margin-right: 100px;font-size: 11px">忘记密码?</el-button>
                    </el-col>
                  </el-row>
                </el-form-item>
                  <el-form-item style="width: 100%">
                     <el-button type="primary"  style="width: 100%;background: #505458;border: none" @click="onSubmit('loginForm')" >登录</el-button>
                  </el-form-item>
                </el-form>
<!-

<!--              <el-form ref="loginForm" :model="form" label-width="80px" :rules="rules">-->
<!--                <el-form-item  prop="username">-->
<!--                  <el-input v-model="form.username" clearable="true"></el-input>-->
<!--                </el-form-item>-->
<!--                <el-form-item  prop="password">-->
<!--                  <el-input type="password" v-model="form.password" clearable="true"></el-input>-->
<!--                </el-form-item>-->
<!--                -->
<!--                <el-form-item style="margin-top: -10px">-->
<!--                  <el-col :span="8" style="font-size: 11px">-->
<!--                    <el-checkbox v-model="form.checked">记住密码</el-checkbox>-->
<!--                  </el-col>-->
<!--                  <el-col :span="16">-->
<!--                    <el-button type="text" style="float: right;margin-right: 100px;font-size: 11px">忘记密码?</el-button>-->
<!--                  </el-col>-->
<!--                </el-form-item>-->
<!--                <el-form-item style="margin-top: -15px">-->
<!--                  <el-col :span="12" style="text-align: center">&ndash;&gt;-->
<!--                      <el-button type="primary" @click="onSubmit('loginForm')" >登录</el-button>-->
<!--                    </el-col>-->
<!--                    <el-col :span="6">-->
<!--                      <el-button size="small" round>取消</el-button>-->
<!--                    </el-col>-->
<!--                </el-form-item>-->
<!--              </el-form>-->
    </div>
  </div>
</template>

<script>
  import requests from "@utils/request";

  export default {
    name: "index",
    data() {
      return {
        imgSrc:require('@assets/background.jpg'),
        form: {
          username: '',
          password:'',
          checked:true,
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 5, max: 20, message: '长度在 5 到 20 个字符', trigger: 'blur' }
          ],
          password: [{ required: true, message: '请输入密码', trigger: 'blur' },]
        },
        url:{
          login:'/hello/login'
        }
      }
    },
    methods: {
      onSubmit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let params = this.form //定义参数
            requests.postAction(this.url.login,params)
              .then(res => {
                if (res.data.success == true){
                  this.$message.success(res.data.message)
                  this.$router.push('/home')
                }else {
                  this.$message.error(res.data.message)
                }
              })
          } else {
            this.$message.error("表单校验不通过，请按照校验规则重新输入！")
            return false;
          }
        });
      }
    }
  }
</script>

<style>

  /*.myFormHeader .el-card__header {
    padding: 18px 20px;
    border-bottom: 1px solid #EBEEF5;
    box-sizing: border-box;
    height: 50px;
    line-height: 15px;
    text-align: center;
  }*/

  .my .background{
    width:100%;
    height:100%;  /**宽高100%是为了图片铺满屏幕 */
    z-index:-1;
    position: absolute;
  }

  .my .front{
    width:100%;
    height:100%;  /**宽高100%是为了图片铺满屏幕 */
    z-index:1;
    position: absolute;
  }

  .el-row{
    box-sizing: border-box;
    height: 100%;
  }

  .login-container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 90px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }

  .login_title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  /*@import "./assets/css/main.css";*/
</style>
