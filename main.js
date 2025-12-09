let user = {
  Name: "زهرا ",
  Age: 18,
  // Email: "zahra18gimal.come",
  Email: "",
  Text() {
    if (!this.Email) {
      ("کاربر ایمیل ندارد ");
    } else {
      return ` ${this.Email} وایمیل شما ${this.Age}خوش امدید به سایت . سن شما ${this.Name} `;
    }
  },
};
console.log(user.Text());

function Button() {
  document.getElementById("U").innerHTML = user.Text();
}
