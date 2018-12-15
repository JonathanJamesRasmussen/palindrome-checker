function palindrome(str) {
    str = str.replace(/[^a-zA-Z0-9]/gm, '').toLowerCase();
    let strArray = str.split('');
    let reverseArray = strArray.reverse();
    let reverseString = reverseArray.join('');
    console.log(reverseString);
    return str == reverseString;
}

// Example: palindrome('Eye'); returns true