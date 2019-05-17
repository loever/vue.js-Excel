<template>
  <div class="hello">
           <button class="tap"  @click="export2Excel">导出表格</button>
  </div>
</template>

<script>
export default {
 data () {
    return {
      tableData: [
        {'index':'999',"nickName": "的旧时光", "name": "98491231841251"},
        {'index':'1',"nickName": "高贵", "name": "张"},
        {'index':'2',"nickName": "海aaa灰尘", "name": "小兰"}
      ]
    }
  },
  methods: {
    export2Excel() {
      require.ensure([], () => {
        const { export_json_to_excel } = require('../excel/Export2Excel');
        const tHeader = ['序号', '昵称', '姓名'];  // 设置Excel的表格第一行的标题
        const filterVal = ['index', 'nickName', 'name'];  // index、nickName、name是tableData里对象的属性
        const list = this.tableData;  //把data里的tableData存到list
        const data = this.formatJson(filterVal, list);
        export_json_to_excel(tHeader, data, '导出文件名');  //导出Excel 文件名
      })
    },

    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
