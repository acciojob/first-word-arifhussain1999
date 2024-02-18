function firstWord(str) {
  // your code here
	str = str.trim();
	 if (!str || str.indexOf(' ') === -1) {
        return str;
    } else {
        // Find the index of the first space
        const spaceIndex = str.indexOf(' ');
        // Return the substring from the beginning to the first space
        return str.substring(0, spaceIndex);
    }
}

// Do not change the code below

 const s = prompt("Enter String:");
alert(firstWord(s));
