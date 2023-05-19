<script setup>
import RotatingCard from "../components/rotatingCards/RotatingCard.vue";
import RotatingCardFront from "../components/rotatingCards/RotatingCardFront.vue";
import RotatingCardBack from "../components/rotatingCards/RotatingCardBack.vue";
import DefaultInfoCard from "../components/rotatingCards/DefaultInfoCard.vue";
import vueMkHeader from "@/assets/wa.jpg";
</script>

<template>
  <b-container class="bv-example-row mt-3 text-center">
    <div
      :style="`background-image: url(${vueMkHeader})`"
    >
    <div class="container">
        <div class="row">
          <div class="col-lg-7 text-center mx-auto position-relative">
            <h1>
              아파트 매물 검색
            </h1>
            <p class="px-5 mt-3" :style="{ fontWeight: '500' }">
              당신만의 집을 찾아보세요.
            </p>
          </div>
        </div>
      </div>
    </div>
    <b-row>
      <section class="my-5 py-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-4 ms-auto me-auto p-lg-4 mt-lg-0 mt-4">
          <RotatingCard>
            <RotatingCardFront
              image="https://images.unsplash.com/photo-1498889444388-e67ea62c464b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1365&q=80"
              icon="touch_app"
              title="실시간<br /> 인기 매물"
              description="실시간 인기 매물 4개 입니다."
            />

            <RotatingCardBack
              image="https://images.unsplash.com/photo-1498889444388-e67ea62c464b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1365&q=80"
              title="더보기"
              description="더보시려면 회원 가입 후 아파트 검색을 진행하세요."
              :action="[
                {
                  route: '/sections/page-sections/page-headers', //아파트 검색 페이지로 바로 이동가능하게 하면될듯
                  label: '아파트 검색 바로가기',
                },
              ]"
            />
          </RotatingCard>
        </div>
        <div>
  <b-card-group deck>
    <b-card
      header="인기순위 1"
      header-tag="header"
      footer="Card Footer"
      footer-tag="footer"
      title="아파트 이름"
    >
      <b-card-text>사진</b-card-text>
      <b-button href="#" variant="outline-secondary">자세히 보기</b-button>
    </b-card>

    <b-card title="Title" header-tag="header" footer-tag="footer">
      <template #header>
        <h6 class="mb-0">Header Slot</h6>
      </template>
      <b-card-text>Header and footers using slots.</b-card-text>
      <b-button pill variant="outline-secondary">Button</b-button>
      <template #footer>
        <em>Footer Slot</em>
      </template>
    </b-card>
  </b-card-group>
</div>

        <div class="col-lg-6 ms-auto">
          <div class="row justify-content-start">
            <DefaultInfoCard
              icon="content_copy"
              title="$아파트이름"
              description="가격만?"
              :action="[
                {
                  route: '/sections/page-sections/page-headers', //아파트 검색 페이지로 바로 이동가능하게 하면될듯
                  label: '해당 아파트',
                },
              ]"
            />
            <DefaultInfoCard
              icon="content_copy"
              title="$아파트이름"
              description="가격만?"
              :action="[
                {
                  route: '/sections/page-sections/page-headers', //아파트 검색 페이지로 바로 이동가능하게 하면될듯
                  label: '해당 아파트',
                },
              ]"
            />
          </div>
          <div class="row justify-content-start mt-5">
            <DefaultInfoCard
              icon="content_copy"
              title="$아파트이름"
              description="가격만?"
              :action="[
                {
                  route: '/sections/page-sections/page-headers', //아파트 검색 페이지로 바로 이동가능하게 하면될듯
                  label: '해당 아파트',
                },
              ]"
            />
            <DefaultInfoCard
              icon="content_copy"
              title="$아파트이름"
              description="가격만?"
              :action="[
                {
                  route: '/sections/page-sections/page-headers', //아파트 검색 페이지로 바로 이동가능하게 하면될듯
                  label: '해당 아파트',
                },
              ]"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
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
</style>
