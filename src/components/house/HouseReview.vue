<template>
    <b-container>
    <div>
        
            
            <b-table striped hover :items="housereviewlist1">
                
            </b-table>
            
        
    </div>
    </b-container>
</template>

<script>
import { mapState } from "vuex";


export default {
    name: "HR",
    data() {
        return {
        housereviewlist1 : [],
       } 
    }, 
    created() {
        console.log(this.$store.state.houseStore.housedeal);
        this.$store.dispatch("houseStore/review", this.$store.state.houseStore.housedeal.aptCode);
        this.housereviewlist1 = this.housereviewlist;
    },
    
    computed: {
        ...mapState("houseStore", ["housereviewlist", "housedeal"]),
        
    },

}
</script>
