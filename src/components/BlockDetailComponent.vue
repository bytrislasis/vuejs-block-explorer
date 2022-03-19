<template>
  <div class="d-flex justify-content-center">
    <div class="col-4 border">
      <table class="table">
        <tbody>
        <tr v-for="(item,index) in bloks" :key="index">
          <th>{{index}}</th>
          <td>{{item}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Web3 from 'web3';

export default {
  data (){
    return {
      bloks : {}
    }
  },
  created() {
    const web3 = new Web3(new Web3.providers.WebsocketProvider(process.env.VUE_APP_WSSServer));
    web3.eth.getBlock(this.$route.params.block).then(async (block)=>{
      console.log(block)
     this.bloks =block;
     delete this.bloks['logsBloom']
    });
  }
}
</script>
