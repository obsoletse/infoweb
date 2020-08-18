<template>
  <el-menu
          :default-active="'/index'"
          router
          mode="horizontal"
          background-color="white"
          text-color="#222"
          active-text-color="red"
          style="min-width: 1300px"
  >
    <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name" style="left: 20%">
      {{ item.navItem }}

    </el-menu-item>


    <span style="position: absolute;padding-top: 20px;left: 7%;font-size: 20px;font-weight: bold">Your Mind Palace</span>

      <div class="block" style="position: absolute;padding-top: 6px;left:3%"><el-avatar :size="45" :src="circleUrl"></el-avatar>
      </div>
      <el-dropdown @command="handleCommand" >
          <div class="block" style="position: absolute;padding-top: 6px;left:3%" ><el-avatar :size="45" :src="circleUrl"></el-avatar></div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="My-information">我的资料</el-dropdown-item>
        <el-dropdown-item command="My-wallet">我的钱包</el-dropdown-item>
        <el-dropdown-item command="My-order">我的订单</el-dropdown-item>
        <el-dropdown-item command="massage" >消息</el-dropdown-item>
        <el-dropdown-item command="help" >帮助</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-menu>
</template>

<script>
  export default {
    name: "home",
    methods: {
      handleCommand(command) {
        if(command=='My-information')
        {
          this.$router.push('/My-information')
        }
        if(command=='My-wallet')
        {
          this.$router.push('/My-wallet')
        }
        if(command=='My-order')
        {
          this.$router.push('/My-order')
        }
        if(command=='massage')
        {
          this.$router.push('/massage')
        }
        if(command=='help')
        {
          this.$router.push('/help')
        }
      }

    },
    data () {

      return {
        navList: [
          {name: '/massage', navItem: '消息中心'},
          {name: '/workbench', navItem: '我的工作台'},
          {name: '/oder', navItem: '订单管理'},
          {name: '/hall', navItem: '大厅'}
        ],
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
      }
    }
  }
</script>

<style scoped>
  a{
    text-decoration: none;
  }

  span {
    pointer-events: none;
  }
</style>
<style>
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>

