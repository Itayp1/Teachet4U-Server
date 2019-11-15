module.exports = class User {
  constructor(email, name, lastname, age, gender, city, phone, profile) {
    // prettier-ignore
    this.email = email,
      this.lastname = lastname,
      this.name = name,
      this.age = age,
      this.gender = gender,
      this.city = city,
      this.phone = phone,
      this.profile = profile;
  }
};
