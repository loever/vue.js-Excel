<template>
  <div class="about">
    <div>
      <a v-show="false" ref="Export"></a>
      <button @click="daochu">导出</button>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        data: [
        {'index':'0',"nickName": "沙滩搁浅我们的旧时光", "name4654656": "小qqqqqqqqqqqqqqqq明"},
        {'index':'1',"nickName": "女人天生高贵", "name": "小红1321313"},
        {'index':'2',"nickName": "海是彩色的aaaaaaaa灰尘", "name": "小兰"}
      ]
      }
    },
    methods: {
      daochu() {
     
          let url = window.URL.createObjectURL(new Blob([this.data]));
          console.log(url)
          //[ ]中括号这里放后台返回的数据，要表格的那个，并不是整个respons，一般是respons.data，看后台他们放哪个位置
          let el = this.$refs.exportExcel; //上面隐藏的元素
          console.log(el)
          /* el.href = url; // 给元素赋值一个链接
          el.setAttribute("download", "表格名字.xlsx"); //起名
          el.click();
          window.URL.revokeObjectURL(url); // 生成表格 */
        
      },
    }


  }
</script>