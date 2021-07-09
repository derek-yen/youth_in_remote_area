import { createStore } from "vuex";

export default createStore({
  state: {
    positionActive: null
  },
  mutations: {
    positionChange(state, position) {
      state.positionActive = position
    }
  }
});
