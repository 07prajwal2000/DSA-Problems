static void getClosestPerfectSquare(long n)
{
    if (n <= 2) {
        Console.WriteLine(n - 1);
        return;
    }
    var sq = Math.Round(Math.Sqrt(n));
    if (sq * sq == n) {
        sq--;
        Console.WriteLine(sq * sq);
        return;
    }
    Console.WriteLine(sq * sq);
}