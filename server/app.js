const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser());
app.use(require('cors')())
app.use(express.json())
app.use('/uploads',express.static(__dirname + '/uploads'))


require('./db/db')(app);
require('./route/admin')(app);
require('./route/web')(app);

app.listen(3000, () => {
  console.log('http://localhost:3000');
});