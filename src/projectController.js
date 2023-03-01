export function projectController(changeToIndex) {
  let currentIndex = 0;

  if (changeToIndex === undefined) {
    currentIndex = 0;
  } else {
    currentIndex = changeToIndex;
  }

  console.log("Current active index", currentIndex);

  return currentIndex;
}
