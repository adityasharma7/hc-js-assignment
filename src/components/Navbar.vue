<template>
<div id="navigation">
    <img id="logo-image" src="https://pbs.twimg.com/profile_images/1192434574577610752/NyX82InT_400x400.jpg" alt="">
    <div id="list">
        <nav>
            <div>
                <a href="">WOMEN</a>
            </div>
            <div>
                <a href="">MEN</a>
            </div>
            <div>
                <a href="">GEAR</a>
            </div>
            <div>
                <a href="">TRAINING</a>
            </div>
        </nav>
    </div>
    <div id="search">
            <form class="example" action="action_page.php">
                <input type="text" placeholder="Search.." name="search">
                <button type="submit"><i class="fa fa-search fa-1x"></i></button>
            </form>
    </div>
    <div id="right">
        <a href=""><img src="https://static.thenounproject.com/png/2014807-200.png" alt=""></a>
        <a href=""><img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt=""></a>
    </div>
</div>

</template>

<script>
export default {

}
</script>

<style scoped>

#navigation{
    font-family: "Raleway" ,sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 15px;
    color: darkgray;
    height: auto;
}

#logo-image{
    height: 60px;
    width: 60px;
    display: inline-block;
    position: absolute;
}

#list{
    display: inline-block;
    margin-left: 100px;
    padding: 10px;
}

nav div{
    display: inline-block;
    padding: 10px;
    margin-right: 30px;
}

nav div a{
    text-decoration: none;
    color: rgb(114, 110, 110);
}

#search{
    display: inline-block;
    text-decoration-line: underline;
    border-bottom: 1px solid black;
    padding: 10px;
    padding-top: 0px;
    margin-left: 250px;
}

#search form input{
    border: white;
    width: 300px;
}

#search form input:focus{
    outline: none;
}

#search form input::placeholder{
   font-weight: 500;
   font-size: 16px;
}

#search form button{
    border: white;
    background: white;
    color: grey;
}

#right{
    display: inline-block;
    float: right;
    margin-top: 8px;
    padding: 10px;
}

#right a img{
    margin-left: 35px;
    height: 25px;
    width: 25px;
}

</style>