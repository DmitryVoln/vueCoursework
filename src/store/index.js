import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        paymentsList: [],
        categoryList: [],
    },
    mutations: {
        setPaymentsListData(state, payload) {
            state.paymentsList = payload;
        },
        addDataToPaymentsList(state, payload) {
            state.paymentsList.push(payload);
        },
        setCategoryList(state, payload) {
            if (!Array.isArray(payload)) {
                state.categoryList = [payload];
            }
            state.categoryList.push(...payload)
        }
    },
    getters: {
        getPaymentsList(state) {
            return state.paymentsList;
        },
        getFullPaymentsValue(state) {
            return state.paymentsList.reduce((sum, elem) => sum + elem.value, 0)
        },
        getCategoryList(state) {
            return state.categoryList;
        }
    },
    actions: {
        fetchData({commit}) {
            return  new Promise((resolve) => {
                setTimeout(() => {
                        resolve([
                          {
                            date: '13.07.21',
                            category: 'sport',
                            value: 200,
                          },
                          {
                            date: '13.07.21',
                            category: 'food',
                            value: 150,
                          },
                          {
                            date: '13.07.21',
                            category: 'hobby',
                            value: 130,
                          },
                        ])
                }, 2000)
            } ).then((data) => commit('setPaymentsListData', data))
        },
        loadCategories({commit}) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(['sport', 'food', 'hobby', 'health', 'another'])
                }, 1000)
            }).then((result) => commit('setCategoryList', result));
        }
    },
});