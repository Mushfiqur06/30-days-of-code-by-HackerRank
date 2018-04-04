function Solution(){
  //Write your code here
    let stack = [];
    let queue = [];
    
    this.pushCharacter = function(n) {
        stack.push(n);
    }
    
    this.popCharacter = function() {
        return stack.pop();
    }
    
    this.enqueueCharacter = function(n) {
        queue.push(n);
    }
    
    this.dequeueCharacter = function() {
        return queue.shift();        
    }
}