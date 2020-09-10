<template>
  <div>
    <Layout />
    <el-container class="content">
      <el-main class="main">
        <div class="title">學校事務</div>
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="通識選課" name="learn">
            <LearnIndex/>
            <pagination />
          </el-tab-pane>
          <el-tab-pane label="獎學金" name="money">
            <MoneyIndex/>
            <pagination />
          </el-tab-pane>
          <el-tab-pane label="交換生" name="change">
            <ChangeIndex/>
            <pagination />
          </el-tab-pane>
          <el-tab-pane label="畢業門檻" name="graduation">
            <GraduationIndex/>
            <pagination />
          </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import Layout from '../../../layout/index'
import pagination from '../../util/pagination'
import MoneyIndex from './MoneyIndex'
import LearnIndex from './LearnIndex'
import ChangeIndex from './ChangeIndex'
import GraduationIndex from './GraduationIndex'
export default {
  components: {
    Layout,
    pagination,
    MoneyIndex,
    LearnIndex,
    ChangeIndex,
    GraduationIndex
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
      activeName: 'learn'
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
    padding-bottom: 20px;
  }

  .el-divider {
    margin: 15px
  }

  .search {
    width: 280px;
    margin-bottom: 20px;
  }

</style>
