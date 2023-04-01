let dropdowns = document.querySelectorAll(".dropdown-menu");
let chain = document.querySelector(".chain-filter");
let type = document.querySelector(".type");
let kyc = document.querySelector(".kyc");
/* dropdown menus toggle thingies. 
i know i could've just used <select> but no. i forgot why not, actually.*/
chain.addEventListener("click", ()=> {
    let dd = document.querySelector(".chain-filter .dropdown-menu");
    dd.classList.toggle("--visually-hidden");
    focus(chain);
});
type.addEventListener("click", ()=> {
    let dd = document.querySelector(".type .dropdown-menu");
    dd.classList.toggle("--visually-hidden");
});
kyc.addEventListener("click", ()=> {
    let dd = document.querySelector(".kyc .dropdown-menu");
    dd.classList.toggle("--visually-hidden");
});
