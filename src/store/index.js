import { createStore } from "vuex";

export default new createStore({
  state() {
    return {
      text: "stored text"
    };
  }
});
