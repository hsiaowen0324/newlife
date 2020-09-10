<template>
<div>
  <Layout/>
  <el-container class="content">
  <el-main class="main">
 <el-tabs v-model="activeName"  @tab-click="handleClick">
          <el-tab-pane label="好友" name="friend">
            <FriendIndex/>
          </el-tab-pane>
          <el-tab-pane label="訊息" name="message">
            <MessageIndex/>
          </el-tab-pane>
          <el-tab-pane label="關鍵字" name="keyword">
            <KeywordIndex/>
          </el-tab-pane>
           <el-tab-pane label="推播" name="push">
            <PushIndex/>
          </el-tab-pane>
        </el-tabs>
  </el-main>
  </el-container>
</div>
</template>
<script>
import Layout from '../../layout/index'
import FriendIndex from './FriendIndex'
import MessageIndex from './MessageIndex'
import KeywordIndex from './KeywordIndex'
import PushIndex from './PushIndex'
export default {
  components: {
    Layout,
    FriendIndex,
    MessageIndex,
    KeywordIndex,
    PushIndex
  },
  data () {
    return {
      activeName: 'friend'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
<style scoped>
.el-main{
  margin-left: 11%;
  padding:2% 5%
}
.title{
  font-size: 26px;
  padding-bottom: 5px;
}

</style>
