<template>
  <div class="portfolio">
    <el-row>
      <h1>Развивающая предметно-пространственная среда</h1>
      <gallery :images="images" :index="index" @close="index = null" />
      <div
        class="image"
        v-for="image, imageIndex in images"
        @click="index = imageIndex"
        :key="imageIndex"
        :style="{ backgroundImage: 'url(' + image + ')', width: '250px', height: '300px' }"
      />
    </el-row>
  </div>
</template>

<script>
import VueGallery from 'vue-gallery';
import foto1 from '../assets/fotogallery/1.png'
import foto2 from '../assets/fotogallery/2.png'
import foto3 from '../assets/fotogallery/3.png'
import foto4 from '../assets/fotogallery/4.png'
import foto5 from '../assets/fotogallery/5.png'
import foto6 from '../assets/fotogallery/6.png'
import foto7 from '../assets/fotogallery/7.png'
import foto8 from '../assets/fotogallery/8.png'
import foto9 from '../assets/fotogallery/9.png'
import foto10 from '../assets/fotogallery/10.png'
import foto11 from '../assets/fotogallery/11.png'
import foto12 from '../assets/fotogallery/12.png'
import foto13 from '../assets/fotogallery/13.png'
import foto14 from '../assets/fotogallery/14.png'
import foto15 from '../assets/fotogallery/15.png'
import foto16 from '../assets/fotogallery/16.png'
import foto17 from '../assets/fotogallery/17.png'
import foto18 from '../assets/fotogallery/18.png'

export default {
  data: function () {
    return {
      images: [
        foto1,
        foto2,
        foto3,
        foto4,
        foto5,
        foto6,
        foto7,
        foto8,
        foto9,
        foto10,
        foto11,
        foto12,
        foto13,
        foto14,
        foto15,
        foto16,
        foto17,
        foto18,
      ],
      index: null
    };
  },

  components: {
    'gallery': VueGallery
  },
}
</script>

<style lang="scss" scoped>
  .portfolio {
    h1, h3 {
      margin-top: 20px;
      margin-bottom: 10px;
      font-weight: 500;
      line-height: 1.1;
    }

    h1 {
      font-size: 40px;
      color: #333;
    }

    h3 {
      font-size: 30px;
      color: #333;
    }

    .image {
      float: left;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
      border: 1px solid #ebebeb;
      margin: 5px;
      border-radius: 15px;
    }
  }
</style>


