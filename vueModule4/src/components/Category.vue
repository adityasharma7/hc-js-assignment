


<script>

// import Button from "./Button.vue";
    export default {
    
        name: 'Category',
        
           data() {
          return {
            posts: [],
            categoryArr :[],
            categoryName:''
          
          };
        },
        methods: {
 
          async getData() {
           this.categoryName = this.$route.params.category_name
            try {
              let response = await fetch("https://fakestoreapi.com/products");
              this.posts = await response.json();
              if(this.categoryName != 'all'){
                this.categoryArr = this.posts.filter(
                (post) => post.category === this.categoryName
              );
              }
              else{
                this.categoryArr = this.posts 
              }
             
                   } catch (error) {
              console.log(error);
            }
          },
        },
        created() {
          this.getData();
        },
    }
    </script>
    

    
    <style scoped>
    #home-parent {
      width: 100% !important;
    }
    .space {
      margin-bottom: 20px;
      width: 100% !important;
    }
    
    img {
      height: 200px;
      width: 100px;
    }
    .card-text {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .cat {
      display: flex;
      flex-direction: column;
    }
    </style> 