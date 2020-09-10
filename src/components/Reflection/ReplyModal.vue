<template>
<!-- Form -->
<div>
<el-button @click="dialogFormVisible = true" plain >回覆<i class="el-icon-chat-dot-round el-icon--right"></i></el-button>
<el-dialog title="新增關鍵字" :visible.sync="dialogFormVisible">
  <el-form :model="form" class="form">
    <el-form-item label="標題" :label-width="formLabelWidth">
      <div class="content">採 ATM 或其他金融機構匯款繳交學雜費、體檢費、學生會費一定要分成 3 筆繳費嗎？</div>
    </el-form-item>
    <el-form-item label="回覆內容" :label-width="formLabelWidth">
      <el-input v-model="form.Email" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="相關頁面" :label-width="formLabelWidth" placeholder="管理員">
      <el-select v-model="form.auth" placeholder="請選擇相關頁面">
        <el-option label="帳戶管理" value="admin"></el-option>
        <el-option label="推播中心" value="editor"></el-option>
      </el-select>
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
        keyword: '',
        page: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '200px',
      dynamicTags: [],
      inputVisible: false,
      inputValue: ''
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
.el-icon-plus{
  color:red;
  font-weight: bolder;
}
.form{
  width: 80%;
  align-items: center;
}
.content{
  font-size: 16px;
  line-height:30px;
}
</style>
