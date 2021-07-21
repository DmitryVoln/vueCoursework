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
        },
        addCategoryToList(state, payload) {
            let last = state.paymentsList.length - 1;
            state.paymentsList[last].category = payload;
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
                        const result = [];
                        for (let i = 0; i < 51; i++) {
                            result.push({
                                date: '13.07.2021',
                                category: 'sport',
                                value: 200,
                              })
                        }
                        resolve(result);
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