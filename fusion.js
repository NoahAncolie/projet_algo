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
}

class MergeSort {
    constructor(array) {
        this.sorted = this.split(array)
    }
    split = (array) => {
        if (array.length === 1) {
            return (array)
        }
        return (this.merge(this.split(array.splice(0, Math.floor(array.length / 2))), this.split(array)))
    }
    merge = (arrayA, arrayB) => {
        let tmp = []
        while (arrayA.length && arrayB.length) {
            if (arrayA[0] < arrayB[0]) {
                tmp.push(arrayA.shift())
            } else {
                tmp.push(arrayB.shift())
            }
        }
        return ([].concat(tmp, arrayA, arrayB))
    }
}

const execute = (dataFile = process.argv[2]) => {
    fs.readFile(dataFile, 'utf8', (error, data) => {
    if (error) {
        console.error(error.message)
        return
    }
    myDatas = new Data(data.split(/\s+/))
    if (myDatas.isOnlyNumbers()) {
        let merge = new MergeSort(myDatas.array)
        console.log("L'array rangé est ===> " + merge.sorted)
    }
})
}

if (!dataFile) {
    console.log("Need to enter a file name")
} else {
    execute()
}
