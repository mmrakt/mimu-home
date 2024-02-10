// import { tabs } from "./chrome";

const createNewTab = () => {
  // const url = chrome.runtime.getURL("new-tab.html");
  // chrome.tabs.create({ url });
};

const handleInstalled = (details: any) => {
  if (details.reason === "install") createNewTab();
  console.log(details);
};

// tabs.onCreated.addListener((tab) => {
//   console.log("here");
// });

chrome.action.onClicked.addListener(createNewTab);
chrome.runtime.onInstalled.addListener(handleInstalled);
