<template>
<div>
    <select v-model="selected" v-on:change="ret" aria-placeholder="category">
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
    methods: {
        ret() {
            this.$emit('addCategory', this.selected)
    },
    computed: {
        }
    }
}
</script>
