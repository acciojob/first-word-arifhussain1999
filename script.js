function firstWord(str) {
  // your code here
	if (str.trim() === '' || !str.includes(' ')) {
    return str;
  }

  let result = '';
  let index = 0;

  // Iterate through characters until a space is encountered
  while (index < str.length && str[index] !== ' ') {
    result += str[index];
    index++;
  }

  return result;
}

// Do not change the code below

const str = prompt("Enter String:");
alert(firstWord(s));
