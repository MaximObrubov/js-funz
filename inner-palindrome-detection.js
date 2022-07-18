function longest_palindrome(s) {
  const slen = s.length;
  
  const isPalindrome = (_i, len) => {
    let lim = (_i + len) >> 1;
    
    for (let i = 0; i < lim; i++) {
      const start = i + _i;
      const end = len + _i - i - 1;
      
      if (s[start] !== s[end]) return false;
    }

    return true;
  };
  
  const len = s.length;
  let palindromeLength = s.length;
  let max = "";
  
  while (palindromeLength > max.length) {
    let range = len - palindromeLength;
    
    for (let i = 0; i <= range; i++) {
      if (isPalindrome(i, palindromeLength) && max.length < palindromeLength) {
        max = s.substr(i, palindromeLength);
      };
    }
    palindromeLength--;
  }
  
  return max;
}
