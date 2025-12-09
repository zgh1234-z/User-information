let user = {
  Name: zahra,
  Age: 18,
  Email: zahra18gimal.come,
  Text() {
    ` ${this.Email} وایمیل شما ${this.Age}خوش امدید به سایت . سن شما ${this.Name} `;
  },
};
console.log(user.Text);
document.getElementById("U").innerHTML = user.Text();
