<template>
  <div>
    <Layout />
    <el-container class="content">
      <el-main class="main">
        <div class="title">周邊美食</div>
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="飯類" name="rice">
            <FoodItemModal/>
          </el-tab-pane>
          <el-tab-pane label="麵類" name="noodle">
            <FoodItemModal/>
          </el-tab-pane>
          <el-tab-pane label="其他" name="other">
            <FoodItemModal/>
          </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import Layout from '../../../layout/index'
import FoodItemModal from './FoodItemModal'
export default {
  components: {
    Layout,
    FoodItemModal
  },
  data () {
    return {
      cardId: '',
      activeName: 'rice'
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
