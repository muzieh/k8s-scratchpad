const dns = require('dns');

console.log('dns tool');
dns.lookup('hello-svc', (err, address) => {
  console.log(address); // prints "93.184.216.34"
});
