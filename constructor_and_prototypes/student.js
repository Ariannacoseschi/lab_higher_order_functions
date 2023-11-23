const Student = function(name, age = 22){
    this.name = name;
    this.age = age;

    Student.prototype.greet = function(){
        console.log(`Hello, my name is
        ${this.name}`);
    }

};






module.exports = Student;