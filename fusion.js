const fs = require('fs')

const dataFile = process.argv[2]

class Data {
    constructor (dataList) {
        this.strArray = dataList
        this.array = dataList.map(data => data = Number(data))
    }
    isOnlyNumbers = (array = this.strArray) => {
        let indexes = ""
        let result = true
        if (array === "") {
            console.error("Empty file")
            return (false)
        }
        this.array.map(data => {
            if (isNaN(Number(data))) {
                result = false
                indexes += "," + String(array.indexOf(data))
            }
        })
        if (result === false) {
            console.error("La donnée n'est pas un chiffre à l'index " + indexes)
        }
        return (result)
    }
    merge = (arrayL, arrayR) => {

    }
    mergeSort = (array) => {
        this.merge(arrayL, arrayR) 
    }
}

const sortArray = () => {
    fs.readFile(dataFile, 'utf8', (error, data) => {
    if (error) {
        console.error(error.message)
        return
    }
    myDatas = new Data(data.split(/\s+/))
    })
}

//MERGE SORT
function MERGEfunction(array, l, r, m) {
    let tmp = array
    let i = l
    let j = m + 1
    let k = l
    console.log(`MERGE left : ${l}, right : ${r}, middle : ${m}`)
    while (i <= m && j <= r) {
        if (tmp[i] < tmp[j]) {
            array[k] = tmp[i]
            i++
        } else if (tmp[j] < tmp[i]) {
            array[k] = tmp[j]
            j++
        }
        k++
    }
    while (i <= m) {
        array[k] = tmp[i]
        i++
        k++
    }
    while (j <= r) {
        array[k] = tmp[j]
        j++
        k++
    }
}

function FUNCTION(array, l, r) {
    if (l >= r) {
        return;
    }
    middle = Math.floor((l + r) / 2)
    FUNCTION(array, l, middle)
    FUNCTION(array, middle + 1, r)
    MERGEfunction(array, l, r, middle)
}

array = [0, 4, 2, 3, 7, 6, 8]
FUNCTION(array, 0, 6)
console.log(array)