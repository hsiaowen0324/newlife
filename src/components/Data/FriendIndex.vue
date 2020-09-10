<template>
<div>
    <el-row type="flex" class="row-bg" justify="space-around">
  <el-col :span="7"><div class="grid-content bg-purple" >所有好友數 89</div></el-col>
  <el-col :span="7"><div class="grid-content bg-purple-light">所有好友數 89</div></el-col>
  <el-col :span="7"><div class="grid-content bg-purple">所有好友數 89</div></el-col>
</el-row>
<el-row type="flex" justify="center">
  <el-col :span="23"><div class="grid-content bg-purple-dark"></div></el-col>
</el-row >
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
</div>
</template>

<script>
import AddModal from './AddModal'
import EditModal from './EditModal'
import pagination from '../util/pagination'
export default {
  components: {
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

<style>
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

  .grid-content {
    border-radius: 4px;
    min-height: 100px;
    font-size: 20px;
    text-align: center;
    line-height: 120px;
    border: #909399 2px solid;
    margin: 10px;
  }
  .number{
      font-size: 24px;
  }
</style>
