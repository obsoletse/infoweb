<template>
  <div class="my">
    <div class="background">
      <img :src="imgSrc" width="100%" height="100%" alt=""/>
    </div>
    <div class="front" >
      <el-row type="flex" justify="center" align="middle">
        <el-col :span="8">
          <div class="myFormHeader">
            <el-card class="box-card">
              <!--登录表单文字-->
              <div slot="header" style="text-align: center">
                <span>用户登录</span>
              </div>
              <el-form ref="loginForm" :model="form" label-width="80px" :rules="rules">
                <el-form-item label="用户名" prop="username">
                  <el-input v-model="form.username" clearable="true"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                  <el-input type="password" v-model="form.password" clearable="true"></el-input>
                </el-form-item>
                <el-form-item style="margin-top: -10px">
                  <el-col :span="8" style="font-size: 11px">
                    <el-checkbox v-model="form.checked">记住密码</el-checkbox>
                  </el-col>
                  <el-col :span="16">
                    <el-button type="text" style="float: right;margin-right: 100px;font-size: 11px">忘记密码?</el-button>
                  </el-col>
                </el-form-item>
                <el-form-item style="margin-top: -15px">
                    <el-col :span="12" style="text-align: center">
                      <el-button type="primary" @click="onSubmit('loginForm')" size="small" round plain>登录</el-button>
                    </el-col>
                    <el-col :span="6">
                      <el-button size="small" round>取消</el-button>
                    </el-col>
                </el-form-item>
              </el-form>
            </el-card>
          </div>
        </el-col>
      </el-row>
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
  /*@import "./assets/css/main.css";*/
</style>