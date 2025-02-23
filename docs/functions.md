# Funzioni

```

function ripetitesto(text, n){
    let newText  = "";
    for (let i = 0; i < n; i++){
        newText = newText + text;
    }
    return newText;
}

repetitesto("banana", 10)

const ripetiBanana = generaRipetiTesto("banana")
ripetiBanana(10);

generaRipetiTesto("rosso")(10)

function generaRipetiTesto(text){
    function f(n) {
        let newText  = "";
        for (let i = 0; i < n; i++){
            newText = newText + text;
        }
        return newText;
    }

    return f;
}

let array = [1,2,3,5]

function cambiaValore(valore) {
    return valore + 1
}

const newArray = map(array, cambiaValore)
// newArray = [2,3,4,6]

function map(array, transformerFunction){
    let array2 = [];
    for (let i = 0; i < array.length; i++){
        array2.push(transformerFunction(array[i]));
    }
    return array2;
}


function controllo(valore) {
    if(valore % 2 === 0) {
        return true
    }
    return false
}
//[1,2,3,4] => [2,4]

function filter(array, controllo) {
    let newArray = [];
    for (let i = 0; i < array.length; i++){
        if (controllo(array[i]) === true) {
            newArray.push(array[i]);
        }
    }

    return newArray;
}
```
