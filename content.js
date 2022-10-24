const userName = document.querySelector("h1");
const about = document.getElementsByClassName("text-body-medium break-words");
const address = document.getElementsByClassName(
  "text-body-small inline t-black--light break-words"
);

// const moreInfoOne = document.getElementsByClassName(
//   "inline-show-more-text inline-show-more-text--is-collapsed inline-show-more-text--is-collapsed-with-line-clamp inline"
// );
// const moreInfoTwo = document.getElementsByClassName(
//   "pv-contact-info__contact-link link-without-visited-state t-14"
// );

console.log("User Name: " + userName.innerText.toUpperCase());
console.log("");
console.log("--------USER INFORMATION----------");
console.log(about[0].innerText);
console.log(address[0].innerText);
// console.log(moreInfoOne[0].innerText);
console.log("");
// console.log("Contact Info");
// console.log(moreInfoTwo[0].innerText);
// console.log(moreInfoTwo[1].innerText);
