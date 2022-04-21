// exercice 1

const isKInArrayA = (array, k) => {
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

// exercice 3 --> UN SEUL PASSAGE SUR LA LISTE ??? --> complexité O(n²) ? array.indexOf parse array ?

const isKInArrayB = (array, k) => {
    result = false
    array.map(number => {
        if (array.indexOf(k - number) !== -1) {
            result =  true
        }
    })
    return result
}

// exercice 3 again --> Complexité moins forte, récursif. TOujours +/- O(n²)

const isKInArrayC = (array, k, i = 0) => {
    if (i === array.length) {
        return false
    }
    for (let j = i; j < array.length; j++) {
        if (array[i] + array[j] === k) {
            return true
        }
    }
    return (isKInArrayC(array, k, i + 1))
}

// exercice 2 --> complexité un peu moins que O(n²) --> Boucles imbriqués

const skyscraperA = (array) => {
    let result = 0
    let indexMax = 0
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
// exercice 4 --> UN SEUL PASSAGE SUR LA LISTE ?? complexité < O(n) ? --> Exercice 6 ? Un seul passage

const skyscraperB = (array) => {
    let result = 1
    let last = array.length - 1
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[last] < array[i]) {
            result++
            last = i
        }
    }
    return result
}