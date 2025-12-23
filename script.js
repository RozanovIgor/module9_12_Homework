let cities = [];
let person = [];
let specialization = [];


Promise.all(
    [
        fetch('cities.json'),
        fetch('person.json'),
        fetch('specializations.json'),
    ]
).then(async ([citiesResponse, personResponse, specializationResponse]) => {
    const citiesJson = await citiesResponse.json();
    const personJson = await personResponse.json();
    const specializationJson = await specializationResponse.json();
    return [citiesJson, personJson, specializationJson]

})

    .then(response => {
        cities = response[0];
        person = response[1];
        specialization = response[2];
getInfo()
        testString.call(cities)
    })

function testString() {
console.log(this[0].name)
}


function getInfo() {
    // console.log(person);
    let output = person.map(item => {
        let citi = cities.find(citiItem => {

            return citiItem.id === item.personal.locationId;

        });
        item.personal.locationId = citi.name
        return item.personal
    })
    console.log(output)
}



