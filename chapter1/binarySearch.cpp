//분할정복

#include <iostream>
#include <array>

using namespace std;

int location(int high, int low, array<int,13> arr){
    int mid = (high + low) / 2;
    if(arr[mid] == 18){
        return mid;
    }
    else if(arr[mid] > 18){
        return location(high , mid + 1, arr);
    }
    else{
        return location(mid - 1, low, arr);
    }
}

int main(){
    array<int,13>arr = {10, 12, 13, 14, 15, 18, 25, 27, 30, 35, 40, 45, 47};
    int num;
    int answer;
    answer = location(0, arr.size(), arr);
    cout << "ans is " << answer;
    return 0;
    
}