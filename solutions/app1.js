/*## 1. feladat
- Fájl: `solutions/app1.js`
- Függvény neve: `removeDuplicatesFromArray`
- Export: a removeDuplicatesFromArray függvény legyen a default export!
- Írj egy függvénykifejezést, amely a paraméterként megadott tömbből eltávolítja a duplikált elemeket!
- A függvény visszatérési értéke a duplikált elemektől mentes új tömb./
*/

//const array = ['alma', 'barack', 'mogyoró', 'dió', 'dió', 'dió','alma', 'mogyoró', 'mogyoró', 'mogyoró', 'alma', 'alma', 'körte']

const removeDuplicatesFromArray = (array = []) => {
    let sortedObj = new Set(array)
    let sortedArray = Array.from(sortedObj)
    return sortedArray
}

//console.log(removeDuplicatesFromArray(array))

/*

const removeDuplicatesFromArray = (array = []) => {

for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
            if (array[i] === array[j]) {console.log(`I will remove this element: ${array[j]}`); array.splice(j); }
        }
    }
}

removeDuplicatesFromArray (array)
console.log (array)
*/

export default removeDuplicatesFromArray
