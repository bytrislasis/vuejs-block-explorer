<template>
  <div class="container">
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
export default {
  name: 'HomeView',
  components: {
    BlocksCol,
    LatestTransfer
  }
}
</script>
