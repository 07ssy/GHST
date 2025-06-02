function glitchText(element, text) {
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()";
  let iterations = 0;
  const interval = setInterval(() => {
    element.innerText = text
      .split("")
      .map((char, i) => {
        if (i < iterations) return char;
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join("");
    if (iterations >= text.length) clearInterval(interval);
    iterations += 0.3;
  }, 50);
}

const h1 = document.querySelector("h1");
glitchText(h1, "GHST DEVELOPER");


document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you! Message sent.");
});

