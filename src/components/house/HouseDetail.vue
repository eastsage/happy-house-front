<template>
  <b-container v-if="housedeal" class="bv-example-row">
    <br>
    
    <b-row>
      <b-col
        ><h3>{{ housedeal.aptName }}</h3></b-col>
    </b-row>
    <div>
      <b-icon-suit-heart-fill font-scale="2"></b-icon-suit-heart-fill>
      <!-- <b-icon-suit-heart-fill font-scale="2" v-if="inInterest" @click="toggleInterest"></b-icon-suit-heart-fill>
      <b-icon-suit-heart v-else @click="toggleInterest"></b-icon-suit-heart> -->
    </div>
    <br>
    <b-row>
      <b-col>
        <b-alert show variant="secondary">주소 : {{ housedeal.address }}</b-alert>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-alert show variant="secondary">주변 선별진료소 : {{ housedeal.name }}</b-alert>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-alert show variant="secondary">평당 가격 : {{ Math.floor(housedeal.price * 100000000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }}</b-alert>
      </b-col>
    </b-row>
    
    
    
    
  </b-container>
</template>

<script>
import { mapState } from "vuex";

const houseStore = "houseStore";
// const memberStore = "memberStore";

export default {
  name: "HouseDetail",
  props: ['aptCode'],
  computed: {
    ...mapState(houseStore, ["housedeal"]),
    // house() {
    //   return this.$store.state.house;
    // },
  //   inInterest(){
  //     if
  //   },
  //   isInInterests(){
  //     let cnt = 0;
      
  //     this.interests.forEach(elem => {
  //       if(elem.aptCode === this.aptCode) cnt++;
  //     });
  //     if(cnt > 0) return true;
  //     return false;
  //   },
  //   ...mapState(memberStore, ["isLogin", "isLoginError", "userInfo"]),
  //   ...mapState(houseStore, ["houseList"]),
  // },
  // methods:{
  //   toggleInterest(){
  //     let isInInterests = this.isInInterests;
  //     if(isInInterests) this.del({aptCode : this.aptCode, userInfo : this.userInfo});
  //     else this.insert({aptCode :this.aptCode, userInfo: this.userInfo});
  //   }
  },
  filters: {
    price(value) {
      if (!value) return value;
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>

<style></style>
