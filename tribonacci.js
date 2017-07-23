const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

rl.question('Law of Tribonacci: ', (a) => {
	function tribonacci(n) {
		if (n == 1) {
			return 1
		} else if (n == 2) {
			return 1
		} else if (n == 3) {
			return 2
		} else {
			return tribonacci(n-1) + tribonacci(n-2) + tribonacci(n-3)
		}
	}
	console.log(tribonacci(a));
	rl.close();
});

       