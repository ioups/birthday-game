// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import 'bootstrap';


Rails.start()
Turbolinks.start()
ActiveStorage.start()

console.log("Hello from app/javascript/packs/application.js!");
import { initSweetalert } from '../plugins/init_sweetalert';

initSweetalert('#sub-birth', {
  title: "A nice alert",
  text: "This is a great alert, isn't it?",
  icon: "success"
  
}, (value) => {
  console.log(value);
});

const form = document.querySelector("#BlaBla");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nana = document.querySelector("#GO_name")
  const age2 = document.querySelector("#birthdate")
  console.log(nana.innerHTML);
  console.log(nana.innerText);
  console.log(nana.value);
  console.log(age2.value);
});

const form2 = document.querySelector("#new_test_form");
const result = document.querySelector(".results"); // CSS id selector


form2.addEventListener("submit", (event) => {
  event.preventDefault();
  const fn_form = document.querySelector("#firstname").value
  const age_form = document.querySelector("#birthdate").value
  console.log(fn_form);
  console.log(age_form);
  result.insertAdjacentHTML("beforeend", `Your Name is ${fn_form}` );
  result.insertAdjacentHTML("beforeend", `Your age is ${age_form}` );
});