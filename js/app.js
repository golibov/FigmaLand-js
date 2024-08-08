"use strict";




// =======================> header section start <========================


let navbarItems = ['Home', 'Product', 'About', 'Contact']

let elHeader = document.querySelector(".site-header");


console.log(elHeader);
let elContainer = document.createElement("div");
let elNav = document.createElement("div");
let elLogo = document.createElement("a");
let elLogoImg = document.createElement("img");
let elList = document.createElement("ul");
let login = document.createElement("a");




elContainer.classList.add("container")
elNav.classList.add("nav");
elLogo.classList.add("nav__logo");
elLogo.href = "/"

login.classList.add("nav__login");
login.href = '/'
login.textContent = 'Login'

navbarItems.forEach(item => {
    let elListItem = document.createElement("li");
    let elListItemLink = document.createElement("a");
    elList.classList.add("nav__list");
    elListItem.classList.add("nav__list--items");
    elListItemLink.classList.add("list--items--link");

    elList.appendChild(elListItem);
    elListItem.appendChild(elListItemLink);

    elListItemLink.href = "#";
    elListItemLink.textContent = item;
})

elLogoImg.classList.add("nav__logo--img");
elLogoImg.src = './images/logo.svg';
elLogoImg.alt = "logo";
elLogoImg.width = '206';
elLogoImg.height = '58';


elHeader.appendChild(elContainer);
elContainer.appendChild(elNav);
elNav.appendChild(elLogo);
elLogo.appendChild(elLogoImg);
elNav.appendChild(elList);
elNav.appendChild(login);

// =======================> header section end <========================


// ======================> intro section start <========================

let elIntro = document.querySelector(".intro-section");
console.log(elIntro);

let elContainerIntro = document.createElement("div");
elContainerIntro.classList.add("container");
elIntro.appendChild(elContainerIntro);




let wrapper = document.createElement("div");
wrapper.classList.add('wrapper');
elContainerIntro.appendChild(wrapper);


let text = document.createElement("h1");
text.classList.add("text");
text.textContent = "Work at the speed of thought";
wrapper.appendChild(text);


let textSecond = document.createElement("p");
textSecond.classList.add("text-second");
textSecond.textContent = "Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule."
wrapper.appendChild(textSecond);

let btnWrapper = document.createElement("div");
btnWrapper.classList.add("btn-wrapper");
wrapper.appendChild(btnWrapper);

let tryForFree = document.createElement("button");
tryForFree.classList.add("trybutton");
tryForFree.textContent = "Try For Free";
btnWrapper.appendChild(tryForFree);

let learnMore = document.createElement("button");
learnMore.classList.add("learnmore");
learnMore.textContent = "Learn More";
btnWrapper.appendChild(learnMore); 

let heroImg  = document.createElement("img");
heroImg.classList.add("hero-img");
heroImg.src = "./images/her0-img.png";
wrapper.appendChild(heroImg);
heroImg.style.marginTop = "100px"
// =======================> intro section end <========================





