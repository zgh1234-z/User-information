let user = {
  Name: "zahra",
  Age: 18,
  Email: "zahra18gimal.come",
  Text() {
    return ` ${this.Email} وایمیل شما ${this.Age}خوش امدید به سایت . سن شما ${this.Name} `;
  },
};
console.log(user.Text());

function Button() {
  document.getElementById("U").innerHTML = user.Text();
}
