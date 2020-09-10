<template>
    <el-table style="width: 100%" :data="tableData">
              <el-table-column label="提問時間" prop="date" width="200" class="pl-2">
              </el-table-column>
              <el-table-column label="問題" prop="question" width="600">
              </el-table-column>
              <el-table-column>
                <template slot-scope="scope">
                  <el-row type="flex" justify="end">
                    <ReplyModal />
                    <el-button class="mx-2" size="medium " type="danger" @click="handleDelete(scope.$index, scope.row)">
                      刪除<i class="el-icon-delete ml-2"></i></el-button>
                  </el-row>
                </template>
              </el-table-column>
            </el-table>
  </template>

<script>
import ReplyModal from './ReplyModal'
export default {
  components: {
    ReplyModal
  },
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        question: '採 ATM 或其他金融機構匯款繳交學雜費、體檢費、學生會費一定要分成 3 筆繳費嗎？',
        replycontent: '對的，因為每一筆費用的繳款編號不同，不能合併繳費呦~'
      }, {
        date: '2016-05-02',
        question: '採 ATM 或其他金融機構匯款繳交學雜費、體檢費、學生會費一定要分成 3 筆繳費嗎？',
        replycontent: '對的，因為每一筆費用的繳款編號不同，不能合併繳費呦~'
      }, {
        date: '2016-05-02',
        question: '採 ATM 或其他金融機構匯款繳交學雜費、體檢費、學生會費一定要分成 3 筆繳費嗎？',
        replycontent: '對的，因為每一筆費用的繳款編號不同，不能合併繳費呦~'
      }, {
        date: '2016-05-02',
        question: '採 ATM 或其他金融機構匯款繳交學雜費、體檢費、學生會費一定要分成 3 筆繳費嗎？',
        replycontent: '對的，因為每一筆費用的繳款編號不同，不能合併繳費呦~'
      }]
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
  .pl-2 {
    padding: 10px 0px;
  }
  .el-table {
    font-size: 16px;
    text-align: center;
    margin: 10px 0px 20px 0px;
  }
   .ml-2 {
    margin-left: 5px;
  }
.mx-2 {
    margin: 0px 10px;
  }

</style>
