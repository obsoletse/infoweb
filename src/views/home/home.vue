<template>
    <div>
        <el-menu
                router
                mode="horizontal"
                background-color="white"
                text-color="#222"
                active-text-color="red"
                style="min-width: 1300px">
            <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name" style="left:32%">
                {{ item.navItem }}
            </el-menu-item>
            <div style="position: absolute;padding-top: 12px;left:10%"><el-avatar :size="38" :src="iconImag"></el-avatar></div>
            <span style="position: absolute;padding-top: 20px;left:15%;font-size: 20px;font-weight: bold">Your Mind Palace</span>

            <div style="position: absolute;padding-top: 13px;right:15%">
                <el-input placeholder="请输入内容" v-model="input3" class="input" style="width: 350px">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </div>
            <div style="position: absolute;padding-top: 10px;right:5%">
                <el-dropdown @command="handleCommand" >
                    <div><el-avatar :src="userImag"></el-avatar></div>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="userInfo">我的资料</el-dropdown-item>
                        <el-dropdown-item command="userWallet">我的钱包</el-dropdown-item>
                        <el-dropdown-item command="userOrder">我的订单</el-dropdown-item>
                        <el-dropdown-item command="userMessage" >消息</el-dropdown-item>
                        <el-dropdown-item command="help" >帮助</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </el-menu>
        <router-view/>
    </div>
</template>

<script>
    export default {
            name: "home",
            methods: {
                handleCommand(command) {
                    if(command=='userInfo')
                    {
                        this.$router.push('/userInfo')
                    }
                    if(command=='userWallet')
                    {
                        this.$router.push('/userWallet')
                    }
                    if(command=='userOrder')
                    {
                        this.$router.push('/userOrder')
                    }
                    if(command=='userMessage')
                    {
                        this.$router.push('/userMessage')
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
                        {name: '/info', navItem: '消息中心'},
                        {name: '/question', navItem: '问答'},
                        {name: '/workSpace', navItem: '我的工作台'},
                        {name: '/list', navItem: '排行榜'}
                    ],
                    iconImag: require('../../assets/logo.png'),
                    userImag: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
                    input3: ''

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
