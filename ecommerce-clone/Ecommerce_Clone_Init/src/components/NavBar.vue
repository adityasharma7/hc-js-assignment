<template>
    <div class="container">
        <div class="logo-img">
            <img class="amazon-logo" src="/images/NicePng_amazon-logo-png_167642.png" alt="amazon logo">
        </div>

        <div class="delivery-location-container">
            <i class="fa-solid fa-location-dot"></i>
            <div class="name-address">
                <span class="delivery-name">Deliver to Shashwat</span>
                <span class="delivery-address">Indore 452010</span>
            </div>
        </div>

        <div class="nav-fill">
			<div id="nav-search">
				<form id="nav-search-bar-form">
					<div class="nav-left">
						<a href="">All</a>
                        <i class="fa-solid fa-caret-down drop-down-icon"></i>
					</div>
					<div class="nav-fill">
						<input type="text">
					</div>
					<div class="nav-right">
						<i class="fa-solid fa-magnifying-glass"></i>
					</div>
				</form>
			</div>
		</div>

        <div class="nav-right">
			<div id="nav-tools">
				<div class="delivery-location-container">
                    <div class="name-address">
                        <span class="delivery-name">Hello, Shashwat</span>
                        <span class="delivery-address">Accounts & Lists</span>
                    </div>
                </div>

				<div class="delivery-location-container">
                    <div class="name-address">
                        <span class="delivery-name">Returns</span>
                        <span class="delivery-address">& Orders</span>
                    </div>
                </div>

                <div class="cart-side">
				    <i class="fa-solid fa-cart-shopping cart-icon"></i>
                    <span class="cart-name">Cart</span>
                </div>
			</div>
		</div>
        
    </div>
</template>

<script>
export default {
    name: 'NavBar',
}
</script>

<style scoped>
    .container {
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        display: flex;
        background-color: #131921;
        height: 58px;
        min-width: 100%;
    }

    .amazon-logo {
        position: relative;
        top: 10px;
        left: auto;
        height: 35px;
        margin: 5px;
        padding: 0 7px 0 5px;
    }

    .delivery-location-container {
        display: flex;
        position: static;
        
        padding: 0 9px 0 9px;
        margin: 5px 2px 5px 0;
        float: none;
        flex-flow: row nowrap;
        align-items: center;
        height: auto;
        width: fit-content;
        scroll-margin: 0;
    
    }

    .name-address {
        display: flex;
        position: static;
        float: none;
        flex-flow: column nowrap;
        cursor: pointer;
        width: fit-content;
    }

    .delivery-name {
        color: lightgray;
        font-size: 12px;
        line-height: 14px;
        height: 14px;
        font-weight: 400;
    }

    .delivery-address {
        color: white;
        font-size: 14px;
        line-height: 15px;
        font-weight: 700;
    }

    i {
        color: white;
        background-position: -71px -378px;
        width: 15px;
        height: 18px;
        margin-top: 8px;
        display: flex;
        position: static;
        float: none;
    }

    /* ------------------------------- */
    
    .container .nav-fill {
	    box-sizing: border-box;
	    display: flex;
	    flex: 1 1 auto;
        height: 55px;
        width: 50px;
    }

    .drop-down-icon {
        color: #131921;
    }

    #nav-search {
        box-sizing: border-box;
        width: auto;
        display: flex;
        flex: 1 1 auto;
        padding: 0.5rem 0.5rem 0.5rem 0.5rem;
        overflow: hidden;
    }

    #nav-search-bar-form {
        box-sizing: border-box;
        display: flex;
        flex: 1 1 auto;
        width: 80px;
        border-radius: var(--border-radius);
        overflow: hidden;
    }

    #nav-search-bar-form input {
        width: 70px;
    }

    #nav-search-bar-form:focus-within {
        box-sizing: border-box;
        border: 0.2rem solid black;
        margin: 0 -0.2rem 0 -0.2rem;
        box-shadow: 0rem 0rem 0.3rem var(--main-border-shadow);
    }

    #nav-search-bar-form .nav-left {
        font-family: 'Source Sans Pro', sans-serif;
        box-sizing: border-box;
        display: flex;
        background: #F0F0F0;
        align-items: center;
    }

    #nav-search-bar-form .nav-left a {
        display: flex;
        color: black;
        padding: 0 0.5rem 0 0.5rem;
        flex: 1 1 auto;
        width: 100%;
        height: 100%;
        align-items: center;
        text-decoration: none;
        font-size: 13px;
    }

    .nav-left {
        display: flex;
        border: 1px solid lightgray;
        justify-content: center;
    }

    #nav-search-bar-form .nav-left > a,  #nav-search-bar-form .nav-left > i{
        color: #686868;
    }

    #nav-search-bar-form .nav-left {
        border-radius: 5px 0 0 5px;
    }

    #nav-search-bar-form .nav-left:hover > a  {
        color: #131921;
    }

    #nav-search-bar-form .nav-left > i:hover {
        color: black;
    }

    #nav-search-bar-form .nav-left:hover {
        background: #D0D0D0;
    }

    #nav-search-bar-form .nav-fill {
        box-sizing: border-box;
        display: flex;
        flex: 1 1 auto;
        overflow-x: hidden;
        overflow-y: hidden;
        width: 10px;
        background: white;
        border-left: 0.1rem solid var(--main-search-opt);
        border-right: 0.1rem solid var(--main-text);
    }

    #nav-search-bar-form .nav-fill input {
        box-sizing: border-box;
        flex: 1 1 auto;
        padding: 0;
        font-size: 1rem;
        text-indent: 0.5rem;
        border: 0;
    }

    #nav-search-bar-form .nav-fill > input:focus {
        outline: none;
    }

    #nav-search-bar-form .nav-right {
        box-sizing: border-box;
        display: flex;
        background: var(--main-border-shadow);
        align-items: center;
        border-radius: 0 5px 5px 0;
    }

    #nav-search-bar-form .nav-right > i {
        display: flex;
        flex: 1 1 auto;
        align-items: center;
        border-radius: 0 5px 0 5px;
        border: 0;
        background-color: #febd69;
        color: #303030;
        width: 100%;
        height: 100%;
        padding: 0 0.5rem 0 0.5rem;
        cursor: pointer;
    }

    #nav-search-bar-form .nav-right > button:hover {
        background-color: #E8A317;
    }

    .container > .nav-right {
        box-sizing: border-box;
        display: flex;
    }

    #nav-tools {
        display: flex;
        flex: 1 1 auto;
        padding: 0.5rem 0.5rem 0.5rem 0;
    }

    #nav-tools > a {
        box-sizing: border-box;
        display: flex;
        flex: 1 1 auto;
        align-items: center;
        padding: 0 0.5rem 0 0.5rem;
        margin: 0.1rem;
    }

    #nav-tools > a:hover {
        border: 0.1rem solid var(--main-border);
        border-radius: var(--border-radius);
        margin: 0;
        color: var(--main-text);
        box-shadow: 0rem 0rem 0.3rem var(--main-border-shadow);
    }

    .cart-side {
        display: flex;
    }

    .cart-name {
        color: #fff;
        font-size: 14px;
        line-height: 15px;
        font-weight: 700;
    }

    .cart-icon {
        size: 30px;
    }
</style>