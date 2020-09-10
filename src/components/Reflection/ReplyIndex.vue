 <template>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="回覆時間"
        width="180">
      </el-table-column>
      <el-table-column
        prop="question"
        label="問題"
        width="500">
      </el-table-column>
      <el-table-column
        prop="replycontent"
        label="回覆內容"
        width="500">
      </el-table-column>
    </el-table>
  </template>

<script>
export default {
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
  }
}
</script>
<style scoped>
.el-table {
    font-size: 16px;
    text-align: center;
    margin: 10px 0px 20px 0px;
  }

</style>
