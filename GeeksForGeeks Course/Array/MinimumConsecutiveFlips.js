
/**
 * Returns the start and end (INCLUSIVE) indexes of array to be flipped.
 * @param {number[]} arr
 * @returns
 */
var flipGroup = (arr) => {
	const n = arr.length;
  let zeroGrp = 0;
  let oneGrp = 0;

	for (let i = 0; i < n; i++) {
    if (arr[i] == 1) {
      oneGrp++;
    } else {
      zeroGrp++;
    }
  }
  if (zeroGrp == 0 || oneGrp == 0) {
    console.log("groups are flipped");
    return;
  } else if (zeroGrp > oneGrp) {
    console.log("One groups are need to flip bcz of less modification is needed");
  } else if (oneGrp > zeroGrp) {
    console.log("Zero groups are need to flip bcz of less modification is needed");
  } else {
    console.log("Any number of grp can be flipped.bcz both grp count is equal");
  }
};

flipGroup([0, 0, 1, 1, 0, 0, 1, 1, 0]);