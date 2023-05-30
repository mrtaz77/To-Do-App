var data = [{item :'get rsa key'},{item:'dogbolt decompiler'},{item:'rev ghidra'}]

module.exports = function(app){
    app.get('/todo', function(req, res){
        res.render('todo',{todos:data});
    });

    app.post('/todo', function(req, res){
    });

    app.delete('/todo', function(req, res){
    });
}