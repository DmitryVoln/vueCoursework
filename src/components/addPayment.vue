<template>
    <div class="newPayment">
        <input type="text" v-model="date" placeholder="date"/>
        <input type="number" v-model.number="value" placeholder="value"/>
        <button v-on:click="onclick">Add Data</button>
    </div>
</template>
<script>

export default {
    name: 'addPayment',
    data(){
        return {
            date: "",
            value: null,
        }

    }, 
    methods: {
        onclick() {
            const { category, value } = this;
            const data = {
                date: this.date || this.getCurrentDate,
                category,
                value,
            }
            this.$emit('addNewPayment', data);
        },
    },

    
    computed: {
        getCurrentDate() {
            const date = new Date();
            const day = date.getDate();
            const month = date.getMonth() > 8 ? date.getMonth() + 1 : (`0${date.getMonth() + 1}`);
            const year = date.getFullYear();
            return `${day}.${month}.${year}`;
        },
    }
}
</script>

<style lang="scss">

</style>