<template>
    <div>
           <br> <hr>
            <button v-on:click="updateTitle">update parenet tit</button>
    

        <p class="mydata"></p>
    </div>
</template>


<script>
export default {
    name:"HomeComp",
   methods:{              
        updateTitle(){
        this.$emit("changeTitle","parent-Updated");
                    }
    }

    }

</script>