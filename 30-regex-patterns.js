function main() {
    var N = parseInt(readLine());
    var names = []
    for(var a0 = 0; a0 < N; a0++){
        var firstName_temp = readLine().split(' ');
        var firstName = firstName_temp[0];
        var emailID = firstName_temp[1];
        if(emailID.match(/@gmail\.com$/)) {
            names.push(firstName)
        }
    }
    names.sort().forEach(firstName =>   console.log(firstName))
}