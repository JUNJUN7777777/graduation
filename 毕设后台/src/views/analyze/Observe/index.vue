<template>
    <div>
        <el-row :gutter="10">
            <el-col :span="12">
                <Search></Search>
            </el-col>
            <el-col :span="12" class="ca">
                <Category></Category>
            </el-col>
        </el-row>
    </div>
</template>
  
<script>
import Search from "./Search"
import Category from "./Category"
export default {
    name: 'Observe',
    components: { Search, Category },
    mounted() {
    }
}
</script>
  
<style lang="scss" scoped>
div {
    margin-top: 5px;
    height: 550px;
}
</style>
