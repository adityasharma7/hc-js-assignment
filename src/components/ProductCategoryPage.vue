<template>
  <div id="head">
      <div id="cat">
          Default Category &nbsp; |
      </div>
      <div>
          &nbsp; {{ category.toUpperCase() }} 
      </div>
  </div>

  <!-- Main Content -->

  <div id="main-content">
      <div id="top-left">
          <h1>Categories</h1>
      </div>
      <div id="top-right">
          <div>
              <h3>Filters</h3>
          </div>
          <!-- <div>
              Sort By : 
          </div>   -->

          <div>
              Sort By: 
            <select @click="filters" required v-model="filter">
            <option value="Latest">Latest</option>
            <option @click="plth" value="Price : Low To High">Price : Low To High</option>
            <option @click="phtl" value="Price : High To Low">Price : High To Low</option>
            <option @click="rhtl" value="Rating : High To Low">Rating : High To Low</option>
            <option @click="rlth" value="Rating : Low To High">Rating : Low To High</option>
            </select>
          </div>

          <div id="product-count">
              Products Found : {{ items.length }}
          </div>
      </div>
      <div id="bottom-left">
          <ul>
              <li>Women</li>
              <li>Men</li>
              <li>Jewellery</li>
              <li>Electronics</li>
          </ul>
      </div>

      <div id="bottom-right">
          
        <div v-for="item in items" :key="item.id" id="box">
            <router-link :to=" {name: 'ProductDetailPage', params: { id: item.id } }" :key="$route.path">
                <div id="image">
                  <!-- <router-link :to=" {name: 'ProductDetailPage', params: { id: item.id } }" :key="$route.path"> -->
                 <img :src=item.image alt="" style="height:240px; width:180px;">
                   <!-- </router-link> -->
                 </div>
                 <div id="title">
                    {{ item.title }}
                </div>
                <div id="price">
                    Rate: ${{ item.price }}
                </div>
                <div id="rate">
                    Ratings: {{ item.rating.rate }}
                </div>
            </router-link>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "ProductCategoryPage",
    props : ["category"],
    data(){
        return {
            items : [],
            main:[],
            filter:"Latest"
        }
    },
    async mounted(){
        let result = await axios.get('https://fakestoreapi.com/products/category/'+this.category);
        this.items = result.data
        this.main = result.data
    },
    methods:{
        plth(){
            // this.items.sort((a,b) => {
            //     return b.price - a.price
            // })
            // console.log('htl')
            console.log('i am bashu')
        },
        filters(){
            if(this.filter=="Price : Low To High"){
                this.items.sort((a,b) => {
                    return a.price - b.price;
                })
            }
            else if(this.filter=="Price : High To Low"){
                this.items.sort((a,b) => {
                    return b.price - a.price
                })
            }
            else if(this.filter=="Rating : High To Low"){
                this.items.sort((a,b) => {
                    return b.rating.rate - a.rating.rate
                 })
            }
            else if(this.filter=="Rating : Low To High"){
                this.items.sort((a,b) => {
                    return a.rating.rate - b.rating.rate;
                })
            }
            else if(this.filter=="Latest"){
                axios.get('https://fakestoreapi.com/products/category/'+this.category).
                then(result => this.items = result.data)
            }
        }
    }
}
</script>

<style scoped>

#head{
    margin-top: 30px;
    padding-top: 20px;
    padding-bottom: 30px;
    padding-left: 20px;
    font-family: "Raleway",sans-serif;
    border-bottom: 1px solid rgb(238, 232, 232);
}


#head div{
    display:inline-block;
}

#head #cat{
    color: rgb(139, 135, 135);
}


/* Main Content */

#main-content{
    display: grid;
    grid-template-columns: 2fr 9fr;
}

#top-left{
    border-right: 1px solid rgb(238, 232, 232);
    padding-left: 20px;
    border-bottom:1px solid rgb(238, 232, 232);
}

#top-left h1{
    margin: 20px 0px;
    font-weight: 500;
}

#top-right{
    border-bottom: 1px solid rgb(238, 232, 232);
    padding-top: 10px;
    font-family: "Raleway",sans-serif;
}

#top-right div{
    display: inline-block;
    margin-right: 100px;
}

#top-right h3{
    margin-left: 60px;
    font-weight: 500;
}

#product-count{
    float: right;
    padding-top: 20px;
    margin-right: 0px;
}

select{
    padding: 5px;
    font-family: "Raleway",sans-serif;
    font-size: 13px;
}

/* bottom-lrft , ul, li */

#bottom-left{
    border-right: 1px solid rgb(238, 232, 232);
}

#bottom-left ul{
    margin-left: 0px;
    list-style-type: none;
    margin-top: 30px;
    padding-left: 30px;
}

#bottom-left ul li{
    margin-top: 30px;
    font-size: 18px;
    color: grey;
}


/* Bottom Right */

#bottom-right div{
    width: 50%;
}

/* #bottom-right div */

#bottom-right{
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between;
    align-content:space-between;
    padding-left: 40px;
}



#bottom-right div{
    width: 30%;
    margin-left: 0px;
}

#bottom-right div #title{
    width: 100%;
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 18px;
    font-family: "Raleway",sans-serif;
    color: rgb(131, 127, 127);
    font-weight:lighter;
    text-align: center;
}

#bottom-right div #price{
    margin-bottom: 10px;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 25px;
    width:100%;
    text-align: center;
    color: black;
}

#bottom-right div a{
    text-decoration: none;
}

#bottom-right div #rate{
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: rgb(16, 226, 156);
    font-size: 20px;
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
}

#box{
    margin-bottom: 50px;
    padding-top: 20px;
    padding-left: 0px;
}

#box:hover{
    box-shadow: 0 4px 8px 0 rgba(173, 170, 170, 0.3), 0 6px 20px 0 rgba(168, 162, 162, 0.19);
}

#bottom-right div #image{
    width: 100%;
    text-align: center;
}

</style>