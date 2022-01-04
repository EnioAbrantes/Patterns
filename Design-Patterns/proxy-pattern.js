const person = {
    name: "John Doe",
    age: 42,
    nationality: "american"
}

const personProxy = new Proxy(person, {
    get: (obj, prop) => {
        //console.log(`The value of ${prop} is ${obj[prop]}`)
        console.log(`The value of ${prop} is ${Reflect.get(obj, prop)}`)
    },
    set: (obj, prop, value) => {
        //console.log(`Changed ${prop} from ${obj[prop]} to ${value}`)
        console.log(`Changed ${prop} from ${Reflect.get(obj, prop)} to ${value}`)
        // obj[prop] = value
        Reflect.set(obj, prop, value);
    }
})

console.log(personProxy.name)
personProxy.age = 27
console.log(personProxy.age)