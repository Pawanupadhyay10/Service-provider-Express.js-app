const providers = require('../models/providerss');
const provid = require('../db/db');
const { ObjectId } = require('mongodb');

//util functions
function isEmptyList(obj) {
    return (!obj || obj.lenght == 0 || Object.keys(obj).length == 0);
}
// function existprovider(id) {
//     return providers.find(provide => provide.id == id);
// }
// function getuniqueId(providers) {
//     let min = 100000;
//     let max = 999999;
//     do {
//         var id = Math.floor(Math.random() * (max - min) + min);
//     } while (existprovider(id));
//     return id;
// }
function errorhandles(res, error) {
    res.status(200);
    res.send(error);
}

module.exports.create = function (req, res) {
    try {
        // if (isEmptyList(providers)) {
        //     providers = [];
        // }
        // var id = req.body.id;
        // if (existprovider(id)) {
        //     res.status(400);
        //     res.send("Duplicate not allowed");
        //     id = getuniqueId();
        // }
        var provider = req.body;
        // provider.id = id;
        // let provide = {
        //     id: id,
        //     name: req.body.name,
        //     age: req.body.age,
        //     hobby: { sport: req.body.hobby.sport }
        // }
        // provider.push(provide);
        provider.create(provider)
            .then(result => {
                res.status(200);
                res.send(provider);
            })
            .catch(error.errorhandles(res, error));
    }
    catch (error) {
        errorhandles(res, error);
    }
}

module.exports.Readall = function (req, res) {
    try {
        provid.find()
            .then(resulit => {
                if (isEmptyList(providers)) {
                    res.status(404);
                    res.send("EMPTY");
                }
                res.status(200);
                res.send(providers);
            })
            .catch(error => errorhandles(res, error))
    }
    catch (error) {
        errorhandles(res, error);
    }
}
module.exports.ReadOne = function (req, res) {
    try {
        let id = ObjectId(req.params.id);
        provid.find({ '_id': id })
            .then(result => {
                if (isEmptyList(providers)) {
                    res.status(404);
                    res.send("EMPTY");
                }
                // let provide = provider.find(provide => provide.id == id);
                res.status(200);
                res.send(provide);
            })
            .catch(error => errorhandles(res, error))
    } catch (error) {
        errorhandles(res, error);
    }
}
module.exports.update = function (req, res) {
    try {
        let id = ObjectId(req.params.id);
        // let provide = provider.find(provide => provide.id == id);
        let provide = req.body;
        provide.findOneAndUpdate({ '_id': id }, provide, { new: true })
            .then(result => {
                if (isEmptyList(result)) {
                    res.status(404);
                    res.send("EMPTY can't update");
                }

                // provide.name = req.body.name;
                // provide.age = req.body.age;
                // provide.hobby.sport = req.body.hobby.sport;

                // providers.push(provide);
                res.status(200);
                res.send(result);
            })
            .catch(error => errorhandles(res, error))

    } catch (error) {
        errorhandles(res, error);
    }
}

module.exports.deleteOne = function (req, res) {
    try {
        let id = ObecjId(req.params.id);
        // let provide = provider.find(provide => provide.id == id);
        // let idx = providers.indexOf(provider.find(provide => provide.id == id));
        // providers.splice(idx, 1);
        provide.findOneAndDelete()
            .then(result => {
                if (isEmptyList(providers)) {
                    res.status(400);
                    res.send("one delete");
                }
                res.status(200);
                res.send(provide);
            })
            .catch(error => errorhandles(res, error));

    } catch (error) {
        errorhandles(res, error);
    }
}

module.exports.deleteAll = function (req, res) {
    try{
        provid.deleteMany({})
        .then(reult=>{
            if (isEmptyList(reult.deletedCount===0)) {
                res.status(400);
                res.send("one delete");
            }
            res.status(200);
            res.send(reult);
        })
        .catch(error => errorhandles(res, error));
    } catch (error) {
        errorhandles(res, error);
    }
}