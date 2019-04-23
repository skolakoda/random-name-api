let iskorisceniNiz = [];


function getRandomName(arr) 
{   
    if (iskorisceniNiz.length >= arr.length){
        iskorisceniNiz = [];
    }
    const neiskorisceniNiz = arr.filter(ime => !iskorisceniNiz.includes(ime));
    
    let ime = neiskorisceniNiz[Math.floor(Math.random() * neiskorisceniNiz.length)];
    iskorisceniNiz.push(ime);
    return ime;
}

module.exports = {
    getRandomName
}
