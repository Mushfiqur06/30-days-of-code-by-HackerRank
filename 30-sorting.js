function main() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
    // Write Your Code Here
   let swaps = 0;
    for (let i=n; i>0; i--) {
        let complete = true;
        for (let j=0; j<i; j++) {
            if (a[j] > a[j+1]) {
                [a[j], a[j + 1]] = [a[j + 1], a[j]]
                complete = false;
                swaps++;
            }
        }
        if(complete) break;
    }
    console.log("Array is sorted in " + swaps + " swaps.")
    console.log("First Element: " + a[0])
    console.log("Last Element: " + a[n-1])

}