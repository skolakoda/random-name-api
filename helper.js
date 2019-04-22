let iskorisceniNiz = [];


function getRandomName(arr) 
{   //ovde se prazni niz
    let neiskorisceniNiz = [];
    if (iskorisceniNiz.length >= arr.length){
        iskorisceniNiz = [];
    }
    //ovde se puni neiskorisceni niz
    for (let index = 0; index < arr.length; index++) {
        if (!iskorisceniNiz.includes(arr[index])) {
            neiskorisceniNiz.push(arr[index])
        }
    }
    
    let ime = neiskorisceniNiz[Math.floor(Math.random() * neiskorisceniNiz.length)];
    iskorisceniNiz.push(ime)
    return ime;
}

module.exports = {
    getRandomName
}