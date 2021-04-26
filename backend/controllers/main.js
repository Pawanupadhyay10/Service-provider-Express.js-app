// Home/Main controller

module.exports.home=function(req,res){
    res.render('index', { title: 'Express' });
}

module.exports.about = function (req, res) {
    res.render('about', { title: 'About' });
}

module.exports.contact = function (req, res) {
    res.render('contact', { title: 'contact' });
}

module.exports.login = function (req, res) {
    res.render('login', { title: 'login' });
}

module.exports.registor = function (req, res) {
    res.render('registor', { title: 'registor' });
}


