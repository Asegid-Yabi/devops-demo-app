const os = require('os');
console.log("=== DevOps Demo App ===");
console.log("OS Platform:", os.platform());
console.log("CPU Count:", os.cpus().length);
console.log("Free Memo:", Math.round(os.freemem() / 1024 / 1024) + " MB");
