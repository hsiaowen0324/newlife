<template>
<div>
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
    <div class="introduction">
  簡介:稟承中原大學「全人教育」的理念,培養學生「技術力」、「整合力」及「適域力」等三項能力為教學目標,中原大學資訊管理學系相較於其他的大專學院的同類科系,更注重全人教育、強調學生實作, 專業資訊整合,深刻了解我國企業特有的資管需求,滿足國內企業對資管人才的需要。

<div class="link">
  網址:
</div>
</div>
</div>
</template>

<script>
import EditModal from './EditModal'
export default {
  components: {
    EditModal},
  data () {
    return {
      items: [
        { type: 'info', label: '系學會' },
        { type: 'info', label: '活動' },
        { type: 'info', label: '宿營' },
        { type: 'info', label: '密室逃脫' }
      ]
    }
  }}
</script>

<style>
.tag-mx-2{
margin:0px 5px ;
font-size: 16px;
color: black;
}
.tag-group__title{
    font-size: 18px;
}
.tag-group{
    padding:0px 20px;
}
.introduction{
   padding:10px 20px;
    line-height: 30px;
}
.el-tag.el-tag--info{
    color: black;
}
</style>
