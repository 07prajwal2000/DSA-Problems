/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
	const set = new Set();
	emails.forEach((x) => {
		let mail = "";
    let foundAt = false;
		
		for (let i = 0; i < x.length; i++) {
      let c = x[i];
			if (!foundAt && x[i] !== '@' && (x[i] === "." || x[i] === "+") ) {
        if (x[i] === '+') {
          while (x[i] !== '@') {
            i++;
          }
          i--;
          foundAt = true;
        }
				continue;
			} else if (c === '@') foundAt = true;
			mail += x[i];
		}
		set.add(mail);
	});
	return set.size;
};

console.log(
  numUniqueEmails(["test.email+alex@leetcode.com", "test.email@leetcode.com"])
);
console.log(
	numUniqueEmails([
		"test.email+alex@leetcode.com",
		"test.e.mail+bob.cathy@leetcode.com",
		"testemail+david@lee.tcode.com",
	])
);
console.log(
	numUniqueEmails(["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"])
);
