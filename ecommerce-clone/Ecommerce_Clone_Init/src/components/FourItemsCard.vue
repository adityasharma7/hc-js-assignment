<template>
    <div class="card-container">
        <div class="individual-cards">
            <h2>{{title}}</h2>
                <div class="all-images-container"  v-for="card in cardData" :key="card.values.id">
                    <div :id="card.values.id" class="img-container">
                        <img :src="card.values.imgSrc" alt="">
                        <span>{{card.values.imgTitle}}</span>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FourItemsCard',

    data() {
        return {
            title: "Keep shopping for",
            cardData:
            [
                {
                    values: {
                        id: 1,
                        imgSrc: "https://m.media-amazon.com/images/I/91Np-iPIDGL._AC_SY270_.jpg",
                        imgTitle: "Pioneer DJ DDJ 400"
                    },
                },
                {
                    values: {
                        id: 2,
                        imgSrc: "https://m.media-amazon.com/images/I/819eIk3o32L._AC_SY270_.jpg",
                        imgTitle: "Numark Mixtrack Platinum FX",
                    },
                },
                // {
                   
                //     values: {
                //         id: 3,
                //         imgSrc: "https://m.media-amazon.com/images/I/91GOGM-4pHL._AC_SY270_.jpg",
                //         imgTitle: "Bariton Gig Bag For Party",
                //     },
                // },
                // {
                //     values: {
                //         id: 4,
                //         imgSrc: "https://m.media-amazon.com/images/I/61SYQoxds9L._AC_SY270_.jpg",
                //         imgTitle: "Hercules DJ Controller",
                //     },
                // },
            ]
            
        }
    },
    
}
</script>

<style scoped>

    .card-container {
        position: absolute;
        top: 400px;
        max-width: 350px;
        min-height: 500;
    }
    .individual-cards {
        font-size: 13px!important;
        line-height: 19px!important;
        max-width: 400px;
        display: block;
        height: 420px;
        min-height: 420px;
        flex: 1 0 290px;
        padding-left: 10px;
        padding-right: 10px;
        min-width: 290px;
        order: 1;
        box-sizing: border-box;

    }

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        box-sizing: border-box;
        margin: auto;
        display: block;
        cursor: pointer;
        height: 145px;
        width: 154px;

    }

    span {
        /* width: auto; */
        color: #000;
        overflow: hidden;
        white-space: nowrap; /* Don't forget this one */
        text-overflow: ellipsis;
    }

    h2 {
        grid-column: 1/3;
        font-size: 25px;
        font-weight: 600;
        padding-top: 15px;
        margin: 0; 
    }

    .all-images-container {
        display: flex;
        flex-direction: column;
    }

</style>