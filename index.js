

var ddb = require('dynamodb').ddb(require('./config'));



ddb.listTables({}, function(err, res)
    {
        if(err) { console.log(err); }

        console.log(res);
    });


console.log('test');