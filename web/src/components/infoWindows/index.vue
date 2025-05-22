<template>
    <div class="infowindows">
        <h3>信息展示:</h3>
        <div>
            <span>地址:</span>
            <span>{{ placeAddress }}</span>
        </div>
        <div>
            <span>坐标: </span>
            <span>{{ placeLocation }}</span>
        </div>
    </div>
</template>

<script>

export default {
    name: '',
    data() {
        return {
            placeAddress: '',
            placeLocation: ''
        };
    },
    methods: {},
    created() {
        this.$bus.$on("infoPosition", res => {
            this.placeAddress = res.address
            this.placeLocation = res.pos

        })
    }
};
</script>

<style scoped>
.infowindows {
    height: 100px;
    width: 270px;
    background-color: #F0F9EB;
    padding: 5px 15px 0;

    h3 {
        font-size: 16px;
        color: #75AC47;
    }

    span {
        font-weight: bold;
        font-size: 14px;
    }
}
</style>

