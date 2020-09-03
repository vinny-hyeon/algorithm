#include <stdio.h>
#include <iostream>
#include <algorithm>
using namespace std;


int n, quick[10000000] = { 5,1,6,3,4,2,7 };

void quickSort(int low, int high) {
    if (low > high) {
        return;
    }
    int left = low;
    int right = high;
    int pivot = quick[(low + high) / 2];

    while (left <= right) {
        while (quick[left] < pivot) left++;
        while (quick[right] > pivot) right--;
        if (left <= right) {
            swap(quick[left], quick[right]);
            left++, right--;
        }
    }
    quickSort(low, right);
    quickSort(right, high);

}

int main(void) {

    n = 7;
    quickSort(0, n - 1);

    for (int i = 0; i < n; i++) {
        printf("%d\n", quick[i]);
    }
}
