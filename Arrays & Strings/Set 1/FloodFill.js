/**
 * @param {number[][]} image
 * @param {number} x
 * @param {number} y
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, x, y, color) {
  if (image[x][y] == color) return image;
	image = fill(image, x, y, image[x][y], color);
	return image;
};

var fill = (arr, x, y, color, newColor) => {
  if (x >= arr.length || x < 0 || y >= arr[0].length || y < 0 || arr[x][y] != color) return arr;
  arr[x][y] = newColor;
  fill(arr, x + 1, y, color, newColor);
  fill(arr, x - 1, y, color, newColor);
  fill(arr, x, y + 1, color, newColor);
  fill(arr, x, y - 1, color, newColor);
  return arr;
};

console.log(
	floodFill(
		[
			[0, 0],
			[0, 0],
		],
		0,
		0,
		0
	)
);
