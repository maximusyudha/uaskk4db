const mongoose = require('mongoose')

const mongoDB = async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/praktikum-kk4')
    console.log('DB Connected')
}

module.exports = mongoDB