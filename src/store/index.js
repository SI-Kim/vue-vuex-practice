import { createStore } from "vuex";

export default new createStore({
  state() {
    return {
      text: "stored tttttttttttext"
    };
  },
  mutations: {
    setText(state, value) {
      state.text = value;
    }
  }
});
