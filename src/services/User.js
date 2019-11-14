module.exports = class User {
  constructor(email, name, lastname, age, gender, city, phone, profile) {
    (this.name = name),
      (this.lastname = lastname),
      (this.email = email),
      (this.age = age),
      (this.gender = gender),
      (this.city = city),
      (this.phone = phone),
      (this.profile = profile);
  }

  printhello() {
    console.log(`hello user ${this.lastname}${this.name}${this.age}`);
  }


};
