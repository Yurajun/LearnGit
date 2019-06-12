const sh = console.log.bind(console);
sh('vasya.js');
for (let i = 0; i < 5; i++) {
	(x => sh(x)).bind(null, i)();
}
console.log('vasya.js');
for (let i = 0; i < 5; i++) {
	console.log(i);
}
