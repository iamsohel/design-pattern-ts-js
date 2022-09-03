class Employee {
    name: string;
    age: number;
    designation: string;
    constructor(employeeBuild: BuildEmploye){
        this.name = employeeBuild.name;
        this.age = employeeBuild.age;
        this.designation = employeeBuild.designation;
    }
}


class BuildEmploye {
    name: string;
    age: number;
    designation: string = '';
    constructor(name: string){
        this.name = name;
    }

    buildWithAge(age: number){
        this.age = age;
        return this;
    }

    buildWithDesignation(designation: string){
        this.designation = designation;
        return this;
    }

    build(){
        console.log("this: ", this)
        return new Employee(this)
    }
}

let em = new BuildEmploye('sohel').buildWithAge(23).build()
console.log(em)


