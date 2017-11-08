<template>
  <div class="main">
    <el-row :gutter="20">
      <el-col :span="14">
        <div>
          <h1>Добро пожаловать</h1>
          <p>
            Я рада приветствовать Вас
            на моем сайте.
            Здесь Вы сможете найти информацию о моих успехах, о жизни ребят
            в детском саду, познакомиться
            с основными документами, задать вопросы о воспитании детей
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
    h3 {
      font: bold 20px/1.5 Helvetica, Verdana, sans-serif;
    }
    
    p {
      font: 200 16px Georgia, Times New Roman, serif;
    }

    &.author-foto {
      img {
        border-radius: 15px;
        width: 400px;
      }
    }
  }
</style>


