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
    <a href="#nowhere" style="position: absolute;padding-top: 17px;right:2%;color: #222;">更多功能</a>

    <span style="position: absolute;padding-top: 20px;left: 7%;font-size: 20px;font-weight: bold">Your Mind Palace</span>
      <div class="block" style="position: absolute;padding-top: 6px;left:3%"><el-avatar :size="45" :src="circleUrl"></el-avatar></div>
      <div class="block" style="position: absolute;padding-top: 10px;right:7%"><el-avatar :size="40" :src="circleUrl"></el-avatar></div>

  </el-menu>
</template>

<script>
  export default {
    name: "home",
    data () {
      return {
        navList: [
          {name: '/index', navItem: '消息中心'},
          {name: '/jotter', navItem: '我的工作台'},
          {name: '/library', navItem: '订单管理'},
          {name: '/admin', navItem: '回到首页'}
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