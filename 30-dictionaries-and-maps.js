var n = parseInt(readLine());

    pbookname = [];
    pbooknums = [];
    query = [];
    
    for (i=0; i<n; i++) {
         pbook = [];
         pbook = readLine().split(' ');
         pbookname.push(pbook[0])
         pbooknums.push(pbook[1]);  
    }
    
    for (j=i; j<n*2; j++) {
        if (readLine != "") {
            query = readLine(); 
            pos = pbookname.indexOf(query);
            if (pos < 0) {
                console.log("Not found");
            } else {
                console.log(query +"="+ pbooknums[pos]);
            }
        } else {
            break;
        }
    }
    
    console.log("Names " + pbookname);
    console.log("Numbers " + pbooknums);
    console.log("Queries " + query);