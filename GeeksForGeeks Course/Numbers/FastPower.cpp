#include <iostream>

long long power(int n, int R)
{
    long mod = 1e9+7L;
    // Your code here
    long long res = 1;
    long long N = n;

    while (R)
    {
        if (R % 2)
        {
            res = (N * res) % mod;
            R--;
        }
        else
        {
            N = (N * N) % mod;
            R = R / 2;
        }
    }

    return res % mod;
}

int main() {
    std::cout << power(2, 100);
}