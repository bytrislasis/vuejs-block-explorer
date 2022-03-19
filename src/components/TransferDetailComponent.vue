<template>
  <div class="d-flex justify-content-center">
    <div class="col-4 border">
      <table class="table">
        <tbody>
        <tr v-for="(item,index) in transfers" :key="index">
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
      transfers : {}
    }
  },
  created() {
    const web3 = new Web3(new Web3.providers.WebsocketProvider(process.env.VUE_APP_WSSServer));
    web3.eth.getBlock(this.$route.params.txid).then((data)=>{
      data.transactions.forEach((val)=>{
        web3.eth.getTransaction(val).then((data)=>{
          this.transfers = data
        })
      });
    })

  },
}
</script>
