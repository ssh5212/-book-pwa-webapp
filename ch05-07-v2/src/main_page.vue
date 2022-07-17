<template lang="html">
    <div>
        <h2>Main Page</h2>
        <button @click="fnSubPage()">Move Sub Page</button>
    </div>
</template>

<script>
    export default {
        methods: {
            fnSubPage() {
                this.$router.push('/sub')
            }
        },
    }
</script>