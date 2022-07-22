<template>
<div>
	<form action="#">
		<label for="price">price</label>
		<input type="number" min="0" max="1000000" v-model.number="price">	
	</form>
</div>
</template>

<script>
export default {
	name: "ProductFilter",
		data () {
			return {
				price: this.$store.state.filterPrice
		}
	},
  watch: {
		price() {
      this.$store.commit('filterprice',this.price)
		}
	}
}
</script>

<style>

</style>