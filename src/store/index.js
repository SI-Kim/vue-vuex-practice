import { createStore } from "vuex";

export default new createStore({
  state() {
    return {
      text: "stored ttttttext"
    };
  },
  mutations: {
    setText(state, value) {
      state.text = value;
    }
  }
});
