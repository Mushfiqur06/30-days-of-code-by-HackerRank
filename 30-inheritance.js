
function calculate() {
    var sum = this.scores.reduce(function(sum, num) 
    { 
        return sum + num;
    });
    
    var score = Math.ceil(sum / this.scores.length);
    var letter = "";
    if (90 <= score && score <= 100)
        letter = "O";
    else if (80 <= score && score < 90)
        letter = "E";
    else if (70 <= score && score < 80)
        letter = "A";
    else if (55 <= score && score < 70)
        letter = "P";
    else if (40 <= score && score < 55)
        letter = "D";
    else if (score < 40)
        letter = "T"
    
    return letter;
}