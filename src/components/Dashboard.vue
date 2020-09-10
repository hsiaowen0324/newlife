<template>
<div>
  <Layout/>
  <el-container class="content">
  <el-main class="main">
<el-row :gutter="20">
    <div v-for="card in carditem"  :key="card.id">
  <el-col :span="6">
    <el-card shadow="always">
      <el-row type="flex" justify="space-between">
      <font-awesome-icon v-bind:icon="card.icon" class="grid-icon" size="6x"/>
       <div class="grid">
      <div class="grid-title">{{card.title}}</div>
      <div class="grid-number">{{card.number}}</div>
       </div>
      </el-row>
    </el-card>
  </el-col>
      </div>
</el-row>
<el-row :gutter="20" class="my-2">
   <el-col :span="16">
  <el-image  style="width: 790px; height: 352px" :src="chart1"></el-image>
   </el-col>
      <el-col :span="8">
         <el-image  :src="chart2"></el-image>
      </el-col>
</el-row>
<el-row :gutter="40" class="my-2">
   <el-col :span="10">
   <el-table
      :data="DCardtable"
       height="250"
      style="width: 100%">
      <el-table-column
        prop="DCard"
        label="Dcard實時關鍵字排行"
        :span="14">
      </el-table-column>
    </el-table>
   </el-col>
   <el-col :span="14">
       <el-table
      :data="tableData"
       height="250"
      style="width: 100%">
      <el-table-column
        prop="message"
        label="動態消息"
        :span="14">
      </el-table-column>
    </el-table>
   </el-col>
</el-row>

  </el-main>
  </el-container>
</div>
</template>
<script>
import Layout from '../layout/index'

export default {
  components: {
    Layout
  },
  data () {
    return {
      value: new Date(),
      chart1: 'https://www.microsoft.com/en-us/microsoft-365/blog/wp-content/uploads/sites/2/2012/06/Excel-charts-7.png',
      chart2: 'https://landing.moqups.com/img/content/charts-graphs/pie-donut-charts/simple-pie-chart/simple-pie-chart-1600.png',
      carditem: [
        {
          icon: 'user-friends',
          number: '77',
          title: '好友',
          id: 1
        },
        {
          icon: 'comments',
          number: '77',
          title: '訊息',
          id: 2
        },
        {
          icon: 'keyboard',
          number: '77',
          title: '手動輸入',
          id: 3
        },
        {
          icon: 'volume-down',
          number: '77',
          title: '主動推播',
          id: 4
        }
      ],
      tableData: [{
        message: '好吃好吃好好吃'
      }, {
        message: '今天要吃啥? 你說阿'
      }, {
        message: '2016-05-02'
      }, {
        message: '2016-05-02'
      }],
      DCardtable: [{
        DCard: '宿營'
      }, {
        DCard: '美食'
      }, {
        DCard: '2016-05-02'
      }, {
        DCard: '2016-05-02'
      }]
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
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
.grid-icon{
  background-color: #5290ce;
  color: white;
  font-size: 45px;
  padding:22px;
  min-width: 45px;
}
.grid-title{
  font-size:18px;
}
.grid-number{
  font-size:35px;
}
.grid{
  padding: 10px 20px 0px 20px;
  text-align: right;
}
.my-2{
  margin:50px 0px 50px 0px ;
}

</style>
