import sys
input = sys.stdin.readline

T = int(input())
dp = [{0: 1, 1: 0}, {0: 0, 1: 1}]
result = []
for i in range(T):
    N = int(input())
    if(len(dp) - 1 < N):
        for j in range(2, N+1):
            dp.append({0: dp[j-1][0] + dp[j-2][0],
                       1: dp[j-1][1] + dp[j-2][1]})

    result.append(str(dp[N][0]) + ' ' + str(dp[N][1]))
print("\n".join(result))
