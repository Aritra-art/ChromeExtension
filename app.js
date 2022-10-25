// const title = document.querySelector("title");
const profileBtn = document.querySelector("#check");
const outputText = document.querySelector(".outputText");

const userArray = [
  "https://www.linkedin.com/in/aritra-chowdhury-b95a66227/",
  "https://www.linkedin.com/in/siddhant-srivastava-bit/",
  "https://www.linkedin.com/in/sudipta-chakraborty-4a371a212/",
  "https://www.linkedin.com/in/vivekd0110/",
];

const profileEventHandler = () => {
  // chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  //   // returns tab list based on query. we want active tab
  //   let tab = tabs[0]; // only one tab in the tablist
  //   console.log(tab.title);
  //   outputText.textContent = tab.title;
  // });
  for (let i = 0; i < userArray.length; i++) {
    window.open(userArray[i], "_blank");
  }
};

check.addEventListener("click", profileEventHandler);
