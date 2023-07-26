//set starting count.
let count = 0;

//select value and buttons.

const value = document.querySelector("#value");

const btns = document.querySelectorAll(".btn");

// console.log(btns);

//What is a node list?
//Array like - for each but not all.

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    //the class list finds the name of the class - it's "value"
    //currentTarget targets the current button not all.
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "#6BBF59";
    }
    if (count < 0) {
      value.style.color = "#d01c1f";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});
