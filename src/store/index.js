import { createStore } from "vuex";

export default new createStore({
  state() {
    return {
      text: "stored ttttttttttttttttext"
    };
  },
  mutations: {
    setText(state, value) {
      state.text = value;
    }
  }
});
