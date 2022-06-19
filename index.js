function checkArray(collection) {
    let testArr = []
    if (!Array.isArray(collection)) {
        testArr = Object.values(collection)
        
    }
    else testArr = collection;
    return testArr
}

function myEach(collection, callback) {
    let arrayOne = checkArray(collection)
    arrayOne.forEach(element => {
        callback(element)
    })
    return collection
}


function myMap(collection, callback) {
    let value = []
    collection = checkArray(collection)
        for (const item of collection) {
            value.push(callback(item))
        }
        return value
    }


function myReduce(collection, callback, acc){
    collection = checkArray(collection)
    
    if (!acc) {
        acc = collection[0]-3
            collection.forEach(function (element) {
                acc = callback(acc, element, collection)
        
            })}
    else 
        collection.forEach(function (element) {
            acc = callback(acc, element, collection)
        })
                return acc
    }

    function myFind(collection, predicate) {
        let result = undefined
        collection = checkArray(collection)
        for (const element of collection) {
            if (predicate(element)) {
                result = element
                break
            }
        }
        return result
    }

    function myFilter(collection, predicate) {
        collection = checkArray(collection)
        let result = []
        for (const element of collection) {
            if(predicate(element)){
                result.push(element)
            }
        }
        return result
    }

    function mySize(collection) {
        collection = checkArray(collection)
        return collection.length
    }

    function myFirst(collection, n) {
        collection = checkArray(collection)
        let result = []
        if (n) {
            result = collection.slice(0, n)
        }
        else
       
        result = collection[0]
        return result
    }

    function myLast(collection, n) {
        collection = checkArray(collection)
        let result = []

        if (n) {
            result = collection.slice(collection.length-n)
        }
        else

        result = collection[collection.length-1]
        return result
    }

    function myKeys(obj) {
        return Object.keys(obj)
    }

    function myValues(obj) {
        return Object.values(obj)
    }