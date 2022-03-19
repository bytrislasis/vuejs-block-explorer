<template>
  <div class="container">
    <div class="row mb-4">
      <div class="col">
        <div class="card">
          <div class="card-header">Node Version</div>
          <div class="card-body">
            {{version}}
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-header">Toplam Block</div>
          <div class="card-body">
            Toplam Bulunan Block Sayısı : {{blockNumber}}
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-header">Web3 Version</div>
          <div class="card-body">
            {{web3Ver}}
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-header">Network</div>
          <div class="card-body">
            {{provider}}
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <blocks-col></blocks-col>
      <LatestTransfer></LatestTransfer>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BlocksCol from "@/components/BlocksCol";
import LatestTransfer from "@/components/LatestTransfer";
import Web3 from "web3";
const web3 = new Web3(new Web3.providers.WebsocketProvider(process.env.VUE_APP_WSSServer));
export default {
  data (){
    return {
      version : '',
      blockNumber:0,
      web3Ver : '',
      provider:''
    }
  },
  name: 'HomeView',
  components: {
    BlocksCol,
    LatestTransfer
  },
  created() {

    web3.eth.getNodeInfo((req,res)=>{
      this.version = res.substring(0,13)
    })

    web3.eth.getBlockNumber().then((number)=>{
      this.blockNumber = number
    });

    this.web3Ver  = web3.version;

    this.provider  = web3.eth.net.getNetworkType().then((data)=>{
      this.provider =data
    });
  }
}
</script>
