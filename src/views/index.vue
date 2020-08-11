<template>
  <el-row :gutter="20">
    <el-col :span="7">
      <div class="myFormHeader">
        <el-card class="box-card">
          <!--登录表单文字-->
          <div slot="header" class="clearfix">
            <span>用户登录</span>
          </div>
          <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="用户名">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item style="margin-top: -10px">
            <el-col :span="8">
              <el-checkbox v-model="checked">记住密码</el-checkbox>
            </el-col>
            <el-col :span="16">
              <el-button type="text">忘记密码?</el-button>
            </el-col>
          </el-form-item>
          <el-form-item style="margin-top: -15px">
            <el-col :span="8">
              <el-button type="primary" @click="onSubmit" size="small" round plain>登录</el-button>
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

</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        form: {
          username: '',
          password:'',
        },
        checked:true
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style>

  .myFormHeader .el-card__header {
    padding: 18px 20px;
    border-bottom: 1px solid #EBEEF5;
    box-sizing: border-box;
    height: 50px;
    line-height: 15px;
    text-align: center;
  }

  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
   /* text-align: center;*/
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>