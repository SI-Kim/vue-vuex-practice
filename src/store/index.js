import { createStore } from "vuex";

export default new createStore({
  state() {
    return {
      text: "stored ttttext"
    };
  },
  mutations: {
    setText(state, value) {
      state.text = value;
    }
  }
});
