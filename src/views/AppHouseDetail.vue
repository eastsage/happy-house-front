<template>
    <div>
        <house-detail></house-detail>
        <br>
        <br>
        <house-graph></house-graph>
    </div>
</template>

<script>
import HouseDetail from '@/components/house/HouseDetail.vue';
import HouseGraph from '@/components/house/HouseGraph.vue';

export default {
    name: "AppHouseDetail",
    components: {
        HouseDetail,
        HouseGraph
    },
};

</script>
