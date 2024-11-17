class PII {
    #names;
    #ssn;

    constructor(names, ssn) {
        this.#names = names;
        this.#ssn = ssn;
    }

    getName() {
        return this.#names;  
      }

    getSSN() {
        return this.#ssn;  
      }
};

const patient2 = new PII('John', '123-12-2333')

// Output: Undefined
console.log(patient2.names); 
// Output: Undefined
  console.log(patient2.ssn); 
// Output: John
  console.log(patient2.getName());
// Output: 123-45-6789
  console.log(patient2.getSSN()); 

