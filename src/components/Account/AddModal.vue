<template>
<!-- Form -->
<div>
<el-button @click="dialogFormVisible = true" plain class="plus">新增<i class="el-icon-plus el-icon--right"></i></el-button>
<el-dialog title="新增帳戶" :visible.sync="dialogFormVisible">
  <el-form :model="form" class="form">
    <el-form-item label="使用者名稱" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off" ></el-input>
    </el-form-item>
    <el-form-item label="Email" :label-width="formLabelWidth">
      <el-input v-model="form.Email" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="管理權限" :label-width="formLabelWidth" placeholder="管理員">
      <el-select v-model="form.auth" placeholder="請選擇管理權限">
        <el-option label="管理員" value="admin"></el-option>
        <el-option label="文章編輯" value="editor"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button type="success" @click="dialogFormVisible = false">保存</el-button>
    <el-button @click="dialogFormVisible = false">取消</el-button>
  </div>
</el-dialog>
</div>
</template>
<script>
export default {
  data () {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: '',
        Email: '',
        auth: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '200px'
    }
  }
}
</script>
<style scoped>
.plus{
  font-size: 16px;
  color: #292a2b;
  padding:10px 15px;
}
.el-icon-plus{
  color:red;
  font-weight: bolder;
}
.form{
  width: 80%;
  align-items: center;
}
</style>
