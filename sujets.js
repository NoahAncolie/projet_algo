// exercice 1

const isKInArray = (array, k) => {
    let result = false
    array.map(number => {
        array.map(number2 => {
            if (number + number2 === k) {
                result = true
            }
        })
    })
    return (result)
}

//exercice 2

const skyscraperA = (array) => {
    let result = 0
    let indexMax = 0
    let indexMin = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= array[indexMax]) {
            indexMax = i
            for (let j = i + 1; j < array.length; j++) {
                
            }
        }
    }
    return (result)
}

console.log(skyscraperA([4,1,2,3]))