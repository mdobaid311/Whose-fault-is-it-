const person1 = document.getElementById("person-1");
const person2 = document.getElementById("person-2");
const submit = document.getElementById("submit");
const faultSubmit = document.getElementById("submit-fault");
const person1fault = document.getElementById("person-1-fault-label");
const person2fault = document.getElementById("person-2-fault-label");
const person1_fault = document.getElementById("person-1-fault");
const person2_fault = document.getElementById("person-2-fault");
const faultBox = document.getElementById("fault");
const result = document.getElementById("result");
const displayResult = document.getElementById("display-result");
const note = document.getElementById("note");

alert("Note: person 1 should be a boy and person 2 should be a girl.")

submit.addEventListener("click", () => {
  if (!person1.value) {
    person1_fault.innerText = "Person-1";
    faultBox.style.visibility = "hidden";
  } else {
    person1fault.innerText = person1.value;
    faultBox.style.visibility = "initial";
    note.innerText = "";
  }
  if (!person2.value) {
    person2_fault.innerText = "Person-2";
    faultBox.style.visibility = "hidden";
    note.innerText = "Please enter both names.";
  } else {
    person2fault.innerText = person2.value;
    faultBox.style.visibility = "initial";
    note.innerText = "";
  }
});

faultSubmit.addEventListener("click", faultFinder);

function faultFinder() {
  if (person1_fault.checked && person2_fault.checked) {
    displayResult.innerText = `Doesn't matter, It's ${person1.value.toUpperCase()}'s fault.`;
    result.style.visibility = "initial";
  } else if (person1_fault.checked && !person2_fault.checked) {
    displayResult.innerText = `It's ${person1.value.toUpperCase()}'s fault.`;
    result.style.visibility = "initial";
  } else if (!person1_fault.checked && person2_fault.checked) {
    displayResult.innerText = `${person1.value.toUpperCase()} must have done something, because girls are always right.`
    result.style.visibility = "initial";
  } else {
    displayResult.innerText = `${person2.value.toUpperCase()}'s not wrong.`;
    result.style.visibility = "initial";
  }
}
