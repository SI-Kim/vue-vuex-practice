import { createStore } from "vuex";

export default new createStore({
  state() {
    return {
      text: "stored ttttttttext"
    };
  },
  mutations: {
    setText(state, value) {
      state.text = value;
    }
  }
});
