const fs = require('fs')

const myPromisse = new Promise((resolve, reject) => {
    fs.readFile('arquivo.txt', (err, data) => {
        if(err){
            reject(`Ocorreu um erro ao tentar ler o arquivo: ${err}`)
        } else{
            resolve(data)
        }
    })
})
myPromisse.then((dados) => {
    return String(dados)

}).then((stringModifi) => {
        console.log(stringModifi.toUpperCase())
    })

myPromisse.catch((err) => {
    console.log(err)
})

myPromisse.finally(() => (console.log("The promise finally here.")))
