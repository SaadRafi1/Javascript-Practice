function checkPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  if (str.length <= 1) {
    return true;
  }

  if (str[0] === str[str.length - 1]) {
    return checkPalindrome(str.substring(1, str.length - 1));
  } else {
    return false;
  }
}

console.log(checkPalindrome("guy,  plane,  canal - Panama"));
console.log(checkPalindrome("racecar"));
console.log(checkPalindrome("hello"));
