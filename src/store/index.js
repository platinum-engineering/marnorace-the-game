import Vue from 'vue';
import Vuex from 'vuex';



import popup from './popup';
import heroes from './modules/heroes';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        activeStep: 1,
        isFirstCellActive: false,
        isProgressActive: false, // обычный прелоадер на страницах
    },
    mutations: {
        SET_ACTIVE_STEP(state, payload) {
            state.activeStep = payload;
        },
        SET_FIRST_CELL_ACTIVE(state, payload = true) {
            state.isFirstCellActive = payload;
        },
        TOGGLE_ASIDE_ACTIVE(state, payload = true) {
            state.isAsideActive = payload;
        },
    },
    actions: {
    },
    modules: {
        popup,
        heroes
    },
});
