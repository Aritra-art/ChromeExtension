const title = document.querySelector("title");
const nameBtn = document.querySelector("#check");
const outputText = document.querySelector(".outputText");
const clear = document.querySelector("#clear");

const nameEventHandler = () => {
  chrome.tabs.query(
    { active: true, currentWindow: true },
    function (
      tabs // returns tabs list based on query // we want active tab
    ) {
      let tab = tabs[0]; // only one tab in the tablist
      console.log(tab.title);
      outputText.textContent = tab.title;
    }
  );
};

nameBtn.addEventListener("click", nameEventHandler);
clear.addEventListener("click", () => {
  outputText.textContent = "";
});
