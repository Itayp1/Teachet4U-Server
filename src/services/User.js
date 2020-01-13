module.exports = class User {
  constructor(email, fullnName, age, gender, city, phone, profile) {
    // prettier-ignore
    this.email = email,
      this.fullnName = fullnName,
      this.age = age,
      this.gender = gender,
      this.city = city,
      this.phone = phone,
      this.profile = profile;
  }
};
