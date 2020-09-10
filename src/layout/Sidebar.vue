 <template>
 <div>
 <el-col :span="6">
    <el-menu
      default-active="activeIndex"
      class="vertical-sidebar"
      @open="handleOpen"
      @close="handleClose"
      background-color="#343a40"
      text-color="#fff"
      router
      >
      <el-menu-item index="/">
      <font-awesome-icon icon="tachometer-alt" class="mx-2"/>
        <span slot="title">控制台</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <font-awesome-icon icon="file-alt" class="mx-2"/>
          <span>所有頁面</span>
        </template>
        <el-submenu index="/AllPage" class="pl-2">
          <template slot="title" >註冊須知</template>
          <el-menu-item index="/schoolLoan" class="sub-title">就學貸款</el-menu-item>
          <el-menu-item index="1-4-1" class="sub-title">優待減免</el-menu-item>
          <el-menu-item index="1-4-1" class="sub-title">弱勢助學</el-menu-item>
          <el-menu-item index="1-4-1" class="sub-title">繳費方式</el-menu-item>
          <el-menu-item index="1-4-1" class="sub-title">註冊流程</el-menu-item>
          <el-menu-item index="1-4-1" class="sub-title">註冊資訊</el-menu-item>
          <el-menu-item index="1-4-1" class="sub-title">新生抵免</el-menu-item>
          <el-menu-item index="1-4-1" class="sub-title">新生體驗營</el-menu-item>
        </el-submenu>
        <el-menu-item index="/department" class="sub-title-height">
        <span slot="title" class="sub-title-padding">系所介紹</span>
      </el-menu-item>
       <el-menu-item index="/schoolAffair" class="sub-title-height">
        <span slot="title" class="sub-title-padding">學校事務</span>
      </el-menu-item>
       <el-menu-item index="/dorm" class="sub-title-height">
        <span slot="title" class="sub-title-padding">住宿簡介</span>
      </el-menu-item>
       <el-menu-item index="/food" class="sub-title-height">
        <span slot="title" class="sub-title-padding">周邊美食</span>
      </el-menu-item>
       <el-menu-item index="/hospital" class="sub-title-height">
        <span slot="title" class="sub-title-padding">醫療相關</span>
      </el-menu-item>
       <el-menu-item index="/Life" class="sub-title-height">
        <span slot="title" class="sub-title-padding">校園生活</span>
      </el-menu-item>
      </el-submenu>
      <el-menu-item index="/keyword">
       <font-awesome-icon icon="file-word" class="mx-2"/>
        <span slot="title" >關鍵字</span>
      </el-menu-item>
      <el-menu-item index="/push" >
       <font-awesome-icon icon="volume-down" class="mx-2"/>
        <span slot="title">推播中心</span>
      </el-menu-item>
      <el-menu-item index="/account">
        <font-awesome-icon icon="user" class="mx-2"/>
        <span slot="title">帳戶管理</span>
      </el-menu-item>
      <el-menu-item index="/data">
      <font-awesome-icon icon="chart-line" class="mx-2"/>
        <span slot="title">數據分析</span>
      </el-menu-item>
      <el-menu-item index="/reflection">
      <font-awesome-icon icon="question-circle" class="mx-2"/>
        <span slot="title">問題反映</span>
      </el-menu-item>
    </el-menu>
  </el-col>
  <router-view></router-view>
 </div>
</template>

<script>

export default {
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style scoped>
.vertical-sidebar{
    display: flex;
    flex-direction: column;
    position: fixed !important;
    top: 0;
    height: 100vh;
    width: 180px;
    padding:20px 0px;
}
.mx-2{
  margin: 0px 10px;
}
i{
  font-size: 20px;
align-self: center;
}
.title{
  align-self: start;
}
.pl-2{
  padding: 0px 10px;
}
.sub-title{
  font-size: 16px;
  height: 30px;
  line-height: 30px;
}
.sub-title-height{
height: 40px;
line-height: 40px;
}
.sub-title-padding{
padding: 0px 10px;
}
</style>
