<template>
    <div class="swiper-container" ref="mySwiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(carousel, index) in list" :key="carousel.id">
                <img :src="carousel.imgUrl">
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</template>

<script>
import Swiper from 'swiper';

export default {
    name: 'Carousel',
    props: ['list'],
    watch: {
        list: {
            immediate: true,
            handler(nweValue, oldValue) {
                this.$nextTick(() => {
                    var swiper = new Swiper(this.$refs.mySwiper, {
                        cssMode: true,
                        loop: false, // 循环模式选项,
                        autoplay: true,
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        },
                        pagination: {
                            el: ".swiper-pagination",
                            clickable: true
                        },
                        mousewheel: true,
                        keyboard: true,
                    });
                })
            }
        }
    }
} 
</script>

<style  lang="less">
.swiper-container {
    width: 100%;
    height: 100%;

    .swiper-slide {
        overflow: hidden;


        &:hover img {
            transition: 3s linear;
            transform: scale(1.1);
        }

        img {
            transition: .5s linear;
            width: 100%;
            height: 100%;
        }
    }

    .swiper-pagination-bullet {
        width: 20px;
        height: 20px;
        background-color: #bbe182;
    }

    .swiper-button-next,
    .swiper-button-prev {
        color: #caec66;
        margin: 0 40px;


    }
}
</style>