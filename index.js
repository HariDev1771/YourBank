let sign = document.getElementById("overlay");
let pswd = document.getElementById("pwd");
let cpswd = document.getElementById("cpwd");
let uname = document.getElementById("unme");
let email = document.getElementById("gmail");
let mob = document.getElementById("phno");

let userinfo = JSON.parse(localStorage.getItem("personinfo"));
console.log(userinfo);

function signn() {
  console.log("called");
  sign.style.display = "flex";

  document.getElementById("signupcontainer").style.display = "flex";
}

function closed() {
  console.log("yes called");
  sign.style.display = "none";
}


let person = {
  uname: "",
  password: "",
  mailid: "",
  phone: "",
  balance: 0,
  transactions: [],
  loggedin: "false",
};

console.log(person.balance);
// sign in function
function Signin() {
  // e.preventDefault();
  if (pswd.value == cpswd.value) {
    person.uname = document.getElementById("unme").value;
    person.mailid = document.getElementById("gmail").value;
    person.phone = document.getElementById("phno").value;
    person.password = document.getElementById("pwd").value;

    localStorage.setItem("personinfo", JSON.stringify(person));

    document.getElementById("signupcontainer").style.display = "none";
    document.getElementById("successmg").style.display = "flex";

    setTimeout(() => {
      document.getElementById("overlay").style.display = "none";
      document.getElementById("successmg").style.display = "none";
    }, 3000);
  } else {
    document.getElementById("p-error").innerHTML = "Password doesn't match!";
  }
}
function logged() {
  sign.style.display = "flex";
  document.getElementById("Logging-in").style.display = "flex";
}

// login function
function Login() {
  let cred1 = document.getElementById("gmail2").value;
  let cred2 = document.getElementById("pwd2").value;

  console.log(cred1, cred2);
  //   step 1 : localstorage access
  // let stored = JSON.parse(localStorage.getItem("personinfo"));
  // console.log(stored);

  if (cred1 == userinfo.mailid && cred2 == userinfo.password) {
    console.log("login success");
    userinfo.loggedin = "true";
    document.getElementById("Logging-in").style.display = "none";
    document.getElementById("welcomemsg").style.display = "flex";

    setTimeout(() => {
      document.getElementById("overlay").style.display = "none";
      document.getElementById("welcomemsg").style.display = "none";
      reload();
    }, 3000);
    document.getElementById("gmail2").value = null;
    document.getElementById("pwd2").value = null;
  } else {
    document.getElementById("overlay").style.display = "flex";
    document.getElementById("error").style.display = "flex";
  }

  localStorage.setItem("personinfo", JSON.stringify(userinfo));

  //  document.getElementById("dname").innerHTML = userinfo.uname;
  console.log("balance is", userinfo.balance);
}
function check() {
  let hasLowercase = false;
  let hasuppercase = false;
  let hasnum = false;
  if (hasLowercase == false) {
    console.log("yesmall");
    document.getElementById("smallletter").style.display = "flex";
  }
  if (hasuppercase == false) {
    console.log("yeslarge");
    document.getElementById("capitalletter").style.display = "flex";
  }
  if (hasnum == false) {
    console.log("yesnum");
    document.getElementById("number").style.display = "flex";
  }

  if (pswd.value.length < 8) {
    document.getElementById("m-error").innerHTML = "Password length Shorter";
  }

  for (let i = 0; i < pswd.value.length; i++) {
    let char = pswd.value.charAt(i);
    if (char >= "a" && char <= "z") {
      hasLowercase = true;
      document.getElementById("smallletter").style.display = "none";
    } else if (char >= "A" && char <= "Z") {
      hasuppercase = true;
      document.getElementById("capitalletter").style.display = "none";
    } else if (char >= "0" && char <= "9") {
      hasnum = true;
      document.getElementById("number").style.display = "none";
    }
  }

  if (hasLowercase && hasnum && hasuppercase && pswd.value.length >= 8) {
    document.getElementById("m-error").innerHTML = "Password Strong";
  }
}
const ucheck = () => {
  if (uname.value.length < 6) {
    document.getElementById("u-error").style.display = "flex";
  } else {
    document.getElementById("u-error").style.display = "none";
  }
};

function mailcheck() {
  // for(let i=0;i<email.value.length;i++){

  //     if(email.value.charAt(i)=='@'){
  //         has_at=true;
  //         break;

  //     }

  // }
  // if(has_at){ console.log("present")
  // }
  // let pattern=["@gmail.com ", "@yahoo.com", "@hotmail.com"];
  // pattern.forEach(tester())
  // function tester(){
  //     email.value.test()

  // }/
  if (
    !(
      email.value.includes("@gmail.com") ||
      email.value.includes("@yahoo.com") ||
      email.value.includes("@outlook.com")
    )
  ) {
    document.getElementById("e-error").innerHTML = "Email not valid";
  } else {
    document.getElementById("e-error").innerHTML = "";
  }
}
function numcheck() {
  if (mob.value.length != 10) {
    document.getElementById("phonemessage").style.display = "flex";
  } else {
    document.getElementById("phonemessage").style.display = "none";
  }
}
function logout() {
  // localStorage.removeItem("logging-info");
  userinfo.loggedin = "false";
  localStorage.setItem("personinfo", JSON.stringify(userinfo));
  document.getElementById("authentication").style.display = "flex";
  document.getElementById("afterloggedin").style.display = "none";
}
function reload() {
  // loginnfo = JSON.parse(localStorage.getItem("logging-info"));
  if (userinfo?.loggedin == "true") {
    document.getElementById("authentication").style.display = "none";
    document.getElementById("afterloggedin").style.display = "flex";
    document.getElementById("dname").innerHTML = userinfo.uname;
  }
}
reload();

function viewbalance() {
  console.log("worked");

  console.log(userinfo.balance);
  sign.style.display = "flex";
  document.getElementById("overlaycontainer").style.display = "flex";
  document.getElementById("balance").style.display = "flex";
  document.getElementById("balancevalue").innerHTML = userinfo.balance;
  setTimeout(() => {
    sign.style.display = "none";
    document.getElementById("overlaycontainer").style.display = "none";
    document.getElementById("balance").style.display = "none";
  }, 3000);
}

function deposit() {
  console.log("hi sagar");
  sign.style.display = "flex";
  document.getElementById("overlaycontainer").style.display = "flex";
  document.getElementById("Depositcontainer").style.display = "flex";
}
function depositconfirm() {
  console.log("heylo deposited");
  // loginnfo = JSON.parse(localStorage.getItem("logging-info"));
  let pin = document.getElementById("pin").value;
  amt = Number(document.getElementById("depositamount").value);

  if (pin) {
    document.getElementById("Depositcontainer").style.display = "none";
    document.getElementById("Depositpasswarning").style.display = "none";
    document.getElementById("depomsg").style.display = "flex";
    userinfo.balance += amt;
    let t = new Date();
    let transactioninfo = {};
    transactioninfo.transaction_time = t;
    transactioninfo.transaction_type = "Deposit";
    transactioninfo.transaction_amount = amt;
    console.log(transactioninfo);
    userinfo.transactions.push(transactioninfo);
    console.log(userinfo);
    localStorage.setItem("personinfo", JSON.stringify(userinfo));
    document.getElementById("pin").value = null;
    document.getElementById("depositamount").value = null;
  } else {
    console.log("cont deposit money");
    document.getElementById("depomsg").style.display = "none";
    document.getElementById("Depositpasswarning").style.display = "flex";
  }

  setTimeout(() => {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("overlaycontainer").style.display = "none";
    document.getElementById("depomsg").style.display = "none";
    document.getElementById("Depositcontainer").style.display = "none";
    reload();
  }, 3000);
}

function Withdraw() {
  console.log("hi boi");
  sign.style.display = "flex";
  document.getElementById("overlaycontainer").style.display = "flex";
  document.getElementById("Withdrawcontainer").style.display = "flex";
}
function withdrawconfirm() {
  // loginnfo = JSON.parse(localStorage.getItem("logging-info"));
  let pinn = document.getElementById("pin1").value;
  amt = Number(document.getElementById("withdrawamount").value);
  if (pinn == userinfo.password) {
    document.getElementById("Withdrawcontainer").style.display = "none";
    document.getElementById("Depositpasswarning").style.display = "none";
    document.getElementById("withdrawmsg").style.display = "flex";
    console.log("withdrawn");
    userinfo.balance -= amt;
    let transactioninfo = {};
    let t = new Date();
    transactioninfo.transaction_time = t;
    transactioninfo.transaction_type = "Withdrawn";
    transactioninfo.transaction_amount = amt;
    userinfo.transactions.push(transactioninfo);
    console.log(userinfo);
    localStorage.setItem("personinfo", JSON.stringify(userinfo));
    document.getElementById("pin1").value = null;
    document.getElementById("withdrawamount").value = null;
  } else {
    console.log("cont withdraw money");
    document.getElementById("withdrawmsg").style.display = "none";
    document.getElementById("Depositpasswarning").style.display = "flex";
  }
  setTimeout(() => {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("overlaycontainer").style.display = "none";
    document.getElementById("Withdrawcontainer").style.display = "none";
    document.getElementById("withdrawmsg").style.display = "none";
  }, 3000);
}
function Transactiondetails() {
  // loginnfo = JSON.parse(localStorage.getItem("logging-info"));

  // document.getElementById("transaction").innerHTML=userinfo.transactions;
  userinfo = JSON.parse(localStorage.getItem("personinfo"));
  for (let i = 0; i < userinfo.transactions.length; i++) {
    let box = document.createElement("div");

    box.id = "transaction_box";
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    p1.innerHTML = userinfo.transactions[i].transaction_type;
    p2.innerHTML = userinfo.transactions[i].transaction_amount;
    p3.innerHTML = userinfo.transactions[i].transaction_time;
    if (userinfo.transactions[i].transaction_type == "Deposit") {
      p1.style.color = "#caff33";
    } else if (userinfo.transactions[i].transaction_type == "Withdrawn") {
      p1.style.color = "red";
    }

    box.appendChild(p1);

    box.appendChild(p2);

    box.appendChild(p3);
    document.getElementById("transaction").appendChild(box);
  }

  sign.style.display = "flex";
  document.getElementById("overlaycontainer").style.display = "flex";
  document.getElementById("transdetail").style.display = "flex";

  console.log(userinfo);
}
function moneycheck() {
  if (document.getElementById("depositamount").value == null) {
    document.getElementById("Depositwarning").style.display = "flex";
  } else {
    document.getElementById("Depositwarning").style.display = "none";
  }
}
function Closepopup() {
  let close = document.querySelectorAll(".forclosing");
  
  for (let i = 0; i < close.length; i++) {
    close[i].style.display = "none";
  }

  reload();
}
