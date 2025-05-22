<template>
    <div id="container">
    </div>
</template>

<script>

import AMapLoader from '@amap/amap-jsapi-loader'
window._AMapSecurityConfig = {
    securityJsCode: "cac0f11d7fef96edac5406523c40498c",
}
export default {
    name: 'MapContainer',
    data() {
        return {
            map: null,
            autoOptions: {
                input: ''
            },
            auto: null,
            //接收Search组件input输入框的值
            searchInput: '',
            placeSearch: null,
            district: null,//行政区
            polygons: [],
            hotImg: false, //热力图开关以及收集
            heatmap: null,
            heatmapList: []
        };
    },
    methods: {
        initMap() {
            AMapLoader.load({
                key: "4a0163d85dd98968263f5936ef8ba886",             // 申请好的Web端开发者Key，首次调用 load 时必填
                version: "2.0",                          //默认1.4.5
                plugins: ["AMap.ToolBar", "AMap.Scale", "AMap.HawkEye", "AMap.MapType", "AMap.Geolocation", "AMap.AutoComplete", "AMap.PlaceSearch", "AMap.Geocoder"],       // 需要使用的的插件列表，如比例尺'AMap.Scale'等
            }).then((AMap) => {
                this.map = new AMap.Map("container", {  //设置地图容器id
                    viewMode: "3D",    //是否为3D地图模式
                    zoom: 10,           //初始化地图级别
                    center: [110.370314, 25.200182], //初始化地图中心点位置
                });
                this.map.addControl(new AMap.Scale());  //比例尺
                this.map.addControl(new AMap.ToolBar()); //创建工具条插件实例
                this.map.addControl(new AMap.MapType());  //卫星地图切换
                this.map.addControl(new AMap.Geolocation()); //定位
                this.map.addControl(new AMap.HawkEye()); //小地图
                this.auto = new AMap.AutoComplete(this.autoOptions)//搜索自动匹配
                this.placeSearch = new AMap.PlaceSearch({
                    map: this.map//构造地点查询类
                })
                this.auto.on('select', this.select)
                this.map.on("click", e => {
                    let lat = e.lnglat.lat
                    let lng = e.lnglat.lng
                    this.getservice(lat, lng)
                })
                //添加固定标点
                var marker = new AMap.Marker({
                    position: new AMap.LngLat(110.299312, 25.063343),
                    titlel: '桂林'
                })
                this.map.add(marker)

                //圆点标记
                let circleMarker = new AMap.CircleMarker({
                    map: this.map,
                    center: new AMap.LngLat(121.13, 31.088525),
                    radius: 20,
                    fillColor: "#C0E38C"
                })
                circleMarker.setMap(this.map)

            }).catch(e => {
                console.log(e);
            })
        },
        select(e) {
            this.placeSearch.setCity(e.poi.adcode)
            this.placeSearch.search(e.poi.name) //关键字查询查询
            this.drawBounds(e.poi.name)
            this.map.setZoom(16, true, 1)
        },
        // 行政区区域划分
        drawBounds(newValue) {
            //加载行政区划插件
            if (!this.district) {
                //实例化DistrictSearch
                var opts = {
                    subdistrict: 0, //获取边界不需要返回下级行政区
                    extensions: 'all', //返回行政区边界坐标组等具体信息
                    level: 'district' //查询行政级别为 市
                }

                this.map.plugin(['AMap.DistrictSearch'], () => {
                    this.district = new AMap.DistrictSearch(opts)
                })
                // this.district = new AMap.DistrictSearch(opts)
            }
            //行政区查询
            this.district.search(newValue, (status, result) => {
                if (result != null) {
                    this.success("区域搜索成功")
                    if (this.polygons != null) {
                        this.map.remove(this.polygons) //清除上次结果
                        this.polygons = []
                    }
                    var bounds = result.districtList[0].boundaries
                    if (bounds) {
                        for (var i = 0, l = bounds.length; i < l; i++) {
                            //生成行政区划polygon
                            var polygon = new AMap.Polygon({
                                strokeWeight: 1,
                                path: bounds[i],
                                fillOpacity: 0.4,
                                fillColor: '#80d8ff',
                                strokeColor: '#0091ea'
                            })
                            this.polygons.push(polygon)
                        }
                    }
                    this.map.add(this.polygons)
                    this.map.setFitView(this.polygons) //视口自适应
                } else {
                    this.success("区域搜索失败", 'error')
                }
            })
        },
        //成功消息提示
        success(msg, callbackType = "success") {
            this.$message({
                showClose: true,
                message: msg,
                type: callbackType
            });
        },
        //热力图方法
        showHotImg() {
            this.map.plugin(['AMap.PlaceSearch'], () => {
                //构造地点查询类
                var placeSearch = new AMap.PlaceSearch({
                    pageSize: 50, // 单页显示结果条数
                    pageIndex: 1, // 页码
                    city: this.searchInput, // 兴趣点城市
                    citylimit: true //是否强制限制在设置的城市内搜索
                    //map: this.map, // 展现结果的地图实例
                    // panel: 'panel', // 结果列表将在此容器中进行展示。
                    // autoFitView: true // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
                })
                //关键字查询
                placeSearch.search("桂林", (status, result) => {
                    // console.log(result)

                    this.getHotChartPos("桂林", result)
                })
            })
            this.$notify({
                title: '成功',
                message: '热力图获取成果，但是由于电脑性能，我们仅加载部分数据',
                type: 'success'
            })
        },
        //对搜索到的数据进行实际的获取
        getHotChartPos(detail, result) {
            let lengthSize = result.poiList.pageSize
            const count = result.poiList.count
            // const lengthPage = count / lengthSize
            if (lengthSize > count) {
                lengthSize = count
            }
            for (var n = 0; n < 2; n++) {
                // this.map.plugin(['AMap.PlaceSearch'], () => {
                //构造地点查询类
                var realSearch = new AMap.PlaceSearch({
                    pageSize: 50, // 单页显示结果条数
                    pageIndex: n + 1, // 页码
                    city: this.searchInput, // 兴趣点城市
                    citylimit: true //是否强制限制在设置的城市内搜索
                    // map: this.map, // 展现结果的地图实例
                    // panel: 'panel', // 结果列表将在此容器中进行展示。
                    // autoFitView: true // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
                })
                realSearch.search(detail, (status, result) => {
                    // for (var j = 0; j < 50; j++) {
                    // this.map.remove(this.map.getAllOverlays('marker'))
                    //var centerPoint = [result.poiList.pois[j].location.lng, result.poiList.pois[j].location.lat]
                    // console.log(result)
                    //热力图
                    this.showHatChart(result)
                    // }
                })
            }
        },
        //展示热力图
        showHatChart(result) {
            var info = []
            for (let i = 0; i < 50; i++) {
                info.push({
                    lng: result.poiList.pois[i].location.lng,
                    lat: result.poiList.pois[i].location.lat,
                    count: 3 * 50 * Math.round(Math.random() * (10 - 2) + 2)
                })
            }

            this.map.plugin(['AMap.HeatMap'], () => {
                // console.log('nn')
                //初始化heatmap对象
                this.heatmap = new AMap.HeatMap(this.map, {
                    radius: 56, //给定半径
                    opacity: [0, 0.5]
                    /*,
                      gradient:{
                          0.5: 'blue',
                          0.65: 'rgb(117,211,248)',
                          0.7: 'rgb(0, 255, 0)',
                          0.9: '#ffea00',
                          1.0: 'red'
                      }
                       */
                })
                //设置数据集
                this.heatmap.setDataSet({
                    data: info,
                    max: 100
                })
                this.heatmapList.push(this.heatmap)
                this.heatmap.show()
            })
        },
        //逆向地址编码服务
        getservice(lat, lng) {
            let pos = [lng, lat]
            let lnglat = new AMap.LngLat(lng, lat)
            var geocoder = new AMap.Geocoder({
                city: '全国' // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
            })

            //添加固定标点
            var marker = new AMap.Marker({
                position: new AMap.LngLat(lng, lat),
                icon: 'images/标点.png'
            })
            this.map.add(marker)
            let address = ''
            //将位置转化坐标点-->地理信息
            //最后将固定的窗体信息进行展示
            geocoder.getAddress(lnglat, (status, result) => {
                if (status === 'complete' && result.regeocode) {
                    address = result.regeocode.formattedAddress;
                    let res = {
                        pos: pos,
                        address: address
                    }
                    this.$bus.$emit("infoPosition", res)
                } else {
                    log.error('根据经纬度查询地址失败')
                }
            });
        }
    },
    mounted() {
        this.initMap()
    },
    created() {
        this.$bus.$on("userInput", val => {
            this.autoOptions.input = val.inputId
            this.searchInput = val.userInput
        })
        this.$bus.$on("hotImg", val => {
            this.hotImg = val
        })
    },
    watch: {
        searchInput(newValue) {
            if (newValue != null) {
                this.placeSearch.search(newValue)
                this.drawBounds(newValue)
                this.map.setZoom(16, true, 1)
            }
        },
        hotImg(newValue) {
            if (newValue) {
                this.showHotImg()
            } else {
                this.heatmap.hide()
            }
        }
    }
};
</script>

<style lang="less" scoped>
#container {
    padding: 0px;
    margin: 0px;
    width: 100%;
    height: 100%;
}
</style>