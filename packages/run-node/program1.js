var Os = require('os');

process.send('Operation System detail:');
process.send('Platform: ' + Os.platform());
process.send('Architecture: ' + Os.arch());
process.send('Home dir: ' + Os.homedir());
process.send('Temp dir: ' + Os.tmpdir());