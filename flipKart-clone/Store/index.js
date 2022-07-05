import {createStore} from 'vuex'
import  Axios  from 'axios'

const store = createStore({
	state() {
			return {
				Storedata:[],
				
		
				
			}
	},
	mutations: {
			updatefackData( state, StoreData ){
			state.Storedata = StoreData
	},
	changeCategory(name){
		this.category = name
	}
	  

	},
	actions: {
		async getfackApi({ commit }){
			try{
				const res = await Axios.get('https://fakestoreapi.com/products')
				const data = await res.data
				console.log(data)
				commit('updatefackData',data)
			}
			catch(e){
				console.log(e.message)
			}
	},
},
	getters: {
			getData: (state) => {state.Storedata}
	}   
})


export default store