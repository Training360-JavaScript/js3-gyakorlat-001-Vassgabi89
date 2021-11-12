/*
## 2. feladat
- Fájl: `solutions/app2.js`
- Objektum neve: `HU`
- Export: a HU objektum legyen a default export!
- Készíts egy `HU` nevű objektumot, amelynek az alábbi property-jei vannak:
- `date()`: Visszaadja a paraméterként megadott dátumot a magyar dátumírás szabályainak megfelelően.
- `currency()`: Visszaadja a paraméterként megadott számot a magyar pénzformátumnak megfelelően a Ft végződéssel együtt.
- `list()`: A paraméterként kapott string tömböt visszaadja az alábbi formában: "első, második és harmadik" (tehát vesszővel elválasztva, az utolsó elem előtt az "és" szóval).*/

let HU = {
    date(date) {return new Intl.DateTimeFormat('hu-HU').format(date)},
    curreny(currency) {return new Intl.NumberFormat('hu-HU', {
        style: 'currency',
        currency: 'HUF'
    }).format(currency)},
    list(array=[]) {return new Intl.ListFormat('hu-HU', {
        style: 'long',
        type: 'conjunction'
    }).format(array)
        /*
        list = ''
        for (i=0; i < array.length; i++) {
            if (i === array.length-1) {list += ` és ${array[i]}`}
                else {
                    if (i === array.length-2) {list += `${array[i]}`}
                        else {list += `${array[i]}, `}
                }
                return list*/
    }
}

/*
date = new Date (2021,12,12)
console.log(HU.date(date))
console.log(HU.curreny(5400300,5))
array = ['Miki', 'Maki', 'Menő', 'Manó']
console.log(HU.list(array))
*/
 
export default HU
