const listContainerDom = document.querySelector('#shoppingListContainer');
const shoppingList = [
    'fragole', 
    'mele', 
    'pere', 
    'acqua', 
    'detersivo'
];

console.log(shoppingList);

let counter = 0;

while(shoppingList.length > counter){
    const listElement = document.createElement('li');
    listElement.append(shoppingList[counter]);
    listContainerDom.append(listElement);
    counter++
}

// Versione utilizzando il ciclo do while 
// do{
//     const listElement = document.createElement('li');
//     listElement.append(shoppingList[counter]);
//     listContainerDom.append(listElement);
//     counter++
// } while (counter < shoppingList.length)


