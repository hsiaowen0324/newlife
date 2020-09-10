<template>
<div>
  <Layout/>
  <el-container class="content">
  <el-main class="main">
    <el-row type="flex" justify="space-between">
<div class="title px-5">帳戶管理</div>
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
      label="姓名"
      prop="name"
      width="180"
      align="center"
    >
    </el-table-column>
    <el-table-column
      label="Email"
      prop="Email"
      width="500"
      align="center"
  >
    </el-table-column>
    <el-table-column
      label="權限"
      prop="auth"
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
        name: '王小虎',
        Email: '123456@gmail.com',
        auth: '管理員'
      }, {
        name: '王小虎',
        Email: '123456@gmail.com',
        auth: '管理員'
      }, {
        name: '王小虎',
        Email: '123456@gmail.com',
        auth: '管理員'
      }, {
        name: '王小虎',
        Email: '123456@gmail.com',
        auth: '管理員'
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
  margin-bottom:20px ;
}
.mx-2{
  margin:0px 10px ;
}

</style>
