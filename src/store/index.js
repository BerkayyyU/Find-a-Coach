import coachesModule from './modules/coaches';
import requestsModule from './modules/requests';

import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      userId: 'c3',
    };
  },
  mutations: {},
  actions: {},
  modules: { coaches: coachesModule, requests: requestsModule },
  getters: {
    userId(state) {
      return state.userId;
    },
  },
});

export default store;
