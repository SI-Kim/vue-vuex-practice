import { createStore } from "vuex";

export default new createStore({
  state() {
    return {
      text: "stored tttttttttttttttttttext"
    };
  },
  mutations: {
    setText(state, value) {
      state.text = value;
    }
  }
});
