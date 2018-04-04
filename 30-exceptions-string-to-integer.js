const n = () => { throw new Error(); }
    
try {
    const N = parseInt(S);

	(!N || isNaN(N)) && t();

	console.log(N);
} catch (e) {
	console.log("Bad String");
}