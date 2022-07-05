<template>
  <div class="card">
		<div class="common-heading">
				<div class="common-heading-left">
					<h1>Best {{category}}</h1>
					<h2>the collection which you like most</h2>
				</div>
				<div class="common-heading-right">
					<button>view all</button>
				</div>
		</div>
		<div class="common-row">

        <div v-for="ele in $store.state.Storedata" :key="ele.id">
        <Card v-if="ele.category===category" :image="ele.image" :title="ele.title" :price="ele.price" /></div>
		</div>
  </div>
</template>

<script>
import Card from '../components/Card.vue'
export default {
  components: { Card },
  props: {
    category:String
  }

}
</script>

<style scoped>
.card{
    box-shadow: rgb(177,174,174) 0px 0px 5px 1px;
    padding: 10px 0px;
    margin: 10px 5px;
    border-radius: 5px;
}
 .common-heading{
     display: flex;
     justify-content: space-between;
     width: 100%;
     padding: 5px 20px;
     margin-top: 20px;
     box-shadow: 0 1px 1px 0 rgb(0 0 0 /16%);
 }
 .common-heading-left h1{
     font-size: 20px;
     font-weight: 400;
     padding:auto;
 }
 .common-heading-left h2{
     font-size: 15px;
     padding: 5px 0px;
     color: rgb(145,141,138) ;
     font-weight: 200;
 }
 .common-heading-right button{
     width: 90px;
     height: 40px;
     font-size: 18px;
     background-color: #2874f0;
     border: none;
     color: white;
     border-radius: 2px;
 }
 .common-row{
     display: flex;
     justify-content: space-evenly;
     width: 100%;
     max-height: 366px;
     margin: 10px 0px;
     overflow: scroll;
 }
</style>