<template>
  <!-- Form -->
  <div>
   <el-button size="medium " @click="dialogFormVisible = true" plain class="mx-2">編輯<i class="el-icon-edit"></i>
    </el-button>
    <el-dialog title="系所介紹編輯" :visible.sync="dialogFormVisible">
      <el-form :model="form" class="form">
        <el-form-item label="相關關鍵字" :label-width="formLabelWidth">
          <el-tag :key="tag" v-for="tag in dynamicTags" closable :disable-transitions="false" @close="handleClose(tag)" class="mx-2">
            {{tag}}
          </el-tag>
          <el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue" ref="saveTagInput"
            @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm">
          </el-input>
          <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 新增關鍵字</el-button>
        </el-form-item>
        <el-form-item label="簡介" :label-width="formLabelWidth">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="連絡電話" :label-width="formLabelWidth">
          <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item  :label-width="formLabelWidth">
          <div class="demo-image__preview">
  <el-image
    style="width:360px; height:230px"
    :src="url"
    :preview-src-list="srcList">
  </el-image>
</div>
<el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
    :file-list="fileList"
  list-type="picture">
        <el-button type="infp" size="small">圖片變更</el-button>
        </el-upload>
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
        title: '',
        phone: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        fileList: ''
      },
      formLabelWidth: '200px',
      dynamicTags: [],
      inputVisible: false,
      inputValue: '',
      url: 'https://mnya.tw/yo/wp-content/uploads/947-20.jpg'
    }
  },
  methods: {
    handleClose (tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
    },

    showInput () {
      this.inputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },

    handleInputConfirm () {
      let inputValue = this.inputValue
      if (inputValue) {
        this.dynamicTags.push(inputValue)
      }
      this.inputVisible = false
      this.inputValue = ''
    }
  }
}

</script>
<style scoped>
  .plus {
    font-size: 16px;
    color: #292a2b;
    padding: 10px 15px;
  }

  .el-icon-plus {
    color: red;
    font-weight: bolder;
  }

  .form {
    width: 80%;
    align-items: center;
  }
  .mx-2{
    margin: 0px 3px;
  }

</style>
