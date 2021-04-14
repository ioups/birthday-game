console.log('Hello from My bdtest');

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM loaded 🤩");
});

document.addEventListener("turbolinks:load", (event) => {
  console.log("Turbolinks turboed ✌");
  const form2 = document.querySelector("#new_test_form");
  const result = document.querySelector(".results"); // CSS id selector
  if (form2) {
    form2.addEventListener("submit", (event) => {
    event.preventDefault();
    const fn_form = document.querySelector("#username").value
    const age_form = document.querySelector("#dateinput").value
    const nd = new Date(age_form)
    console.log(fn_form);
    console.log(age_form);
    console.log(nd.toDateString());
    result.insertAdjacentHTML("beforeend", `<p> Your Name is <strong>${fn_form}</strong></p>` );
    result.insertAdjacentHTML("beforeend", `Your date of birth is ${age_form}` );
    });
  };
});




