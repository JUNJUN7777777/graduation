<template>
    <div class="mapContainer">
        <div class="return">
            <el-button type="info" plain @click="goReturn()">
                返回 </el-button>
        </div>
        <div class="search">
            <Search></Search>
        </div>
        <div class="map">
            <MapContainer></MapContainer>
        </div>
        <div class="hotSearch">
            <el-checkbox v-model="checked" class="hotimg" @change="hotImg">热力图显示</el-checkbox>
        </div>
        <div class="infoWindows">
            <infoWindows></infoWindows>
        </div>
    </div>
</template>

<script>
import MapContainer from "@/components/MapContainer"
import Search from "@/components/Search"
import infoWindows from "@/components/infoWindows"

export default {
    name: 'Map',
    components: { MapContainer, Search, infoWindows },
    data() {
        return {
            checked: false,
            placeAddress: ''
        };
    },
    created() {
        this.$bus.$on("infoPosition", res => {
            this.placeAddress = res.address
        })
    },
    methods: {
        hotImg() {
            this.$bus.$emit('hotImg', this.checked)

        },
        goReturn() {
            this.$router.push({ name: 'hot', params: { address: this.placeAddress } })
        }
    }
};
</script>

<style lang="less">
.mapContainer {
    width: 100%;
    height: 615px;
    position: relative;

    .return {
        position: absolute;
        top: 30px;
        left: 10px;
        z-index: 1;
    }

    .search {
        position: absolute;
        top: 30px;
        left: 100px;
        z-index: 1;
    }

    .hotSearch {
        position: absolute;
        top: 40px;
        left: 380px;
        z-index: 1;


        .hotimg .el-checkbox__input.is-checked+.el-checkbox__label {
            color: #75AC47;
        }

        .hotimg .el-checkbox__input.is-checked .el-checkbox__inner,
        .hotimg .el-checkbox__input.is-indeterminate .el-checkbox__inner {
            border-color: #75AC47;
            background-color: #75AC47;
        }

    }

    .map {
        width: 100%;
        height: 100%;
    }

    .infoWindows {
        position: absolute;
        top: 100px;
        left: 10px;
    }
}
</style>