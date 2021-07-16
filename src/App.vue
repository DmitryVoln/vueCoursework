<template>
  <div id="app">
    <h3>My App</h3>
    <add-payment v-on:addNewPayment="addData"/>
    <br/>
    <paymentsDisplay v-bind:list="paymentsList"/>
    <br/>
    <selectCategory v-bind:categories="getCategoryList()"/>
  </div>
</template>

<script>
import PaymentsDisplay from './components/PaymentsDisplay.vue';
import addPayment from './components/addPayment.vue';
import selectCategory from './components/selectCategory.vue'
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'App',
  components: {
    PaymentsDisplay,
    addPayment,
    selectCategory,
  },
  data: () => ({

  }),
  methods: {
    ...mapMutations([
      'setPaymentsListData',
      'addDataToPaymentsList'
      ]),
    ...mapGetters([
      'getPaymentsList',
      'getCategoryList'
      ]),
      ...mapActions([
        'fetchData',
        'loadCategories',
      ]),
    //or:
    // getPaymentsList() {
    //  return this.$store.getters.getPaymentsList;
    // }
    // fetchData() {
    //   return [
    //     {
    //       date: '13.07.21',
    //       category: 'sport',
    //       value: 200,
    //     },
    //     {
    //       date: '13.07.21',
    //       category: 'food',
    //       value: 150,
    //     },
    //     {
    //       date: '13.07.21',
    //       category: 'hobby',
    //       value: 130,
    //     },
    //   ]
    // },
    addData(data) {
      this.addDataToPaymentsList(data);
    }
  },
  computed: {
    getFPV() {
      return this.$store.getters.getFullPaymentsValue;
    },
    paymentsList() {
      return this.getPaymentsList();
    }
  },
  //created hook:
  created() {
    this.fetchData();
    if (!this.getCategoryList.length) {
     this.loadCategories()
   }
    // this.$store.commit('setPaymentsListData', this.fetchData());
  },
  mounted () {
   
 }

}
</script>

<style lang="scss">
  #app {
 
  }
</style>
