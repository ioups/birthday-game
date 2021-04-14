console.log('Hello from My bdtest')

// const form = document.querySelector("#BlaBla");

/* form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nana = document.querySelector("#GO_name")
  const age2 = document.querySelector("#birthdate")
  console.log(nana.innerHTML);
  console.log(nana.innerText);
  console.log(nana.value);
  console.log(age2.value);
}); */

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
}
