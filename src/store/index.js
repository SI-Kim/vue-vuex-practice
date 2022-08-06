import { createStore } from "vuex";

export default new createStore({
  state() {
    return {
      text: "stored ttttttttttext"
    };
  },
  mutations: {
    setText(state, value) {
      state.text = value;
    }
  }
});
