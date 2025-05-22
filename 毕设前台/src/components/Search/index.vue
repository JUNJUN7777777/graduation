<template>
    <div class="input">
        <el-input v-model="inputObj.userInput" placeholder="请输入查询地址" :id="inputObj.inputId"></el-input>
        <el-button type="success" plain @click="send">搜索</el-button>
    </div>
</template>

<script>

export default {
    name: 'Search',
    data() {
        return {
            inputObj: {
                userInput: '',
                inputId: "searchInput"
            }
        };
    },
    methods: {
        send() {
            this.$bus.$emit("userInput", this.inputObj)
        },

    },
    mounted() {
        this.send()
    }
};
</script>

<style lang="less" scoped>
.input {
    display: flex;
}
</style>