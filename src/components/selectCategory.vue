<template>
<div>
    <select v-model="selected">
        <option v-for="(item, idx) in categories" v-bind:key="idx">
            {{ item }}
        </option>
    </select>
</div>
</template>

<script>

export default {
    name: 'selectCategory',
    props: {
        categories: {
            type: Array,
            default: () => [],
        }
    },
    data() {
        return {
            selected: '',
        }
    },
    computed: {
        ret() {
            return console.log(this.selected)
        }
    }
}
</script>
