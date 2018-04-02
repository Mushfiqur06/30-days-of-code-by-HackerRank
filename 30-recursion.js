function factorial(n) {
    // Complete this function
    if(n==1){
        return n;
    }
    else {
        return n * factorial(n-1)
    }
}