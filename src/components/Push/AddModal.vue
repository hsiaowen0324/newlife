<template>
<!-- Form -->
<div>
<el-button @click="dialogFormVisible = true" plain class="plus">新增<i class="el-icon-plus el-icon--right"></i>
    </el-button>
<el-dialog title="新增推播訊息" :visible.sync="dialogFormVisible">
  <el-form :model="form" class="form">
    <el-form-item label="標題" :label-width="formLabelWidth">
      <el-input v-model="form.title" autocomplete="off" ></el-input>
    </el-form-item>
    <el-form-item label="推播對象" :label-width="formLabelWidth">
       <el-radio-group v-model="form.objective">
      <el-radio label="立即傳送"></el-radio>
      <el-radio label="預約排程"></el-radio>
    </el-radio-group>
    </el-form-item>
    <el-form-item label="傳送對象" :label-width="formLabelWidth">
 <el-radio-group v-model="form.objective">
      <el-radio label="所有好友"></el-radio>
      <el-radio label="篩選目標"></el-radio>
    </el-radio-group>
    </el-form-item>
     <el-form-item label="推播內容" :label-width="formLabelWidth">
      <el-input type="textarea" v-model="form.content" ></el-input>
    </el-form-item>
    <el-form-item label="圖片上傳" :label-width="formLabelWidth">
        <el-upload
  action="#"
  list-type="picture-card"
  :auto-upload="false">
    <i slot="default" class="el-icon-plus"></i>
    <div slot="file" slot-scope="{file}">
      <img
        class="el-upload-list__item-thumbnail"
        :src="file.url" alt=""
      >
      <span class="el-upload-list__item-actions">
        <span
          class="el-upload-list__item-preview"
          @click="handlePictureCardPreview(file)"
        >
          <i class="el-icon-zoom-in"></i>
        </span>
        <span
          v-if="!disabled"
          class="el-upload-list__item-delete"
          @click="handleDownload(file)"
        >
          <i class="el-icon-download"></i>
        </span>
        <span
          v-if="!disabled"
          class="el-upload-list__item-delete"
          @click="handleRemove(file)"
        >
          <i class="el-icon-delete"></i>
        </span>
      </span>
    </div>
</el-upload>
<el-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button type="success" @click="dialogFormVisible = false">儲存</el-button>
    <el-button @click="dialogFormVisible = false">存為草稿</el-button>
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
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
      form: {
        title: '',
        keyword: '',
        objective: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '200px',
      inputValue: ''
    }
  },
  methods: {
    handleRemove (file) {
      console.log(file)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handleDownload (file) {
      console.log(file)
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
.el-input{
  width: 75%
}
.mb-2{
  margin-bottom: 10px;
}

</style>
