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
            result = 0
        }
        if (array[i + 1] < array[i]) {
            result++
        } else if (array[i + 1] > array[i]) {
            j = i;
            while (array[j] <= array[i]) {
                if (array[j] > array[j + 1]) {
                    result--
                }
                j--
            }
        }
    }
    return (result)
}

console.log(skyscraperA([4,2,1,2,3,0,3,1,1,2,1,0,0,0,0]))