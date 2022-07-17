<template lang="html">
    <div>
        <h2>Sub Page</h2>
        <button @click="fnMainPage()">Move Main Page</button>
    </div>
</template>
<script>
    export default {
        methods: {
            fnMainPage() {
                this.$router.push('/main')
            }
        },
    }
</script>