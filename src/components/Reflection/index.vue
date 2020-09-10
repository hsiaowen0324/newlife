<template>
  <div>
    <Layout />
    <el-container class="content">
      <el-main class="main">
        <div class="title">問題反映</div>
        <div class="secondTitle">回覆同學們的問題並新增至資料庫內容</div>
        <el-divider></el-divider>
        <el-row type="flex" justify="end">
          <el-date-picker v-model="datepicker" type="date" placeholder="選擇日期">
          </el-date-picker>
        </el-row>
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="未回覆" name="none">
            <NoneIndex/>
            <pagination />
          </el-tab-pane>
          <el-tab-pane label="已回覆" name="reply">
            <ReplyIndex/>
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
import ReplyIndex from './ReplyIndex'
import NoneIndex from './NoneIndex'
export default {
  components: {
    Layout,
    pagination,
    ReplyIndex,
    NoneIndex
  },
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        question: '何時繳費，如何繳費？'
      }, {
        date: '2016-05-02',
        question: '何時繳費，如何繳費？'
      },
      {
        date: '2016-05-02',
        question: '何時繳費，如何繳費？'
      },
      {
        date: '2016-05-02',
        question: '何時繳費，如何繳費？'
      }
      ],
      searchAccount: '',
      datepicker: '',
      activeName: 'none'
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

  .search {
    width: 280px;
    margin-bottom: 20px;
  }

</style>
