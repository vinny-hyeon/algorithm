#include <iostream>
#include <stdio.h>

int main()
{
	int A[100][100] = { 0, };
	for (int i = 1; i < 5; i++) {
		for (int j = 0; j <= i; j++) {
			if (i == j || j == 0) {
				A[i][j] = 1;
			}
			else {
				A[i][j] = A[i - 1][j - 1] + A[i - 1][j];
			}
		}
	}

	printf("%d", A[4][2]);
}

