<template>
  <div class="main">
    <el-row :gutter="20">
      <el-col :span="14">
        <div>Орешкина Галина Алексеевна</div>
        <h3>Должность:</h3>
        <p>воспитатель</p></li>

        <h3>Место работы:</h3>
        <p>Муниципальное автономное дошкольное  образовательное учреждение детский сад «Ёлочка».</p>

        <h3>Награды:</h3>
        <p>Благодарственное письмо главы администрации Дальнеконстантиновского муниципального района Нижегородской области Н.К. Денисова.</p>
        <p>Почетная грамота отдела образования администрации Дальнеконстантиновского муниципального района</p>
        <div >
          “Личность воспитателя значит всё в деле воспитания”
        </div>
      </el-col>
      <el-col :span="10">
        <div class="main author-foto">
          <img src="../assets/author-foto.jpg" />
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
        width: 400px;
      }
    }
  }
</style>


