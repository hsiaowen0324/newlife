<template>
  <div>
    <Layout />
    <el-container class="content">
      <el-main class="main">
        <div class="title px-5">推播中心</div>
        <el-row type="flex" justify="space-between" class="align-center">
        <div class="secondTitle px-5">透過編輯圖文素材向用戶推播豐富的資訊</div>
        <AddModal/>
        </el-row>
        <el-divider></el-divider>
        <el-row type="flex" justify="end">
          <el-input placeholder="Search" v-model="searchAccount" class="search" clearable>
        </el-input>
        </el-row>
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="已排程" name="scheduled">
            <ScheduledIndex/>
            <pagination />
          </el-tab-pane>
          <el-tab-pane label="草稿" name="draft">
            <DraftIndex/>
            <pagination />
          </el-tab-pane>
           <el-tab-pane label="已傳送" name="already">
             <AlreadyIndex/>
            <pagination />
          </el-tab-pane>
           <el-tab-pane label="無法傳送" name="none">
             <NoneIndex/>
            <pagination />
          </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import Layout from '../../layout/index'
import pagination from '../util/pagination'
import AddModal from './AddModal'
import ScheduledIndex from './ScheduledIndex'
import DraftIndex from './DraftIndex'
import AlreadyIndex from './AlreadyIndex'
import NoneIndex from './NoneIndex'
export default {
  components: {
    Layout,
    pagination,
    AddModal,
    ScheduledIndex,
    DraftIndex,
    AlreadyIndex,
    NoneIndex
  },
  data () {
    return {
      searchAccount: '',
      datepicker: '',
      activeName: 'scheduled'
    }
  },
  methods: {
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    },
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}

</script>
<style scoped>
  .el-main {
    margin-left: 11%;
    padding: 2% 5%;
  }

  .title {
    font-size: 26px;
   padding-bottom: 5px;
  }

  .el-divider {
    margin: 15px
  }

  .ml-2 {
    margin-left: 5px;
  }

  .search {
    width: 280px;
    margin-bottom: 20px;
  }

  .align-center {
    align-items: center;
  }

  .mx-2 {
    margin: 0px 10px;
  }

  .pl-2 {
    padding: 10px 0px;
  }

</style>
