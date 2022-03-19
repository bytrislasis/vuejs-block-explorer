<template>
  <div class="col">
    <div class="card">
      <div class=" card-header"> Son Bloklar</div>
      <div class="card-body">
        <table class="table">
          <thead>
          <tr>
            <th scope="col">Blok No</th>
            <th scope="col">Hash</th>
            <th scope="col">Parent hash</th>
            <th scope="col">Difficulty</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(item,index) in blocks.slice().reverse()" :key="index">
            <th scope="row">
              <router-link :to="'/block/'+item.number">{{ item.number }}</router-link>
            </th>
            <td>
              <router-link :to="'/block/'+item.hash">{{ item.hash.toString().substring(0,7) }}</router-link>
            </td>

            <td>
              <router-link :to="'/block/'+item.parentHash">{{ item.parentHash.toString().substring(0,7) }}</router-link>
            </td>
            <td>
              {{  item.difficulty }}
            </td>
          </tr>
          </tbody>
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
      blocks: [],
      limit: 20
    }
  },
  created() {
    const web3 = new Web3(new Web3.providers.WebsocketProvider(process.env.VUE_APP_WSSServer));
    web3.eth.subscribe('newBlockHeaders', (res, call) => {
      if(this.blocks.length>this.limit){
        this.blocks.shift();
      }
      this.blocks.push(call);
    })
  },

}
</script>
