import coachesModule from './modules/coaches';
import requestsModule from './modules/requests';

import { createStore } from 'vuex';

const store = createStore({
  state() {},
  mutations: {},
  actions: {},
  modules: { coaches: coachesModule, requests: requestsModule },
});

export default store;
