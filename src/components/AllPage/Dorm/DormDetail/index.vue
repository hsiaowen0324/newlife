<template>
  <div>
    <Layout />
    <el-container class="content">
      <el-main class="main">
        <div v-for="dorm in dormitem" :key="dorm.id">
        <el-row type="flex" justify="space-between">
            <div class="title px-5">{{dorm.name}}</div>
            <EditModal />
        </el-row>
        <el-divider></el-divider>
        <el-row type="flex" class="align-center">
          <div class="demo-image__preview">
            <el-image style="width:360px; height:230px" :src="url" :preview-src-list="srcList">
            </el-image>
          </div>
          <div class="content">
            <div class="phone">連絡電話:{{dorm.phone}}</div>
            <div class="price">價錢:{{dorm.price}}</div>
            <div class="room">住宿人數(房):{{dorm.room}}</div>
            <div class="gender">限制條件: {{dorm.gender}}</div>
            <div class="tag-group">
              <span class="tag-group__title">關鍵字</span>
              <el-tag v-for="item in items" :key="item.label" :type="info" class="tag-mx-2">
                {{ item.label }}
              </el-tag>
            </div>
          </div>
        </el-row>
        <el-row type="flex" justify="space-between">
          <div class="second-title px-5">常見問題</div>
          <EditModal />
        </el-row>
        <el-divider></el-divider>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import Layout from '../../../../layout/index'
import EditModal from './EditModal'
export default {
  components: {
    Layout,
    EditModal
  },
  mounted () {
    console.log(this.$route)
  },
  data () {
    return {
      dormitem: [{
        id: '1',
        name: '恩慈宿舍',
        phone: '03-265-5401',
        price: '9000',
        room: '4',
        gender: '女生宿舍'
      }
      ],
      items: [{
        label: '系上'
      },
      {
        label: '資管系'
      },
      {
        label: '系電'
      },
      {
        label: '系辦'
      }
      ],
      url: 'https://mnya.tw/yo/wp-content/uploads/947-20.jpg'
    }
  }
}

</script>
<style scoped>
  .el-main {
    margin-left: 11%;
    padding: 2% 5%
  }

  .title {
    font-size: 26px;
    padding-bottom: 5px;
  }

  .el-divider {
    margin: 15px
  }

  .ml-2 {
    margin-left: 5px;
  }

  .mx-2 {
    margin: 0px 10px;
  }

  .tag-mx-2 {
    margin: 0px 5px;
    font-size: 16px;
    color: black;
  }

  .tag-group__title {
    font-size: 18px;
  }

  .content {
    padding: 20px 10px;
    line-height: 35px;
    font-size: 16px;
  }

  .align-center {
    align-items: center;
  }

  .second-title {
    font-size: 24px;
  }

  .demo-image__preview {
    padding: 20px 50px;
  }

</style>
