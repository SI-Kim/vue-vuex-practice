<template>
  <header-box />
  <section>
    <hello-world />
    <input-component class="input-component" />
    <text-area-component class="text-area-component" />
  </section>
  <footer-box />
</template>

<script>
import {
  HelloWorld,
  InputComponent,
  TextAreaComponent,
} from "./components/index";
import { HeaderBox, FooterBox } from "./layouts/index";

export default {
  name: "App",
  components: {
    HeaderBox,
    FooterBox,
    HelloWorld,
    InputComponent,
    TextAreaComponent,
  },
};
</script>

<style>
body {
  height: 100vh;
  width: 100vw;
  margin: 0;
}

.input-component {
  margin: 10px 0 10px 0;
  text-align: center;
}

.text-area-component {
  margin: 10px 0 10px 0;
  text-align: center;
}
</style>
