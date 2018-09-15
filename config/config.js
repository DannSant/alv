//===============
// ENTORNO
//==============
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

//=========================
//PUERTO BACKEND
//=======================
process.env.PORT = process.env.PORT || 3000;

//===============
// DB
//===============
let urlDB = "";

if (process.env.NODE_ENV == "dev") {
    urlDB = 'mongodb://localhost:27017/apocDB';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.urlDB = urlDB;