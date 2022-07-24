const express = require('express');

const port = 4500
const app = express();

app.use(function(req, res, next) {
  let data = '';
  req.setEncoding('utf8');
  req.on('data', function(chunk) {
    data += chunk;
  });

  req.on('end', function() {
    req.body = data;
    next();
  });
});

app.all('**', (req, res) => {
  let auth;
  if (req.headers['authorization']) {
    const p = req.headers['authorization'].split(/\s+/);
    auth = Buffer.from(p[1], 'base64').toString('utf8');
  }
  console.dir({
    auth: auth,
    method: req.method,
    path: req.path,
    headers: req.headers,
    body: req.body,
  });
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`httpsink/1.0 listening on port ${port}`);
});
