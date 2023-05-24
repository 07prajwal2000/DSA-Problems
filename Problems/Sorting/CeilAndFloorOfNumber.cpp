#include <iostream>

using namespace std;

pair<int, int> getFloorAndCeil(int arr[], int n, int x) {
  int floor = -1, ceil = -1;
  
  for (int i = 0; i < n; i++) {
      if (arr[i] <= x) {
          floor = max(floor, arr[i]);
      }
      if (arr[i] >= x) {
          if (ceil == -1) ceil = arr[i];
          else ceil = min(arr[i], ceil);
      }
  }
  return { floor, ceil };
}