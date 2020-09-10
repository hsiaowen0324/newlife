<template>
  <!-- Form -->
  <div>
    <el-button @click="dialogFormVisible = true" plain class="plus">新增<i class="el-icon-plus el-icon--right"></i>
    </el-button>
    <el-dialog title="新增推播訊息" :visible.sync="dialogFormVisible">
      <el-form :model="form" >
        <el-row type="flex"  justify="center">
          <el-form-item label="圖片上傳">
            <el-upload action="#" list-type="picture-card" :auto-upload="false" :limit="1" :multiple="false">
              <i slot="default" class="el-icon-plus"></i>
              <div slot="file" slot-scope="{file}">
                <img class="el-upload-list__item-thumbnail" :src="file.url" alt="">
                <span class="el-upload-list__item-actions">
                  <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                    <i class="el-icon-zoom-in"></i>
                  </span>
                  <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleDownload(file)">
                    <i class="el-icon-download"></i>
                  </span>
                  <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
                    <i class="el-icon-delete"></i>
                  </span>
                </span>
              </div>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
          </el-form-item>
          <div class="form-inside">
            <el-form-item label="名稱:" :label-width="formLabelWidth">
              <el-input v-model="form.title" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="電話:" :label-width="formLabelWidth">
              <el-input v-model="form.phone" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="價錢:" :label-width="formLabelWidth">
              <el-input v-model="form.price" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="住宿人數(房):" :label-width="formLabelWidth">
              <el-input v-model="form.room" autocomplete="off"></el-input>
            </el-form-item>
  <el-form-item label="相關關鍵字" :label-width="formLabelWidth">
          <el-tag :key="tag" v-for="tag in dynamicTags" closable :disable-transitions="false" @close="handleClose(tag)" class="mx-2">
            {{tag}}
          </el-tag>
          <el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue" ref="saveTagInput"
            @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm">
          </el-input>
          <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 新增關鍵字</el-button>
        </el-form-item>
        <el-form-item label="限制條件:" class="option-group">
    <el-select v-model="form.gender" placeholder="請選擇">
      <el-option label="男宿" value="boy"></el-option>
      <el-option label="女宿" value="girl"></el-option>
    </el-select>
  </el-form-item>
          </div>
        </el-row>
        <el-divider></el-divider>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="success" @click="dialogFormVisible = false">儲存</el-button>
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
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
      form: {
        title: '',
        phone: '',
        price: '',
        room: '',
        gender: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '150px',
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
<style>
  .plus {
    font-size: 16px;
    color: #292a2b;
    padding: 10px 15px;
  }

  .el-icon-plus {
    color: red;
    font-weight: bolder;
  }

  .mb-2 {
    margin-bottom: 10px;
  }
.option-group{
  margin-left:50px;
}
.el-form-item{
  margin-bottom: 10px;
  line-height: 35px;
}
.el-upload--picture-card{
width: 200px;
height: 200px;
line-height: 200px;
}
</style>
