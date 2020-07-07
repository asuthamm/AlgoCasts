// freecodecamp

function rangeOfNumbers(startNum, endNum) {
  console.log(endNum);
  if (endNum < startNum) {
    console.log(endNum, "[]");
    return [];
  } else {
    const rangeArr = rangeOfNumbers(startNum, endNum - 1);
    rangeArr.push(endNum);
    console.log(endNum, rangeArr);
    return rangeArr;
  }
}
