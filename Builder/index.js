var Employee = /** @class */ (function () {
    function Employee(employeeBuild) {
        this.name = employeeBuild.name;
        this.age = employeeBuild.age;
        this.designation = employeeBuild.designation;
    }
    return Employee;
}());
var BuildEmploye = /** @class */ (function () {
    function BuildEmploye(name) {
        this.designation = '';
        this.name = name;
    }
    BuildEmploye.prototype.buildWithAge = function (age) {
        this.age = age;
        return this;
    };
    BuildEmploye.prototype.buildWithDesignation = function (designation) {
        this.designation = designation;
        return this;
    };
    BuildEmploye.prototype.build = function () {
        console.log("this: ", this);
        return new Employee(this);
    };
    return BuildEmploye;
}());
var em = new BuildEmploye('sohel').buildWithAge(23).build();
console.log(em);
