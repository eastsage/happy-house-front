<template>
    <div>
        <house-detail></house-detail>
        <br>
        <br>
        <house-graph></house-graph>
        <br>
        <br>
        <h-r></h-r>
        
    </div>
</template>

<script>
import HouseDetail from '@/components/house/HouseDetail.vue';
import HouseGraph from '@/components/house/HouseGraph.vue';
import HR from '@/components/house/HouseReview.vue';
export default {
    name: "AppHouseDetail",
    components: {
        HouseDetail,
        HouseGraph,
        HR
    },
};

</script>
