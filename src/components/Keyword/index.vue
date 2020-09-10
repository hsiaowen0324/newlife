<template>
<div>
  <Layout/>
  <el-container class="content">
  <el-main class="main">
<div class="title px-5">關鍵字</div>
<el-row type="flex" justify="space-between" class="align-center">
  <div class="secondTitle px-5">透過關鍵字進行快速的資料檢索以達到即時性回復的效果</div>
 <AddModal/>
    </el-row>
    <el-divider></el-divider>
    <el-row type="flex" justify="end">
     <el-input placeholder="Search" v-model="searchAccount" class="search" clearable>
        </el-input>
    </el-row>
          <!--表格-->
    <el-table
    :data="tableData.filter(data => !search || name.Email.toLowerCase().includes(search.toLowerCase()))"
style="width: 100%">
    <el-table-column
      label="標題"
      prop="title"
      width="180"
      class="pl-2"
    >
    </el-table-column>
    <el-table-column
      label="相關關鍵字"
      prop="keyword"
      width="500"
  >
    </el-table-column>
    <el-table-column
      label="相關頁面"
      prop="page"
      width="180"
      align="center"
      >
    </el-table-column>
     <el-table-column>
      <template slot-scope="scope">
        <el-row type="flex" justify="end" >
        <EditModal/>
        <el-button
         class="mx-2"
          size="medium "
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">刪除<i class="el-icon-delete ml-2"></i></el-button>
        </el-row>
      </template>
    </el-table-column>
  </el-table>
  <pagination/>
  </el-main>
  </el-container>
</div>
</template>
<script>
import Layout from '../../layout/index'
import AddModal from './AddModal'
import EditModal from './EditModal'
import pagination from '../util/pagination'
export default {
  components: {
    Layout,
    AddModal,
    EditModal,
    pagination
  },
  data () {
    return {
      tableData: [{
        title: '宿舍',
        keyword: '宿舍、住宿、中原大學學生宿舍、中原大學男生宿舍、中原大學女生宿舍、學生宿舍、男宿、女宿',
        page: '住宿簡介'
      }, {
        title: '宿舍',
        keyword: '宿舍、住宿、中原大學學生宿舍、中原大學男生宿舍、中原大學女生宿舍、學生宿舍、男宿、女宿',
        page: '住宿簡介'
      },
      {
        title: '宿舍',
        keyword: '宿舍、住宿、中原大學學生宿舍、中原大學男生宿舍、中原大學女生宿舍、學生宿舍、男宿、女宿',
        page: '住宿簡介'
      },
      {
        title: '宿舍',
        keyword: '宿舍、住宿、中原大學學生宿舍、中原大學男生宿舍、中原大學女生宿舍、學生宿舍、男宿、女宿',
        page: '住宿簡介'
      } ],
      searchAccount: '' }
  },
  methods: {
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
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
.el-divider{
  margin:15px
}
.ml-2{
  margin-left:5px ;
}
.el-table{
 font-size: 16px;
  text-align: center;
  margin-bottom: 20px;
}
.search{
  width: 280px;
  margin-bottom:20px;
}
.align-center{
  align-items: center;
}
.mx-2{
  margin:0px 10px ;
}
.pl-2{
  padding:10px 0px ;
}
</style>
