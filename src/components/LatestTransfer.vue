<template>
  <div class="col">
    <div class="card">
      <div class=" card-header"> Son Transferler</div>
      <div class="card-body">

        <table class="table table-hover">
          <thead>
          <tr>
            <th scope="col">B.NO</th>
            <th scope="col">Kimden</th>
            <th scope="col">Kime</th>
            <th scope="col">Nonce</th>
          </tr>
          </thead>
          <tr v-for="(item,index) in transaction" :key="index">

            <td>
              <router-link class="link-info" :to="'/transfer/'+item.blockNumber">{{ item.blockNumber }}</router-link>
            </td>

            <td>{{ item.from.toString().substring(0, 10) }}</td>


            <td>{{ item.to.toString().substring(0, 10) }}</td>

            <td>{{ item.nonce }}</td>

          </tr>
        </table>

      </div>
    </div>
  </div>
</template>

<script>
import Web3 from 'web3';

export default {
  data() {
    return {
      transaction: []
    }
  },
  created() {
    const web3 = new Web3(new Web3.providers.WebsocketProvider(process.env.VUE_APP_WSSServer));
    web3.eth.getBlockNumber().then(async (number) => {
      for (let i = 0; i < number; i++) {
        await web3.eth.getBlockTransactionCount(i).then(async (islem) => {
          if (islem > 0) {
            await web3.eth.getBlock(i).then(async (islemBuradaYapildi) => {
              await islemBuradaYapildi.transactions.forEach((hash) => {
                web3.eth.getTransaction(hash).then(async (islemSonucu) => {
                  await this.transaction.push(islemSonucu)
                  //console.table(islemSonucu)
                });
              });
            })
          }
        })
      }
    })
  }
}
</script>
