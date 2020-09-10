<template>
  <div>
    <el-row type="flex" justify="space-between">
    <div class="tag-group">
      <span class="tag-group__title">關鍵字</span>
      <el-tag v-for="item in items" :key="item.label" :type="item.type" class="tag-mx-2">
        {{ item.label }}
      </el-tag>
    </div>
     <el-row type="flex" justify="end">
      <AddModal />
    </el-row>
    </el-row>
    <!--卡片-->
    <el-row :gutter="30" class="card-row">
      <ul v-for="card in carditem" :key="card.id" @click="handleChangePage(card.id)">
        <el-col :span="6">
          <el-card>
            <div class="card-img">
              <img v-bind:src="card.cardImg" width="300" height="200" style="opacity: 0.5;">
              <div class="card-title">{{card.title}}</div>
            </div>
          </el-card>
        </el-col>
      </ul>
    </el-row>
  </div>
</template>

<script>
import AddModal from './AddModal'
export default {
  components: {
    AddModal
  },
  data () {
    return {
      items: [
        { type: 'info', label: '住宿' },
        { type: 'info', label: '宿舍' },
        { type: 'info', label: '男宿' },
        { type: 'info', label: '女宿' }
      ],
      carditem: [
        {
          cardImg: 'https://pic.pimg.tw/grace3636/1379554361-273812960.jpg',
          title: '恩慈宿舍',
          id: 1
        },
        {
          cardImg: 'https://pic.pimg.tw/d8888872002/1321717522-2891394685_n.jpg',
          title: '良善宿舍',
          id: 2
        },
        {
          cardImg: 'https://ppt.cc/Wz3n@.jpg',
          title: '力行宿舍',
          id: 3
        },
        {
          cardImg: 'https://ppt.cc/Wz3n@.jpg',
          title: '力行宿舍',
          id: 3
        }
      ]
    }
  },
  methods: {
    handleChangePage (id) {
      console.log(id)
      this.$router.push(`/fooddetail/${id}`)
    }
  }
}

</script>

<style>
.tag-group__title{
  font-size: 18px;
  padding:10px
}
.tag-mx-2{
margin:0px 5px ;
font-size: 16px;
color: black;
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
</style>
