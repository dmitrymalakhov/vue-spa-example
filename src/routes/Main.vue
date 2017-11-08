<template>
  <div class="main">
    <el-row :gutter="20">
      <el-col :span="14">
        <div>
          <h1>Добро пожаловать</h1>
          <p>
            Меня зовут Орешкина Галина Алексеевна
            <br>
            Я рада приветствовать Вас
            на моем сайте.
            Здесь Вы сможете найти информацию о моих успехах, о жизни ребят
            в детском саду, познакомиться с основными документами, задать вопросы о воспитании детей
          </p>
        </div>
      </el-col>
      <el-col :span="10">
        <div class="main author-foto">
          <img src="../assets/author-foto-main.png" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
  .main {
    h1, h3 {
      font-size: 34px;
      font-weight: 700;
      text-transform: uppercase;
      color: #333;
    }
    
    p {
      font-family: 'Open Sans', sans-serif;
      text-rendering: optimizeLegibility !important;
      -webkit-font-smoothing: antialiased !important;
      color: #656c6d;
      line-height: 28px;
      margin: 15px 0;
    }

    &.author-foto {
      img {
        border-radius: 15px;
        width: 400px;
      }
    }
  }
</style>


