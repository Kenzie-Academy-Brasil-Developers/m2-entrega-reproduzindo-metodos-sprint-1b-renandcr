// forEach()
function newForEach(array, callback){
    for(let i = 0; i < array.length; i++){
        callback(array[i], i, array)
    }
}
// newForEach(myVetor, soma)

/////////////////////////////////////////////////////////
// newMaps
function newMap(array, callback){
    let newArray = []
    for(let i = 0; i < array.length; i++){
        let testing = callback(array[i], i, array)
        newArray.push(testing)        
    }
    return newArray
}
// console.log(newMap(myVetor3, soma))

/////////////////////////////////////////////////////////
// newFilter
function newFilter(array, callback){
    let newArray = []
    for(let i = 0; i < array.length; i++){
        const testing = callback(array[i], i, array)
        if(testing === true){
            newArray.push(array[i])
        } else{
            newArray.push()
        }
    }
    return newArray
}
// console.log(newFilter(myVetor, soma))

/////////////////////////////////////////////////////////
// newFind
function newFind(array, callback){
    let result = 0
    for(let i = 0; i < array.length; i++){
        let testing = callback(array[i], i, array)
        if(testing === true){
            result = array[i]
            break
        } else{
            result = undefined
        }
    }
    return result
}
// console.log(newFind(myVetor, soma))

////////////////////////////////////////////////////////
//newFindIndex
function newFindIndex(array, callback){
    let result = 0
    for(let i = 0; i < array.length; i++){
        let testing = callback(array[i], i, array)
        if(testing === true){
            result = i
            break
        } else{
            result = -1
        }
    }
    return result
}
// console.log(newFindIndex(myVetor, soma))

///////////////////////////////////////////////////////
// newReduce
const vetor4 = [2,4,6,8,9,2,4]
function newReduce(array, callback){
    let acc = 0
        for (let i = 0; i < array.length; i++){
            acc = callback(acc, array[i], i, array)   
        }

    return acc       
}

// console.log(newReduce(vetor4, function(acc, valorAtual){
//     return  acc + valorAtual
// }))

/////////////////////////////////////////////////////////
// newSome
function newSome(array, callback){
    let result = 0
    for (let i = 0; i < array.length; i++) {
        let testing = callback(array[i], i, array)
        if(testing === true){
            result = true
            break
        } else{
            result = false
        }
    }
    return result
}
// console.log(newSome(myVetor5, teste))

////////////////////////////////////////////////////////
// newEvery
function newEvery(array, callback){
    let result = 0
    for (let i = 0; i < array.length; i++) {
        const testing = callback(array[i], i, array)
        if(testing === false){
            result = false
            break
        } else{
            result = true
        }
    }
    return result
}
// console.log(newEvery(myVetor, testando)) 

///////////////////////////////////////////////////////
// newFill



//////////////////////////////////////////////////////
// newIncludes
function newIncludes(array, searchElement, fromIndex){
    let result = 0
    if(fromIndex !== undefined){
        for(let i = array[fromIndex]; fromIndex < array.length; fromIndex++){
            if(array[fromIndex] === searchElement){
                result = true
                break
            } else{
                result = false
            }
        }
    } else{
        for (let i = 0; i < array.length; i++) {
            if(array[i] === searchElement){
                result = true
                break
            } else{
                result = false
            }
        }
    }

    return result
}
// console.log(newIncludes(myVetor, "5"))
    
/////////////////////////////////////////////////////
// newIndexOf
function newIndexOf(array, searchElement, initialIndex){
    let result = -1
    if(initialIndex >= array.length || initialIndex < 0){
        result = -1
    } else {
        if(initialIndex === undefined){
            for (let i = 0; i < array.length; i++) {
               if( array[i] === searchElement){
                   result = i
                   break
               } 
            }
        }
        if(initialIndex !== undefined){
            for (let i = initialIndex; i < array.length ; i++) {
                if(array[i] === searchElement){
                    result = i
                    break
                }
            }
        }
    }

    
    return result
}
// console.log(newIndexOf(myVetor10, 9))

//////////////////////////////////////////////////
// newConcat

let myVetor2 = ["Steve", "Elon", "Bill", "Jeff"]
let myVetor10 = [20,10,50,5,7,90]

function newConcat(...arguments){
    let newArray = []
    for (let i = 0; i < arguments.length; i++) {
    
        newArray.push(...arguments[i])
    }
    return newArray
    
}
// console.log(newConcat(myVetor10, myVetor2, "rrrrrr"))

//////////////////////////////////////////////////////////////////
// newJoin
function newJoin(array, aspas){
    let result = ""
    if(aspas !== undefined){
        for (let i = 0; i < array.length; i++) {  
            if(i === array.length -1){
                result += array[i]
            } else{
                result += array[i] + aspas
            }
        }
    }
    if(aspas === undefined){
        for (let i = 0; i < array.length; i++) {
            if(i === array.length -1){
                result += array[i]
            } else{
                result += array[i] + ","
            }
        }
    }
    return result 
            
}
// console.log(newJoin(myVetor3))
    
            









