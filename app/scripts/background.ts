import OnInputEnteredDisposition = browser.omnibox.OnInputEnteredDisposition;

browser.omnibox.onInputEntered.addListener(async (text: string, disposition: OnInputEnteredDisposition) => {
  const url = `https://nico.ms/${text}`;
  switch (disposition) {
    case "currentTab":
      await browser.tabs.update({url});
      break;
    case "newForegroundTab":
      await browser.tabs.create({url});
      break;
    case "newBackgroundTab":
      await browser.tabs.create({url, active: false});
      break;
  }
})
