<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#f5f5f5" @select="handleSelect">
      <el-row type="flex" class="logoposition" justify="space-between">
      <logo />
      <el-row type="flex" class="row-bg" justify="end">
      <div style="margin: 5px;">
      </div>
      <div style="margin: 5px;">
      <el-dropdown>
      <el-button plain>
        <el-image style="width: 45px; height: 35px" :src="imageurl2"></el-image>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>我的資料</el-dropdown-item>
          <el-dropdown-item>登出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      </div>
    </el-row>
    </el-row>
  </el-menu>
</template>
<script>
import logo from './logo'
export default {
  components: {
    logo
  },
  data () {
    return {
      imageurl2: 'https://i.imgur.com/78sD1Oc.png',
      search: '',
      activeIndex: '1'

    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}

</script>
<style scoped>
  .el-button {
    padding: 3px 8px;
    margin-left: 10px;
    margin-right: 10px;
    border-color:#28a745 ;
    background-color: rgb(245, 245, 245);
  }

  .el-dropdown {
    vertical-align: top;
  }

  .el-dropdown+.el-dropdown {
    margin-left: 15px;
  }

  .el-icon-arrow-down {
    font-size: 12px;
  }
  .logoposition{
      margin-left: 13%;
  }
</style>
