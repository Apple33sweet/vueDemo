/**
* author     : JiaYuzhen
* createTime : 2018-08-31 14:19
* description:
*/
<style lang="less" scoped>

</style>

<template>
    <div class="login">
      <el-button @click="login">点击</el-button>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        beforeCreate() {

        },
        created() {

        },
        beforeMount() {

        },
        mounted() {

        },
        methods: {
          login(){
            this.$router.push({name: "menu"});
            console.log(this.$route.params);
           // router.push({name: "menu"})
          }
        },
        beforeUpdate() {

        },
        updated() {

        },
        beforeDestroy() {

        },
        destroyed() {

        },
    }
</script>
