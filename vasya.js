const sh = console.log.bind(console);
sh('vasya.js');
const arr = [];
for (let i = 0; i < 5; i++) {
	(x => arr.push(x))(i);
}
sh(arr[2]);
console.log('vasya.js');
for (let i = 0; i < 5; i++) {
	console.log(i);
}

console.log('initial commit');
