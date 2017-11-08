 <template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="title"
      label="Название">
    </el-table-column>
    <el-table-column
      width="100"
      fixed="right"
      label="Действие">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleClick(scope.$index, scope.row)"
        >
          Открыть
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

 <script>
  const linksMap = {
    0: 'https://drive.google.com/drive/folders/1m0fndRLh8gr_btepMo9RlneiG2pWxCwe?usp=sharing',
    1: 'https://drive.google.com/drive/folders/1nxjYltsXq2mi_RHhRTPggiga_9OUFOqG?usp=sharing',
    2: 'https://drive.google.com/drive/folders/1jCE7GgFsjNP3h4vXJ5XdBK20KpG46ARy?usp=sharing',
    3: 'https://drive.google.com/drive/folders/1aiawBgCzECVBb-fMctbcVib_PirlsSnr?usp=sharing',
    4: 'https://docs.google.com/document/d/1G3plwlG91CBaGgamgZCJ7wDhgtarz5ozxZ7lFykQDxc/edit?usp=sharing',
  }

  export default {
    methods: {
      handleClick(index) {
        window.open(linksMap[index]);
      }
    },
    data() {
      return {
        tableData: [
          {
            title: 'Знаки ПДД',
          },
          {
            title: 'Математические физкультминутки',
          },
          {
            title: 'Правила дорожного движения',
          },
          {
            title: 'Развитие связанной речи',
          },
          {
            title: 'Произведения о правилах дорожного движения',
          },
        ],
      };
    }
  }
</script>