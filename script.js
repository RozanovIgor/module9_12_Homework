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
        for (i = 0; i < person.length; i++) {
            getInfo.call(person[i])
        }

    })


function getInfo() {
    const location = cities.find(citiItem => citiItem.id === this.personal.locationId);
    if (location && location.name) {
        console.log(`${this.personal.firstName} ${this.personal.lastName}, город ${location.name} `);
    }
}

function findFirstReact () {
    const firstReact  = person.find(personItem => person.skills.find(skillItem => skillItem.name === 'React'));

}



