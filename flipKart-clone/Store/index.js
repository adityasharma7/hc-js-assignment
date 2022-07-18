import {createStore} from 'vuex'
import  axios  from 'axios'
import wrapper from 'axios-cache-plugin'


let http = wrapper(axios, {
  maxCacheSize: 15,  // cached items amounts. if the number of cached items exceeds, the earliest cached item will be deleted. default number is 15.
  ttl: 60000, // time to live. if you set this option the cached item will be auto deleted after ttl(ms).
  excludeHeaders: true // should headers be ignored in cache key, helpful for ignoring tracking headers
})

const store = createStore({
	state() {
			return {
				Storedata:[],
				// myUrl:process.env.STORE_URL
				
		
				
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
				const res = await http.get('https://fakestoreapi.com/products')
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