const drop = document.querySelectorAll(".drop");
const nav = document.getElementById("nav");
const toggler = document.getElementById("toggler");

drop.forEach((dr) => {
  dr.addEventListener("click", () => {
    let state = dr.parentElement.getAttribute("data-open");
    if (state === "close") {
      dr.parentElement.setAttribute("data-open", "open");
    } else {
      dr.parentElement.setAttribute("data-open", "close");
    }
  });
});

toggler.addEventListener("click", () => {
  let state = nav.getAttribute("data-nav");
  if (state === "close") {
    nav.setAttribute("data-nav", "open");
  } else {
    nav.setAttribute("data-nav", "close");
  }
});
