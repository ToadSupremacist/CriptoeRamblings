let dropdowns = document.querySelectorAll(".dropdown-menu");
let chain = document.querySelector(".chain-filter");
let type = document.querySelector(".type");
let kyc = document.querySelector(".kyc");

chain.addEventListener("click", ()=> {
    let dd = document.querySelector(".chain-filter .dropdown-menu");
    dd.classList.toggle("--visually-hidden");
});
type.addEventListener("click", ()=> {
    let dd = document.querySelector(".type .dropdown-menu");
    dd.classList.toggle("--visually-hidden");
});
kyc.addEventListener("click", ()=> {
    let dd = document.querySelector(".kyc .dropdown-menu");
    dd.classList.toggle("--visually-hidden");
});

