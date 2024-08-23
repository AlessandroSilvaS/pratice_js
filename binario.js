let numeroDigitado = 14

if(numeroDigitado === 1 || numeroDigitado === 0){
    console.log("0 e 1 tem suas representações binárias iguais as representações decimais.")
} else {
    let arrayOfModules = []
    arrayOfModules.unshift(numeroDigitado%2)
    let result = parseInt(numeroDigitado / 2)

    if(result !== 1 && result !== 0){
        while(result !== 1 && result !== 0){
            arrayOfModules.unshift(result%2)
            result = parseInt(result / 2)
        }
        arrayOfModules.unshift(result)
        console.log(`O número em binário é ${arrayOfModules.join('')}`)
    } else{
        arrayOfModules.unshift(result)
        console.log(`O número em binário é ${arrayOfModules.join('')}`)
    }
}
