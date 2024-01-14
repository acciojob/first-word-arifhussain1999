function firstWord(s) {
  // your code here
	let str ='';
	let idx=0;
	while (idx < s.length && s[idx] !==' ') {
		str+=s[idx];
		idx++;
	}
	return str;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
