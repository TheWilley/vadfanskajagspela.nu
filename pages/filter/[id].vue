<template>
    <Main :filter="filter"/>
</template>

<script lang="ts">
export default {
    data() {
        return {
            filter: String(this.$route.params.id)
        }
    },
}
</script>