//let User = require('../models/userModel');
//let Frm = require('../models/userModel');

//let userList = [];
//let JAVA = new Frm('JAVA', '200', '06-12-2021', '7-12-2021')
//let HTMLCSS =  new Frm('HTML CSS', '150', '19-12-2021', '20-12-2021')
//let Nodejs =  new Frm('Node Js', '250', '09-12-2021', '11-12-2021')



//let Formation = [JAVA, HTMLCSS, Nodejs]

let Liste = ["Poire", "Banane"];
let chiffre = ["10", "3"]
let barre = ["0", "0"]


exports.articleList = function(req, res){
    res.render('tacheList.ejs', {Liste:Liste, chiffre:chiffre,barre:barre});
    };


exports.articleAdd = function(req, res){
    res.render('tacheadd.ejs');
}


exports.articleNew = function(req, res){
        Liste.push(req.body.article);
        console.log (Liste,chiffre,barre)
        chiffre.push(req.body.nombre);
        barre.push("0")
        texte = "ajout réussi";
        res.redirect('/');
    };

exports.articledelete = function (req, res) { // ici
    Liste.splice(req.params.index, 1);
    chiffre.splice(req.params.index, 1);
    barre.splice(req.params.index, 1);
    res.redirect("/");
    };
exports.articleachete = function (req, res) { // ici
        barre[req.params.index] = "1";
        console.log (Liste,chiffre,barre)
        res.redirect("/");
        };