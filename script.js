class Employee {
    constructor(name, salary, hireDate) {
      this.name = name;
      this.salary = salary;
      this.hireDate = hireDate;
    }
    getName() {
      console.log(this.name.toUpperCase());
    }
    getSalary() {
      console.log(this.salary);
    }
    getHireDate() {
      console.log(this.hireDate);
    }
  }

  class Manager extends Employee {
      constructor(descriptionOfJob, name, salary, hireDate){
          super(name, salary, hireDate);
          this.descriptionOfJob = descriptionOfJob;
      }
      jobDescription() {
        console.log("Hello, my name is " + this.name + ". I was hired on " + this.hireDate + ", and I make " + this.salary + " as the " + this.descriptionOfJob);
      }
  }

  class Designer extends Employee {
    constructor(experience, name, salary, hireDate){
        super(name, salary, hireDate);
        this.experience = experience;
    }
    yearsExperience(){
        console.log("Hello, my name is " + this.name + ". I was hired on " + this.hireDate + ", and I make " + this.salary + " and I have " + this.experience + " years experience.");
    }
  }

    class SalesAssociate extends Employee {
        constructor(degrees, name, salary, hireDate){
            super(name, salary, hireDate);
            this.degrees =degrees;
    }
    degreeCompleted(){
        console.log("Hello, my name is " + this.name + ". I was hired on " + this.hireDate + ", and I make " + this.salary + " and I have a " + this.degrees + " degree.");
    }
}

let johnny = new Manager("Manager", "Johnny", 125000, `09/20/2016`);

let margaret = new Designer(25, "Margaret", 80000, `09/20/2017`);

let sally = new SalesAssociate("Bachelors", "Sally", 55000, `09/20/2018`);

johnny.jobDescription();
margaret.yearsExperience();
sally.degreeCompleted();