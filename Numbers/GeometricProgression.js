function termOfGP(A, B, N);
{
	if (N == 1) return A;
	let ratio = B / A;
	return A * Math.pow(ratio, N - 1);
}
