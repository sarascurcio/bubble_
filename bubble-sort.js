let array_desordenado = [38, 27, 43, 3, 9, 82, 10]
console.log(array_desordenado)
let tamanho = array_desordenado.length
let trocado
do{
    trocado = false
    for(let i=0; i<tamanho ; i++){
            //compara o prmeiro elemento, com o segundo elemento
            if(array_desordenado[i] > array_desordenado[i+1]){
               //se o primeiro elemento é maior, inverte ele com o segundo elemento
                let temporaria = array_desordenado[i]
                array_desordenado[i] = array_desordenado[i+1]
                array_desordenado[i+1] = temporaria
                trocado = true
            }
        
        }
        tamanho--

    //se eu trocar algum elemento, trocado = true

} while (trocado)

console.log(array_desordenado)