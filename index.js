// Code your solution here
drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching (drivers, stringToMatch) {
    return drivers.filter(driver => { 
        return driver.toLowerCase() === stringToMatch.toLowerCase() })
}

function fuzzyMatch(drivers, stringToMatch){
    return drivers.filter(driver => { 
        return driver.toLowerCase().substring(0, stringToMatch.length) === stringToMatch.toLowerCase()})
}

function matchName(drivers, name){
    return drivers.filter(driver => {
        return driver.name === name
    })
}