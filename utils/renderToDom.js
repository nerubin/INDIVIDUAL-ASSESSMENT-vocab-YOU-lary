const renderToDom = (divId, content) => {
  const selectedDiv = document.querySelector(divId);

  if (selectedDiv) {
    selectedDiv.innerHTML = content; // ✅ Only sets if element exists
  } else {
    console.error(`❌ renderToDom Error: Element ${divId} not found!`);
  }
};

export default renderToDom;
