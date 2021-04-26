const providers = require('../models/providers');
const provider=require('../models/providers')

module.exports.list=function(req,res){
res.render('providers/provider-list',{ title: 'service-provider',providers:provider})
}

module.exports.details = function (req, res) {
    let id=req.params.id;
    let provide=provider.find(provide=>provide.id==id);

    res.render('providers/provider-details', { id : id, title: 'service-provider-details', hobby: provide.hobby })
}

module.exports.edit = function (req, res) {
    let id = req.params.id;
    let provide = provider.find(provide => provide.id == id);

    res.render('providers/provider-edit', { title: 'service-provider-edit', provider: provide })
}

module.exports.update = function (req, res) {
    let id = req.params.id;
    let provide = provider.find(provide => provide.id == id);
     
    provide.name=req.body.name;
    provide.age=req.body.age;
    provide.hobby.sport = req.body.sport;

    res.render('providers/provider-update', { title: 'service-provider-update', provider: provide })
}


module.exports.addform = function (req, res) {
    res.render('providers/provider-add-form', { title: 'service-provider-add-form' })
}

module.exports.add = function (req, res) {
    let min =100000;
    let max =999999;
    let id=Math.floor(Math.random()*(max-min)+min);
    let provide ={
    id: id,
    name : req.body.name,
    age : req.body.age,
    hobby:{sport:req.body.sport}
    }
    provider.push(provide);
    res.render('providers/provider-add', { title: 'service-provider-add'})
}

module.exports.delete = function (req, res) {
    let id = req.params.id;
    let provide = provider.find(provide => provide.id == id);
    let username=provide.name;
    let idx = providers.indexOf(provider.find(provide => provide.id == id));
    providers.splice(idx,1);

    res.render('providers/provider-delete', { title: 'service-provider-delete', name: username })
}