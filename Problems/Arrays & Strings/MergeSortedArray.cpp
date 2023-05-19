#include<vector>
#include <bits/stdc++.h>

using namespace std;

void mergeSortedArrays(vector<long long> &a, vector<long long> &b) {
	long long n = a.size(), m = b.size();
	long long i = n - 1, j = 0;
	while (i >= 0 && j < m) {
		if (a[i] > b[j]) {
			swap(a[i], b[j]);
			i--;
			j++;
		} else {
			break;
		}
	}
	sort(a.begin(), a.end());
	sort(b.begin(), b.end());
}
