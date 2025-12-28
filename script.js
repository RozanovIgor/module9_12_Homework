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
            getInfo.call(person[0]);
        console.log(`разработчик на React `);
        findFirstReact();


    })

function getSkillUser (user, skillName) {
    return user.skills.find(skill => skill.name.toLowerCase() === skillName);
}


function getInfo() {
    const location = cities.find(citiItem => citiItem.id === this.personal.locationId);
    if (location && location.name) {
        console.log(`${this.personal.firstName} ${this.personal.lastName}, город ${location.name} `);
    }
}

function findFirstReact () {
    const userReact = person.find(item=> {
        return getSkillUser(item, 'figma')
    });
    console.log(`userReact ${userReact}`)
    getInfo.call(userReact);

}





