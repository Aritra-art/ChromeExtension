// const title = document.querySelector("title");
// const profileBtn = document.querySelector("#check");
// const outputText = document.querySelector(".outputText");

// const userArray = [
//   "https://www.linkedin.com/in/aritra-chowdhury-b95a66227/",
//   "https://www.linkedin.com/in/siddhant-srivastava-bit/",
//   "https://www.linkedin.com/in/sudipta-chakraborty-4a371a212/",
//   "https://www.linkedin.com/in/vivekd0110/",
// ];

// const profileEventHandler = () => {};
// chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//   // returns tab list based on query. we want active tab
//   let tab = tabs[0]; // only one tab in the tablist
//   console.log(tab.title);
//   outputText.textContent = tab.title;
// });
// for (let i = 0; i < userArray.length; i++) {
//   window.open(userArray[i], "_blank");
// }

// check.addEventListener("click", profileEventHandler);
const url = "https://www.linkedin.com/feed/";
const likeNum = document.querySelector("#like");
const commentNum = document.querySelector("#comment");
const count = document.querySelector("#count");
const clear = document.querySelector("#clear");
const formValue = document.querySelector(".userInput");

count.addEventListener("click", (e) => {
  e.preventDefault();
  window.open(url, "_blank");
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // returns tab list based on query. we want active tab
    let activeTab = tabs[0]; // only one tab in the tablist
    console.log(activeTab);
    chrome.tabs.sendMessage(activeTab.id, { likeNum: likeNum.value });
  });
});

formValue.addEventListener("input", () => {
  if (likeNum.value.length > 0 && commentNum.value.length > 0) {
    count.removeAttribute("disabled");
  } else {
    count.setAttribute("disabled", "disabled");
  }

  if (Number(likeNum.value) < 0) {
    likeNum.value = "";
  } // cannot put negative number

  if (Number(commentNum.value) < 0) {
    commentNum.value = "";
  } // cannot put negative number
});

clear.addEventListener("click", (e) => {
  e.preventDefault();
  likeNum.value = "";
  commentNum.value = "";
});
