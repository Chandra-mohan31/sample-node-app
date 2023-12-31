var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 3000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hey there!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running :" + app.get('port'))
})
