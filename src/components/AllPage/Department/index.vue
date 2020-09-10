<template>
<div>
  <Layout/>
  <el-container class="content">
  <el-main class="main">
    <el-row type="flex" justify="space-between">
<div class="title px-5">系所介紹</div>
 <EditIntroModal/>
    </el-row>
    <el-divider></el-divider>
    <el-row type="flex" class="align-center">
<div class="demo-image__preview">
  <el-image
    style="width:360px; height:230px"
    :src="url"
    :preview-src-list="srcList">
  </el-image>
</div>
<div class="content">
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
<div class="introduction">
  簡介:稟承中原大學「全人教育」的理念,培養學生「技術力」、「整合力」及「適域力」等三項能力為教學目標,中原大學資訊管理學系相較於其他的大專學院的同類科系,更注重全人教育、強調學生實作, 專業資訊整合,深刻了解我國企業特有的資管需求,滿足國內企業對資管人才的需要。
<div class="phone">連絡電話:03-265-5401</div>
</div>

</div>
    </el-row>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="學習護照" name="learn">
            <LearnModal/>
          </el-tab-pane>
          <el-tab-pane label="系學會介紹" name="association">
            <AssociationModal/>
          </el-tab-pane>
          <el-tab-pane label="系上課程" name="course">
            <CourseModal/>
          </el-tab-pane>
        </el-tabs>
  </el-main>
  </el-container>
</div>
</template>
<script>
import Layout from '../../../layout/index'
import EditIntroModal from './EditIntroModal'
import EditModal from './EditModal'
import pagination from '../../util/pagination'
import LearnModal from './LearnModal'
import AssociationModal from './AssociationModal'
import CourseModal from './CourseModal'
export default {
  components: {
    Layout,
    EditIntroModal,
    EditModal,
    LearnModal,
    AssociationModal,
    CourseModal,
    pagination
  },
  data () {
    return {
      items: [
        { type: 'info', label: '系上' },
        { type: 'info', label: '資管系' },
        { type: 'info', label: '系電' },
        { type: 'info', label: '系辦' }
      ],
      searchAccount: '',
      activeName: 'learn',
      url: 'https://mnya.tw/yo/wp-content/uploads/947-20.jpg'
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
.el-divider{
  margin:15px
}
.ml-2{
  margin-left:5px ;
}
.el-table{
  font-size: 16px;
  text-align: center;
  margin-bottom: 20px;
}
.search{
  width: 280px;
  margin-bottom:20px ;
}
.mx-2{
  margin:0px 10px ;
}
.demo-image__preview{
  padding:20px 50px;
}
.tag-mx-2{
margin:0px 5px ;
font-size: 16px;
color: black;
}
.tag-group__title{
    font-size: 18px;
}
.content{
  padding:20px 10px;
  line-height: 30px;
}
.align-center{
  align-items: center;
}
.upload{
 float:right;
}
</style>
