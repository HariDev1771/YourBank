let sign = document.getElementById("overlay");
let pswd = document.getElementById("pwd");
let cpswd = document.getElementById("cpwd");
let uname = document.getElementById("unme");
let email = document.getElementById("gmail");
let mob = document.getElementById("phno");

function signn() {
  console.log("called");
  sign.style.display = "flex";
  document.getElementById("Logging-in").style.display = "none";

  document.getElementById("signupcontainer").style.display = "flex";
}

function closed() {
  console.log("yes called");
  sign.style.display = "none";
}



const genacnum =()=>{
  let acnum=''
  for(let i=0;i<10;i++){
acnum+= Math.floor(Math.random()*10)
  }return acnum;
}

// console.log(person.balance);
// sign in function
function Signin() {
  let personarray = localStorage.getItem("personinfo");
  
  if (personarray === null){
    personarray=[];
  }
  else{
    personarray = JSON.parse(personarray);
  }
  let person = {
    uname: "",
    password: "",
    mailid: "",
    pinnum:"",
    phone: "",
    balance: 0,
    accnum:"",
    transactions: [],
    loggedin: "false",
  };

  if (pswd.value == cpswd.value) {
    person.uname = document.getElementById("unme").value;
    person.mailid = document.getElementById("gmail").value;
    person.phone = document.getElementById("phno").value;
    person.password = document.getElementById("pwd").value;
    person.pinnum=document.getElementById("pinnumber").value;
    person.accnum=genacnum();
    personarray.push(person);
    console.log(personarray);
    console.log(person);

    localStorage.setItem("personinfo", JSON.stringify(personarray));

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
  document.getElementById("signupcontainer").style.display = "none";
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
  personarray = JSON.parse(localStorage.getItem("personinfo"));
  console.log(personarray);
  for (let i = 0; i < personarray.length; i++) {
    if (cred1 == personarray[i].mailid && cred2 == personarray[i].password) {
      console.log("login success");

      personarray[i].loggedin = "true";
      document.getElementById("Logging-in").style.display = "none";
      document.getElementById("error").style.display = "none";
      document.getElementById("welcomemsg").style.display = "flex";
      localStorage.setItem("personinfo", JSON.stringify(personarray));

      setTimeout(() => {
        document.getElementById("overlay").style.display = "none";
        document.getElementById("welcomemsg").style.display = "none";
        reload();
      }, 3000);
      document.getElementById("gmail2").value = null;
      document.getElementById("pwd2").value = null;
      break;
    } else {
      document.getElementById("overlay").style.display = "flex";
      document.getElementById("welcomemsg").style.display = "none";
      document.getElementById("error").style.display = "flex";
    }
  }

  //  document.getElementById("dname").innerHTML = userinfo.uname;
  // console.log("balance is", personarray[i].balance);
}
function check() {
  let hasLowercase = false;
  let hasuppercase = false;
  let hasnum = false;
  if (hasLowercase == false) {
    // console.log("yesmall");
    document.getElementById("smallletter").style.display = "flex";
  }
  if (hasuppercase == false) {
    // console.log("yeslarge");
    document.getElementById("capitalletter").style.display = "flex";
  }
  if (hasnum == false) {
    // console.log("yesnum");
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
const accheck =() =>{
  let acn=document.getElementById("Recipient");
  if(acn.value.length!=10){
    document.getElementById("acmessage").style.display="flex"
    console.log("acnum")
  }
  else{
    document.getElementById("acmessage").style.display="none"
  }
}
const ucheck = () => {
  if (uname.value.length < 6) {
    document.getElementById("u-error").style.display = "flex";
  } else {
    document.getElementById("u-error").style.display = "none";
  }
};
const pincheck =()=>{
  let generatedpin=document.getElementById("pinnumber");
  if(generatedpin.value.length!=4){
    document.getElementById("pinmessage").style.display="flex";
  }
  else{
    document.getElementById("pinmessage").style.display="none";
  }
}

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
  // userinfo.loggedin = "false";
  // localStorage.setItem("personinfo", JSON.stringify(person));
  // document.getElementById("authentication").style.display = "flex";
  // document.getElementById("afterloggedin").style.display = "none";
  logininfo = JSON.parse(localStorage.getItem("personinfo"));
  for (let i = 0; i < logininfo.length; i++) {
    if (logininfo[i].loggedin == "true") {
      logininfo[i].loggedin = "false";

      document.getElementById("authentication").style.display = "flex";
      document.getElementById("afterloggedin").style.display = "none";
    }
  }
  localStorage.setItem("personinfo", JSON.stringify(logininfo));
}
function reload() {
  // loginnfo = JSON.parse(localStorage.getItem("logging-info"));
  // if (person?.loggedin == "true") {
  //   document.getElementById("authentication").style.display = "none";
  //   document.getElementById("afterloggedin").style.display = "flex";
  //   document.getElementById("dname").innerHTML = person.uname;
  // }
  let logininfo = JSON.parse(localStorage.getItem("personinfo"));
  console.log(logininfo);
  if (logininfo)
    for (let i = 0; i < logininfo.length; i++) {
      if (logininfo[i].loggedin == "true") {
        document.getElementById("authentication").style.display = "none";
        document.getElementById("afterloggedin").style.display = "flex";
        document.getElementById("dname").innerHTML = logininfo[i].uname;
      }
    }
}
reload();

function viewbalance() {
  console.log("worked");

  // console.log(userinfo.balance);
  // sign.style.display = "flex";
  // document.getElementById("overlaycontainer").style.display = "flex";
  // document.getElementById("balance").style.display = "flex";
  // document.getElementById("balancevalue").innerHTML = userinfo.balance;
  // setTimeout(() => {
  //   sign.style.display = "none";
  //   document.getElementById("overlaycontainer").style.display = "none";
  //   document.getElementById("balance").style.display = "none";
  // }, 3000);
  let logininfo = JSON.parse(localStorage.getItem("personinfo"));
  console.log(logininfo);
  let userchck = false;

  for (let i = 0; i < logininfo.length; i++) {
    if (logininfo[i].loggedin == "true") {
      userchck = true;

      sign.style.display = "flex";
      document.getElementById("overlaycontainer").style.display = "flex";
      document.getElementById("balance").style.display = "flex";
      document.getElementById("balancevalue").innerHTML = logininfo[i].balance;

      break;
    }
    // ---unable to add else  : repetition occurs fix it
  }
  if (!userchck) {
    window.alert("you have to login");
  }
  setTimeout(() => {
    sign.style.display = "none";
    document.getElementById("overlaycontainer").style.display = "none";
    document.getElementById("balance").style.display = "none";
  }, 3000);
}

function deposit() {
  console.log("hi sagar");
  document.getElementById("balance").style.display = "none";
  document.getElementById("Withdrawcontainer").style.display = "none";
  sign.style.display = "flex";
  document.getElementById("overlaycontainer").style.display = "flex";
  document.getElementById("Depositcontainer").style.display = "flex";
}
function depositconfirm() {
  console.log("heylo deposited");
  logininfo = JSON.parse(localStorage.getItem("personinfo"));
  let pin = document.getElementById("pin").value;
  amt = Number(document.getElementById("depositamount").value);
  let userchck = false;

  for (let i = 0; i < logininfo.length; i++) {
    if (logininfo[i].loggedin == "true" && logininfo[i].pinnum == pin) {
      userchck = true;
      document.getElementById("Depositcontainer").style.display = "none";
      document.getElementById("Depositpasswarning").style.display = "none";
      document.getElementById("depomsg").style.display = "flex";

      logininfo[i].balance += amt;
      let t = new Date();
      let transactioninfo = {};
      transactioninfo.transaction_time = t;
      transactioninfo.transaction_type = "Deposit";
      transactioninfo.transaction_amount = amt;
      
      console.log(transactioninfo);
      logininfo[i].transactions.push(transactioninfo);
      console.log(logininfo[i]);
      localStorage.setItem("personinfo", JSON.stringify(logininfo));
      document.getElementById("pin").value = null;
      document.getElementById("depositamount").value = null;
      break;
    }
  }
  if (!userchck) {
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
  document.getElementById("balance").style.display = "none";
  document.getElementById("overlaycontainer").style.display = "flex";
  document.getElementById("Withdrawcontainer").style.display = "flex";
  document.getElementById("Depositcontainer").style.display = "none";
  document.getElementById("Transactioncontainer").style.display = "none";
  
  document.getElementById("transdetail").style.display = "none";
}
function withdrawconfirm() {
  // loginnfo = JSON.parse(localStorage.getItem("logging-info"));
  let pinn = document.getElementById("pin1").value;
  amt = Number(document.getElementById("withdrawamount").value);
  logininfo = JSON.parse(localStorage.getItem("personinfo"));
  let usercheck = false;
  console.log(logininfo);
  for (let i = 0; i < logininfo.length; i++) {
    if (logininfo[i].loggedin == "true" && logininfo[i].pinnum == pinn) {
      usercheck = true;
      console.log(logininfo[i]);
      document.getElementById("Withdrawcontainer").style.display = "none";
      document.getElementById("Depositpasswarning").style.display = "none";
      document.getElementById("withdrawmsg").style.display = "flex";
      console.log("withdrawn");
      logininfo[i].balance -= amt;
      let transactioninfo = {};
      let t = new Date();
      transactioninfo.transaction_time = t;
      transactioninfo.transaction_type = "Withdrawn";
      transactioninfo.transaction_amount = amt;
      
      logininfo[i].transactions.push(transactioninfo);
      console.log(logininfo[i]);
      localStorage.setItem("personinfo", JSON.stringify(logininfo));
      document.getElementById("pin1").value = null;
      document.getElementById("withdrawamount").value = null;
      break;
    }
  }
  if (!usercheck) {
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
 let userinfo = JSON.parse(localStorage.getItem("personinfo"));
 for(let j=0;j<userinfo.length;j++){
  if (userinfo[j].loggedin == "true"){
    // let p4=document.createElement("p")
    // p4.innerHTML=userinfo[j].accnum;
    // let p5 =document.createElement("p")
    // p5.innerHTML=userinfo[j].balance
    document.getElementById("accountnyum").innerHTML=userinfo[j].accnum
 document.getElementById("balnyum").innerHTML=userinfo[j].balance
    // let bal=document.createElement("div")
    // bal.id="balbox"
    // bal.appendChild(p4)
    // bal.appendChild(p5)
    for (let i = 0; i < userinfo[j].transactions.length; i++) {
      let box = document.createElement("div");
  
      box.id = "transaction_box";
      
      let p1 = document.createElement("p");
      let p2 = document.createElement("p");
      let p3 = document.createElement("p");
      p1.innerHTML = userinfo[j].transactions[i].transaction_type;
      p2.innerHTML = userinfo[j].transactions[i].transaction_amount;
      p3.innerHTML = userinfo[j].transactions[i].transaction_time;
      if (userinfo[j].transactions[i].transaction_type == "Deposit") {
        p1.style.color = "#caff33";
      } else if (userinfo[j].transactions[i].transaction_type == "Withdrawn") {
        p1.style.color = "red";
      }
    
      box.appendChild(p1);
  
      box.appendChild(p2);
  
      box.appendChild(p3);
      // document.getElementById("transaction").appendChild(bal);
      document.getElementById("transaction").appendChild(box);
    }
  
    sign.style.display = "flex";
    document.getElementById("overlaycontainer").style.display = "flex";
    document.getElementById("Depositcontainer").style.display = "none";
    document.getElementById("transdetail").style.display = "flex";
    document.getElementById("Withdrawcontainer").style.display = "none";
    document.getElementById("Transactioncontainer").style.display = "none";
  
    console.log(userinfo);
  }
 }
 
}
function moneycheck() {
  if (document.getElementById("depositamount").value == null) {
    document.getElementById("Depositwarning").style.display = "flex";
    console.log("dwarn")
  } else {
    document.getElementById("Depositwarning").style.display = "none";
  }
}
function Closepopup() {
  let close = document.querySelectorAll(".forclosing");

  for (let i = 0; i < close.length; i++) {
    
    sign.style.display="none"
    // close[i].style.display="none"
  }

  reload();
}
function Transactionbox(){
  console.log("hi transax box");
  sign.style.display = "flex";
  document.getElementById("overlaycontainer").style.display = "flex";
  document.getElementById("Transactioncontainer").style.display = "flex";
  document.getElementById("Depositcontainer").style.display = "none";
  document.getElementById("transdetail").style.display = "none";
  document.getElementById("Withdrawcontainer").style.display = "none";

}
function moneytransfer(){
  amt=Number(document.getElementById("ttamt").value)
  let pin=document.getElementById("pin").value
  let recipient=Number(document.getElementById("Recipient").value)
  let ycheck =false;
  let userinfo=JSON.parse(localStorage.getItem("personinfo"));
  for(let i=0;i<userinfo.length;i++){
    if(userinfo[i].loggedin=="true"){
        ycheck=true;
        for(let j=0;j<userinfo.length;j++){
          if(recipient==userinfo[j].accnum ){
            console.log("j kitti")
            console.log(amt)
            console.log(userinfo[j])
            console.log(userinfo[i])
           userinfo[j].balance+=amt;
           userinfo[i].balance-=amt;
           let transactioninfo={}
           let t=new Date();
           transactioninfo.transaction_time=t;
           transactioninfo.transaction_amount=amt;
          //  transactioninfo.transaction_type=`Transferred to "${userinfo[j].accnum}"`
           userinfo[i].transactions.push(transactioninfo)
           console.log(userinfo[i])

          transactioninfo.transaction_type=`Transferred from "${userinfo[i].accnum}  Transferred to "${userinfo[j].accnum}"`
          userinfo[j].transactions.push(transactioninfo);
           
          
           console.log("mone deposit aki")
           localStorage.setItem("personinfo",JSON.stringify(userinfo));
           document.getElementById("Transactioncontainer").style.display="none"
           document.getElementById("trmsg").style.display="flex"
           
           document.getElementById("Recipient").value=null;
           document.getElementById("ttamt").value=null;
           document.getElementById("pin").value=null;

            
          }
        }
    
    }
    //first if loop ends :logged in true
    if(!ycheck){
      window.alert("Login to perfom action");
    }
    setTimeout(()=> {
      document.getElementById("overlay").style.display="none";

      document.getElementById("overlaycontainer").style.display="none";
      document.getElementById("Transactioncontainer").style.display="none";
      document.getElementById("trmsg").style.display="none";
    },3000)
  }
}