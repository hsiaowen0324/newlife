<template>
<div>
  <Layout/>
  <el-container class="content">
  <el-main class="main">
     <el-row type="flex" justify="space-between">
<div class="p-title px-5">就學貸款</div>
 <AddModal/>
     </el-row>
    <el-row type="flex" justify="end">
     <el-input placeholder="Search" v-model="searchAccount" class="search" clearable>
        </el-input>
    </el-row>
          <!--表格-->
   <el-collapse v-model="activeNames" @change="handleChange">
  <el-collapse-item title="Q: 就學貸款申請資格?" name="1">
  <el-row type="flex" justify="space-between">
    <div class="tag-group">
  <span class="tag-group__title">關鍵字</span>
  <el-tag
    v-for="item in items"
    :key="item.label"
    :type="item.type"
    class="tag-mx-2">
    {{ item.label }}
  </el-tag>
</div>
 <EditModal/>
</el-row>
    <div class="content">家庭年收入114萬元(含)以下者，就學及緩繳期間貸款利息由政府全額補貼，畢業後滿一年利息由借款人自行負擔。
家庭年收入逾114萬元至120萬元（含）者，就學及緩繳期間貸款利息由政府補貼半額之利息，半額利息應自貸款撥款日次月起每月繳付。畢業滿一年由借款人負擔全額之利息。
家庭年收入超過120萬元，家中目前須有兄弟姊妹在高中以上學校就讀，且具正式學籍者，才符合申請資格。就學及緩繳期間貸款利息全額自付，政府不予補貼，且應自貸款撥款日次月起每月繳付利息。
</div>
  </el-collapse-item>
  <el-collapse-item title="反馈 Feedback" name="2">
    <el-row type="flex" justify="space-between">
    <div class="tag-group">
  <span class="tag-group__title">關鍵字</span>
  <el-tag
    v-for="item in items"
    :key="item.label"
    :type="item.type"
    class="tag-mx-2">
    {{ item.label }}
  </el-tag>
</div>
 <EditModal/>
</el-row>
    <div>家庭年收入114萬元(含)以下者，就學及緩繳期間貸款利息由政府全額補貼，畢業後滿一年利息由借款人自行負擔。
家庭年收入逾114萬元至120萬元（含）者，就學及緩繳期間貸款利息由政府補貼半額之利息，半額利息應自貸款撥款日次月起每月繳付。畢業滿一年由借款人負擔全額之利息。
家庭年收入超過120萬元，家中目前須有兄弟姊妹在高中以上學校就讀，且具正式學籍者，才符合申請資格。就學及緩繳期間貸款利息全額自付，政府不予補貼，且應自貸款撥款日次月起每月繳付利息。
</div>
  </el-collapse-item>
  <el-collapse-item title="效率 Efficiency" name="3">
    <el-row type="flex" justify="space-between">
    <div class="tag-group">
  <span class="tag-group__title">關鍵字</span>
  <el-tag
    v-for="item in items"
    :key="item.label"
    :type="item.type"
    class="tag-mx-2">
    {{ item.label }}
  </el-tag>
</div>
 <EditModal/>
</el-row>
    <div>家庭年收入114萬元(含)以下者，就學及緩繳期間貸款利息由政府全額補貼，畢業後滿一年利息由借款人自行負擔。
家庭年收入逾114萬元至120萬元（含）者，就學及緩繳期間貸款利息由政府補貼半額之利息，半額利息應自貸款撥款日次月起每月繳付。畢業滿一年由借款人負擔全額之利息。
家庭年收入超過120萬元，家中目前須有兄弟姊妹在高中以上學校就讀，且具正式學籍者，才符合申請資格。就學及緩繳期間貸款利息全額自付，政府不予補貼，且應自貸款撥款日次月起每月繳付利息。
</div>
  </el-collapse-item>
  <el-collapse-item title="可控 Controllability" name="4">
    <el-row type="flex" justify="space-between">
    <div class="tag-group">
  <span class="tag-group__title">關鍵字</span>
  <el-tag
    v-for="item in items"
    :key="item.label"
    :type="item.type"
    class="tag-mx-2">
    {{ item.label }}
  </el-tag>
</div>
 <EditModal/>
</el-row>
    <div>家庭年收入114萬元(含)以下者，就學及緩繳期間貸款利息由政府全額補貼，畢業後滿一年利息由借款人自行負擔。
家庭年收入逾114萬元至120萬元（含）者，就學及緩繳期間貸款利息由政府補貼半額之利息，半額利息應自貸款撥款日次月起每月繳付。畢業滿一年由借款人負擔全額之利息。
家庭年收入超過120萬元，家中目前須有兄弟姊妹在高中以上學校就讀，且具正式學籍者，才符合申請資格。就學及緩繳期間貸款利息全額自付，政府不予補貼，且應自貸款撥款日次月起每月繳付利息。
</div>
  </el-collapse-item>
</el-collapse>
  <pagination/>
  </el-main>
  </el-container>
</div>
</template>
<script>
import Layout from '../../../../layout/index'
import AddModal from './AddModal'
import EditModal from './EditModal'
import pagination from '../../../util/pagination'
export default {
  components: {
    Layout,
    AddModal,
    EditModal,
    pagination
  },
  data () {
    return {
      items: [
        { type: 'info', label: '就貸' },
        { type: 'info', label: '就學貸款' }
      ],
      searchAccount: '',
      activeNames: ['1'] }
  },
  methods: {
    handleChange (val) {
      console.log(val)
    }
  }
}
</script>
<style>
.el-main{
  margin-left: 11%;
  padding:2% 5%
}
.p-title{
  font-size: 26px;
  padding-bottom: 20px;
}
.ml-2{
  margin-left:5px ;
}
.search{
  width: 280px;
  margin-bottom:20px ;
}
.mx-2{
  margin:0px 10px ;
}
.tag-mx-2{
margin:10px 5px ;
font-size: 16px;
}
.el-tag.el-tag--info{
  color: black;
}
.tag-group__title{
    font-size: 18px;
}
.el-collapse-item__header,.el-collapse-item__content{
  font-size: 16px;
  padding:5px;
}
.content{
  padding:3px 15px;
}
</style>
