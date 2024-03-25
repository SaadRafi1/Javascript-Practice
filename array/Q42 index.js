const uniqueElements = [];
for (let i = 0; i < arr2.length; i++) {
  let isUnique = true;
  for (let j = 0; j < arr1.length; j++) {
    if (arr2[i] === arr1[j]) {
      isUnique = false;
      break;
    }
  }
  if (isUnique) {
    uniqueElements.push(arr2[i]);
  }
}

console.log("Unique elements:", uniqueElements);
