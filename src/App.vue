<template>
  <div id="app">
    <h3>My App</h3>
    <add-payment v-on:addNewPayment="addData"></add-payment>
    <selectCategory v-bind:categories="getCategoryList()" v-on:addCategory="addCat"/>
    <br/>
    <paymentsDisplay v-bind:list="paymentsList"/>
    <br/>
    <pagination v-bind:pageCount="fetchPageCount"
    v-on:changePage="actualPage"/>
  </div>
</template>

<script>
import PaymentsDisplay from './components/PaymentsDisplay.vue';
import addPayment from './components/addPayment.vue';
import selectCategory from './components/selectCategory.vue'
import { mapGetters, mapMutations, mapActions } from 'vuex'
import Pagination from './components/Pagination.vue';
export default {
  name: 'App',
  components: {
    PaymentsDisplay,
    addPayment,
    selectCategory,
    Pagination,
  },
  data() {
    return {
      page: 0,
      category: '',
    }
  },
  methods: {
    ...mapMutations([
      'setPaymentsListData',
      'addDataToPaymentsList',
      'addCategoryToList',
      ]),
    ...mapGetters([
      'getPaymentsList',
      'getCategoryList',
      'getPageCount',
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
      data.category = this.category;
      this.addDataToPaymentsList(data);

    },
    addCat(data) {
      this.category = data;
    },
    actualPage(page) {
      this.page = page;
    }
  },
  computed: {
    getFPV() {
      return this.$store.getters.getFullPaymentsValue;
    },
    paymentsList() {
        return this.getPaymentsList().slice((this.page * 10), (this.page * 10 + 10));
    },
    fetchPageCount() {
      return this.getPageCount();
    }
  },
  //created hook:
  created() {
    this.fetchData();
    if (!this.getCategoryList.length) {
     this.loadCategories();
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
