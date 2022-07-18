// NOTE: my ugly solution
function longest_palindrome(s) {
  const isPalindrome = (left, right) => {
    while(left < right) {
      if (s[left] !== s[right]) return false;
      left++;
      right--;
    }
    return true;
  };
  
  
  
  
  const len = s.length;
  let palindromeLength = s.length;
  let [left, right] = [0, 0];
  
  while (palindromeLength > right - left) {
    let range = len - palindromeLength;
    
    for (let i = 0; i <= range; i++) {
      if (isPalindrome(i, i + palindromeLength - 1)) {
        const [l, r] = [i, i + palindromeLength - 1];
        if (r - l > right - left) [left, right] = [l, r]
      }
    }
    palindromeLength--;
  }
    
  return s.substring(left, right + 1);
}


// NOTE: solution we made together with pro :D (he made actually and I agreed)
function longest_palindrome(s) {
  
  let left = 0;
  let right = 0;
  
  for (let i = 0; i < s.length; i++) {
    for (let j of [i, i + 1]) {
      for (let l = i, r = j; s[l] && s[l] === s[r]; l--, r++) {
        [left, right] = (r - l + 1) > (right - left + 1) ? [l, r] : [left, right];
      }
    }
  }
  
  return s.substring(left, right + 1);
}
