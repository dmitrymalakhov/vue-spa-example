<template>
  <div class="portfolio">
    <el-row :gutter="20">
      <el-col :span="14">
        <h1>Орешкина Галина Алексеевна</h1>
        <h3>Должность:</h3>
        <p>воспитатель</p></li>

        <h3>Сведения об образовании:</h3>
        <p>1984 - 1986 гг Дзержинское педадогическое училище . Квалификация воспитатель детского сада</p>
        <p>1988 - 1993 гг Арзамасский государственный педадогический институт им. А.П. Гайдара. Квалификация преподаватель дошкольной педагогики и психологии, методист по дошкольному воспитанию.</p>
        
        <h3>Место работы:</h3>
        <p>Муниципальное автономное дошкольное  образовательное учреждение детский сад «Ёлочка».</p>

        <h3>Награды:</h3>
        <p>Благодарственное письмо главы администрации Дальнеконстантиновского муниципального района Нижегородской области Н.К. Денисова.</p>
        <p>Почетная грамота отдела образования администрации Дальнеконстантиновского муниципального района</p>

        <h3>Педагогический стаж</h3>
        <p>15 лет</p>

        <h3>Мое кредо:</h3>
        <p>“Личность воспитателя значит всё в деле воспитания”</p>

        <h3>Курсы повышения квалификации</h3>
        <p>c 23.01.2017 по 27.01.2017 - Краткосрочное обучение в ГБОУ ДПО НИРО по курсу "Планирование и мониторинг образовательного процесса в ДОУ в условиях реализации ФГОС ДО"
        <p>Апрель 2017 - Краткосрочное обучение в ГБОУ ДПО НИРО по курсу "Здоровьесберегающие технологии"</p>
      </el-col>
      <el-col :span="10">
        <div class="author-foto">
          <img src="../assets/author-foto.png" />
        </div>
      </el-col>
    </el-row>
    <el-row>
      <h1>Мои достижения</h1>
      <gallery :images="images" :index="index" @close="index = null" />
      <div
        class="image"
        v-for="image, imageIndex in images"
        @click="index = imageIndex"
        :key="imageIndex"
        :style="{ backgroundImage: 'url(' + image + ')', width: '200px', height: '300px' }"
      />
    </el-row>
  </div>
</template>

<script>
import VueGallery from 'vue-gallery';
import foto1 from '../assets/achievements/1.png'
import foto2 from '../assets/achievements/2.png'
import foto3 from '../assets/achievements/3.png'
import foto4 from '../assets/achievements/4.png'

export default {
  data: function () {
    return {
      images: [
        foto1,
        foto2,
        foto3,
        foto4,
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
    .image {
      float: left;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
      border: 1px solid #ebebeb;
      margin: 5px;
      border-radius: 15px;
    }

    h3 {
      font: bold 20px/1.5 Helvetica, Verdana, sans-serif;
    }
    
    p {
      font: 200 16px Georgia, Times New Roman, serif;
    }

    .author-foto {
      img {
        border-radius: 15px;
        width: 400px;
      }
    }
  }
</style>


