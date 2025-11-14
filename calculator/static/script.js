const buttons = document.querySelectorAll(".btn");
const display = document.getElementById("display");

let expression = "";

buttons.forEach((btn) => {
  btn.addEventListener("click", async () => {
    const value = btn.dataset.value;

    if (btn.classList.contains("clear")) {
      expression = "";
      display.value = "";
      return;
    }

    if (btn.classList.contains("equal")) {
      if (expression.trim() === "") return;
      const res = await fetch("/calculate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ expression }),
      });
      const data = await res.json();
      display.value = data.result;
      expression = data.result;
      return;
    }

    expression += value;
    display.value = expression;
  });
});
