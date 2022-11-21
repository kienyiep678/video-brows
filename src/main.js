import Vue from "vue";
import Appss from "./App";

// new Vue({
//   el: "#app",
//   // render: function (createElement) {
//   //   return createElement(App);
//   // },

//   //  render: function (h) {
//   //   return h(App);
//   // },
//   render: (h) => h(App),
// });

new Vue({
  // render: function (createElement) {
  //   return createElement(App);
  // },

  //  render: function (h) {
  //   return h(App);
  // },
  render: (h) => h(Appss),
}).$mount("#app");
