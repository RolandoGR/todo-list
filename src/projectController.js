export function projectController(selectedIndex) {
  let currentIndex = selectedIndex === undefined ? 0 : selectedIndex;
  console.log("Current active index", currentIndex);

  function changeCurrent(newIndex) {
    currentIndex = newIndex;
  }
  return currentIndex;
}
