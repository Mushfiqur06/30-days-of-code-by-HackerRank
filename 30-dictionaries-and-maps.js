function processData(input) {
    input = input.split('\n')
    var N = parseInt(input[0])

    var phonebook = []
    for (var k = 0; k< N; k++){
        var line = input[k+1]
        line = line.split(' ')
        phonebook[line[0]] = line[1]
    }

    for (var k = N+1; k < input.length; k++ ){
        var num = (phonebook[input[k]])
        if (num !== undefined){
            console.log(input[k]+'='+num)
        } else {
            console.log('Not found')
        }
    }

} 