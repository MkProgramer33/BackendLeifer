const mongoose = require("mongoose")
mongoose.set('strictQuery', true);

const DataBaseConnect = () => {
    const DB_URI = process.env.DB_URI;
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err, res) =>{
        if(!err)
            console.log("****Conexión correcta****")
        else
            console.log("***Error de conexión***")
    })
}

module.exports = DataBaseConnect