import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        paymentsList: [],
        categoryList: [],
        onePageList: [],
        // pageCount: [],
    },
    mutations: {
        setPaymentsListData(state, payload) {
            state.paymentsList = payload;
        },
        addDataToPaymentsList(state, payload) {
            let last = state.paymentsList.length - 1;
            payload.id = last + 1;
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
        },
        // setPageCount(state, payload) {
        //     let pageCount = Math.ceil(payload.length / 10);
        //     for (let i = 0; i < pageCount; i++) {
        //         state.pageCount.push(i);
        //     }
        // }
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
        },
        getPageCount(state) {
            let count = Math.ceil(state.paymentsList.length / 10);
            let pageCount = [];
            for (let i = 0; i < count; i++) {
                pageCount.push(i);
            }
            return pageCount;
        }
    },
    actions: {
        fetchData({commit}) {
            return  new Promise((resolve) => {
                setTimeout(() => {
                        const result = [];
                        for (let i = 0; i < 49; i++) {
                            result.push({
                                id: i,
                                date: '13.07.2021',
                                category: 'sport',
                                value: 200 + i,
                              })
                        }
                        resolve(result);
                }, 2000)
            } ).then((data) => {
                commit('setPaymentsListData', data);
                // return data;
            })
        },
        //     }).
        //         then((data) => commit('setPageCount', data));
        
        loadCategories({commit}) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(['sport', 'food', 'hobby', 'health', 'another'])
                }, 1000)
            }).then((result) => commit('setCategoryList', result));
        }
    },
});