<template>
<div>
  <Layout/>
  <el-container class="content">
  <el-main class="main">
<div class="title px-5">校園生活</div>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="校內打工" name="work">
            <WorkModal/>
          </el-tab-pane>
          <el-tab-pane label="學校活動" name="activity">
            <ActivityModal/>
          </el-tab-pane>
          <el-tab-pane label="學校社團" name="club">
            <ClubModal/>
          </el-tab-pane>
        </el-tabs>
  </el-main>
  </el-container>
</div>
</template>
<script>
import Layout from '../../../layout/index'
import EditIntroModal from './EditIntroModal'
import EditModal from './EditModal'
import pagination from '../../util/pagination'
import WorkModal from './WorkModal'
import ActivityModal from './ActivityModal'
import ClubModal from './ClubModal'
export default {
  components: {
    Layout,
    EditIntroModal,
    EditModal,
    WorkModal,
    ActivityModal,
    ClubModal,
    pagination
  },
  data () {
    return {
      activeName: 'work'
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
  padding-bottom: 15px;
}
</style>
