<template>
  <div>
    <Layout />
    <el-container class="content">
      <el-main class="main">
        <div class="title">醫療相關</div>
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="醫院" name="hospital">
            <HospitalItemModal/>
          </el-tab-pane>
          <el-tab-pane label="診所" name="clinic">
            <HospitalItemModal/>
          </el-tab-pane>
          <el-tab-pane label="藥局" name="pharmacy">
            <HospitalItemModal/>
          </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import Layout from '../../../layout/index'
import HospitalItemModal from './HospitalItemModal'
export default {
  components: {
    Layout,
    HospitalItemModal
  },
  data () {
    return {
      cardId: '',
      activeName: 'hospital'
    }
  }
}

</script>
<style scoped>
  .el-main {
    margin-left: 11%;
    padding: 2% 5%;
  }

  .title {
    font-size: 26px;
    padding-bottom: 20px;
  }
   .cardContent
  {
    padding: 5px 30px;
  }
  .card-img
  {
  position:relative ;
  }
  .card-title{
    font-size: 26px;
    position:absolute;
    left:55%;
    top:70%;
    color:white;
    background-color:#009FCC;

  }

.card-row{
  margin-top: 20px;
}
</style>
