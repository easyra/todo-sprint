const server = require('./server.js');
const port = 7000;

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`Server running on port: ${port}`);
});
