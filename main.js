let i = 0

do { 
     i = i + 1;
    console.log(i)
} while (i < 1000)


let person = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female",
}

const logOut = Object.keys(person)

console.log(LogOut)

for (const [key, value] of Object.entries(person)){
    console.log(`${key}: ${value}`)
}


let arrayOfPersons = [
    {
        firstName: "Jane",
        lastName: "Doe",
        birthDate: "Jan 5, 1925",
        gender: "female",
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        birthDate: "Jan 5, 1925",
        gender: "female",
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        birthDate: "Jan 5, 1925",
        gender: "female",
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        birthDate: "Jan 5, 1925",
        gender: "female",
    },
]


const birthDay = (array) =>{
    for (i of array){
        let splitBirthday = i.birthDate.split(" ").pop()
        if (splitBirthday % 2 !== 0){
            console.log(splitBirthday)
        }
    }
}
birthDay(arrayOfPersons)

let mappedArray = arrayOfPersons.map(function(value, index){
    console.log(index,value)
    return value
})

let filterArray = (array) => {
    array.filter(function(element, index){
        if(element.gender == "male"){
            console.log(element)
        }
    })
}

filterArray(arrayOfPersons)

const dateCheck = (array) =>{
    for (i of array){

        let splitBirthday = i.birthDate.split(" ").pop()
        splitBirthday = parseInt(splitBirthday)

        if (splitBirthday < 1990){
            i[1990] = true
        }

         else i[1990] = false
    }
}

dateCheck(arrayOfPersons)

console.log(arrayOfPersons)

let bornBefore  = (array) => {
  let eightiesKids = array.filter(function(element, index){
      splitBirthday = element.birthDate.split(" ").pop()
      splitBirthday = parseInt(splitBirthday)
      if (splitBirthday < 1990){
          console.log(`${element.firstName} ${element.lastName} ${splitBirthday}`)
      }
  })
}

bornBefore(arrayOfPersons)