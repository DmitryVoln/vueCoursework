<template>
  <div id="app">
    <h3>My App</h3>
    <add-payment v-on:addNewPayment="addData"/>
    <br/>
    <paymentsDisplay v-bind:list="paymentsList"/>
  </div>
</template>

<script>
import PaymentsDisplay from './components/PaymentsDisplay.vue';
import addPayment from './components/addPayment.vue';
export default {
  name: 'App',
  components: {
    PaymentsDisplay,
    addPayment,
  },
  data: () => ({
    paymentsList: []
  }),
  methods: {
    fetchData() {
      return [
        {
          date: '13.07.21',
          category: 'sport',
          cost: 200,
        },
        {
          date: '13.07.21',
          category: 'food',
          cost: 150,
        },
        {
          date: '13.07.21',
          category: 'hobby',
          cost: 130,
        },
      ]
    },
    addData(data) {
      this.paymentsList.push(data);
    }
  },  //created hook:
  created() {
    this.paymentsList = this.fetchData()
  }
}
</script>

<style lang="scss">
  #app {
 
  }
</style>
