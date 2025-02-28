let car ={
    name: "Mazda",
    color:"white",
    mileage: 40,
    start:function(){
        console.log( " This has started");
    }
}

let person ={
    name: "birungi",
    speak:"function"(){
        console.log("hello my love" + this.name +"I am" +this.age +"years old");
    }
}
Console.log(person.name);
person.speak()

let store={

    name: "Karibu groceries",
    location: "Mganjo",
    stock:{
        beans: 100,
        Maize:200,
        peas:250,
    },
    saleProduce: functions(quantity){
        console.log("sold succfully"),
   }
}