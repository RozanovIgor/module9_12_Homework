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
        findAllFigma();
        isOlder(25);
        findBackend();


    })

function getSkillUser(user, skillName) {
    return user.skills.find(skill => skill.name.toLowerCase() === skillName);
}


function getInfo() {
    const location = cities.find(citiItem => citiItem.id === this.personal.locationId);
    if (location && location.name) {
        console.log(`${this.personal.firstName} ${this.personal.lastName}, город ${location.name} `);
    }
}

function findFirstReact() {
    const userReact = person.find(item => {
        return getSkillUser(item, 'react')
    });
    console.log(`userReact ${userReact}`)
    getInfo.call(userReact);

}

function findAllFigma() {
    console.log('knows Figma')
    person.forEach(person => {
        let skillItem = person.skills.find(item => {
            return item.name.toLowerCase() === 'figma'
        })
        if (skillItem) {

            getInfo.call(person);
        }
    })
}

function isOlder(age) {
    console.log(`is older ${age}`)
    const currentDate = new Date();
    person.forEach(person => {
        let personage = person.personal.birthday
        let dateParts = personage.split('.');
        let personBirthday = new Date(+dateParts[2], +dateParts[1], +dateParts[0]);
        let older = Math.abs(currentDate.getFullYear() - personBirthday.getFullYear()) > age;
        if (older) {
            getInfo.call(person);
        }
    })


}


function findBackend() {
    console.log('backenders')
    let backendId = specialization.find(item => item.name.toLowerCase() === 'backend');
    if (backendId) {
        let backenders = person.filter(item => item.personal.specializationId === backendId.id);
        backenders.forEach(person => {
            let occupation = person.request.find(item => {
                return item.value.toLowerCase() === 'полная';
            })
            if (occupation) {
                getInfo.call(person);
            }

        })
    }
}





