<template>
    <div class="payments-list">
         <tr><th>#</th><th>дата</th><th>категория</th><th>сумма</th></tr>
        <div v-for="(item, idx) in list" :key="idx">
            <table>
                <tr><td>{{idx}}</td><td>{{item.date}}</td><td>{{item.category}}</td><td>{{item.value}}</td></tr> 
            </table>
        </div>
        <div class="table">
        </div>
    </div>
</template>
<script>
export default {
    name: 'PaymentsDisplay',
    props: {
        list: {
            type: Array,
            default: () => []
        }
    },
    data(){
        return {

        }

    }
}
</script>

<style lang="scss">


</style>