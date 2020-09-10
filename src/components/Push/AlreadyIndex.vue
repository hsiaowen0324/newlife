 <template>
   <el-table :data="tableData" style="width: 100%">
     <el-table-column prop="title" label="標題" width="120">
     </el-table-column>
     <el-table-column label="圖片" width="320">
       <template slot-scope="scope">
          <img :src="scope.row.scheduledImg" width="300" height="200"/>
        </template>
     </el-table-column>
     <el-table-column prop="content" label="推播內容" width="400">
     </el-table-column>
      <el-table-column prop="objective" label="推播對象" width="160">
     </el-table-column>
     <el-table-column prop="date" label="推播時間" width="180">
     </el-table-column>

   </el-table>
 </template>

<script>

export default {
  data () {
    return {
      tableData: [{
        title: '防疫須知',
        scheduledImg: 'https://www.skh.org.tw/skh_resource/leap_do/gallery/001/1583228425788/%E6%96%B0%E5%85%89%E9%86%AB%E9%99%A2_%E9%98%B2%E7%AF%84COVID-19%E5%AE%A3%E5%B0%8E%E6%B5%B7%E5%A0%B1-%E9%A0%90%E9%98%B2%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A0%85.jpg',
        content: '防疫期間請各位多留意自己身心健康，勤洗手戴口罩，盡量少進出人多的場合',
        date: '2016-05-02',
        objective: '所有好友'
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
