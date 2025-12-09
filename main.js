const name = prompt("نام خود را وارد کنید ");
const age = prompt("سن خود را وارد کنید ");
const emaile = prompt("ایمیل را وارد کنید ");

let User = {
  // Name: name,
  Age: age,
  Emaile: emaile,
};

document.getElementById("U").innerhtml = User.Age;
console.log(User);
