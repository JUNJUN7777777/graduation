<template>
    <div>
        <div class="card-header">
            <span>{{ title }}</span>
            <svg t="1709171729477" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="4376" width="16" height="16">
                <path
                    d="M536 480v192a16 16 0 0 1-16 16h-16a16 16 0 0 1-16-16V480a16 16 0 0 1 16-16h16a16 16 0 0 1 16 16z m-32-128h16a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16h-16a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16z m8 448c159.056 0 288-128.944 288-288s-128.944-288-288-288-288 128.944-288 288 128.944 288 288 288z m0 48c-185.568 0-336-150.432-336-336s150.432-336 336-336 336 150.432 336 336-150.432 336-336 336z"
                    fill="#8a8a8a" p-id="4377"></path>
            </svg>
        </div>
        <div class="card-content">
            <span>{{ count }}</span>
        </div>
        <div class="card-charts">
            <slot name="charts"></slot>
        </div>
        <div class="card-footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'Detail',
    props: ['title', 'count']
}
</script>
  
<style lang="scss" scoped>
span {
    font-size: 20px;
    color: rgb(32, 29, 29)a8a;
}

h3 {
    font-size: 25px;
    font-weight: bold;

}

.card-header {
    display: flex;
    justify-content: space-between;
    color: #bcbcbc;
}

.card-content {
    font-size: 30px;
    padding: 10px 0;
}

.card-charts {
    width: 100%;
    height: 50px;
}

.card-footer {
    font-size: 20px;
    height: 25px;
    border-top: 1px solid #eee;
    padding-top: 10px;
}
</style>
