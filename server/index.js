const server = require('./server.js');
const port = 6666;

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`Server running on port: ${port}`);
});
