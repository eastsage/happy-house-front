<script setup>
// import RotatingCard from "../components/rotatingCards/RotatingCard.vue";
// import RotatingCardFront from "../components/rotatingCards/RotatingCardFront.vue";
// import RotatingCardBack from "../components/rotatingCards/RotatingCardBack.vue";
// import DefaultInfoCard from "../components/rotatingCards/DefaultInfoCard.vue";
</script>
<template>
  <b-container class="bv-example-row mt-4 text-center">
    <h3 class="underline-green">
      <b-icon icon="house-fill"></b-icon> Happy House에 오신걸 환영합니다.
    </h3>
    <b-row>
      <b-col></b-col>
      <b-col cols="10">
        <b-jumbotron
          bg-variant="muted"
          text-variant="light"
          border-variant="dark"
          
        >


          <hr class="my-5" />

          <p>준현, 동현, 주영</p>
          <p>house</p>
        </b-jumbotron>
      </b-col>
      <b-col>
      </b-col>
    </b-row>
  </b-container>
</template>


<script>
export default {
  name: "AppMain",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.underline-steelblue {
  display: inline-block;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 70%, rgba(72, 190, 233, 0.3) 30%);
}

.underline-green {
  display: inline-block;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 70%,
    rgba(56, 233, 40, 0.3) 30%
  );
}

.jumbotron{
  background-image: url("@/assets/wa.jpg");
  background-size: cover;
  background-position: center;
  margin: auto;
  text-align: center;
  height: 600px;
  
}
</style>
