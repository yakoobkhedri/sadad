// filter

let filterBtn = Array.from(document.getElementsByClassName('filterBtn'));
let filterContent = Array.from(document.getElementsByClassName('filterContent'));

filterBtn.forEach((item) => {
  item.addEventListener('click', function () {
    item.nextElementSibling.classList.toggle('active');
    item.querySelector('svg').classList.toggle('active');
  })
})

// timer

function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  const daysSpan = clock.querySelector('.days');
  const hoursSpan = clock.querySelector('.hours');
  const minutesSpan = clock.querySelector('.minutes');
  const secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    const t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

const deadline = new Date(Date.parse(new Date()) + 1 * 1 * 15 * 60 * 1000);
initializeClock('clockdiv', deadline);

// cart number

let creditCardDigitArray = []
var lastchar=null;

function sunnyweb_check_number(event) {
  let creditCardDigitArray = []
  var cardnumber = document.getElementById("cardnumber");

  if(event.key != 'Backspace'){
    creditCardDigitArray = [...cardnumber.value]
	if	(lastchar===' ' && ( cardnumber.value.length=== 4 || cardnumber.value.length=== 9 ||cardnumber.value.length=== 14)){
	  creditCardDigitArray.pop()
      console.log(creditCardDigitArray);
      cardnumber.value = creditCardDigitArray.join('')
	}
    else if (( cardnumber.value.length=== 4 || cardnumber.value.length=== 9 ||cardnumber.value.length=== 14)) {
      creditCardDigitArray.push(' ')
      console.log(creditCardDigitArray);
      cardnumber.value = creditCardDigitArray.join('')
    }
	
    var cardno = cardnumber.value;
    var imgToSwap = document.getElementById("bank-logo");
    console.log(cardno)
    if (cardno.length == 7) {
    if (cardno === "6104 33") { imgToSwap.src = 'assets/img/bank-iran/mellat.png';}
	  if (cardno === '6037 99') { imgToSwap.src = "./assets/img/bank-iran/meli.png"; }
	  if (cardno === '5892 10') { imgToSwap.src = "./assets/img/bank-iran/sepah.png"; }
	  if (cardno === '6279 61') { imgToSwap.src = "./assets/img/bank-iran/sanatmadan.png"; }
	  if (cardno === '6037 70') { imgToSwap.src = "./assets/img/bank-iran/keshavarsi.png"; }
	  if (cardno === '6280 23') { imgToSwap.src = "./assets/img/bank-iran/maskan.png"; }
	  if (cardno === '6277 60') { imgToSwap.src = "./assets/img/bank-iran/postbank.png"; }
	  if (cardno === '5029 08') { imgToSwap.src = "./assets/img/bank-iran/tosehe.png"; }
	  if (cardno === '6274 12') { imgToSwap.src = "./assets/img/bank-iran/eghtesad.png"; }
	  if (cardno === '6221 06') { imgToSwap.src = "./assets/img/bank-iran/parsian.png"; }
	  if (cardno === '5022 29') { imgToSwap.src = "./assets/img/bank-iran/pasargad.png"; }
	  if (cardno === '6274 88') { imgToSwap.src = "./assets/img/bank-iran/karafarin.png"; }
	  if (cardno === '6219 86') { imgToSwap.src = "./assets/img/bank-iran/saman.png"; }
	  if (cardno === '6393 46') { imgToSwap.src = "./assets/img/bank-iran/sina.png"; }
	  if (cardno === '6396 07') { imgToSwap.src = "./assets/img/bank-iran/sarmaye.png"; }
	  if (cardno === '5028 06') { imgToSwap.src = "./assets/img/bank-iran/shahr.png"; }
	  if (cardno === '5029 38') { imgToSwap.src = "./assets/img/bank-iran/day.png"; }
	  if (cardno === '6037 69') { imgToSwap.src = "./assets/img/bank-iran/saderat.png"; }
	  if (cardno === '6104 33') { imgToSwap.src = "./assets/img/bank-iran/mellat.png"; }
	  if (cardno === '6273 53') { imgToSwap.src = "./assets/img/bank-iran/tejarat.png"; }
	  if (cardno === '5894 63') { imgToSwap.src = "./assets/img/bank-iran/refah.png"; }
	  if (cardno === '6273 81') { imgToSwap.src = "./assets/img/bank-iran/ansar.png"; }
	  if (cardno === '6393 70') { imgToSwap.src = "./assets/img/bank-iran/mehreqtesad.png"; }
	  if (cardno === '6395 99') { imgToSwap.src = "./assets/img/bank-iran/ghavamin.png"; }
	  if (cardno === '5041 72') { imgToSwap.src = "./assets/img/bank-iran/resalat.png"; }

      console.log(imgToSwap)
    } else if (cardno.length < 7) {
      imgToSwap.src = '';
    }
  }else {
	  alert(cardnumber.value.length)
	  if (cardnumber.value.length=== 5 || cardnumber.value.length=== 9 ||cardnumber.value.length=== 14) {     
		cardnumber.value = cardnumber.value.substring(0 , cardnumber.value.length-3);
	  }
  }
  lastchar=cardnumber.value.substr(cardnumber.value.length - 1);
}

document.getElementById('cardnumber').addEventListener('input',function () {
  if (this.value.length>18) {
    cvv2Digit.focus();
  }
})

// cart list dropdown

let showCartListDropdown = document.getElementById('showCartListDropdown');
let cartDropdown = document.getElementById('cartDropdown');

showCartListDropdown.addEventListener('click', function () {
  this.nextElementSibling.classList.toggle('active');
})
document.addEventListener('click', (event) => {
  if (!event.target.closest('.cartDropdown') && !event.target.closest('#showCartListDropdown')) {
    cartDropdown.classList.remove('active');
  }
})

// select cart

let cartItem = Array.from(document.getElementsByClassName('cart-item'));
let monthInput = document.getElementById('monthInput');
let yearInput = document.getElementById('yearInput');
let bankLogo = document.getElementById("bank-logo");
let cartNumber = document.getElementById("cardnumber");

cartItem.forEach((item) => {
  item.addEventListener('click', function () {
    let cartYear = item.dataset.year;
    let cartMonth = item.dataset.month;

    cartDropdown.classList.remove('active');
    cvv2Digit.focus();
    monthInput.value = cartMonth;
    yearInput.value = cartYear;
    bankLogo.src = item.querySelector('img').src;
    cartNumber.value = item.querySelector('p').innerText;
  })
})

// add new cart

function addNewCart() {
  cartNumber.focus();
  cartNumber.value = '';
  bankLogo.src = '';
  yearInput.value = '';
  monthInput.value = '';
}

// remove cart

let removeCart=Array.from(document.getElementsByClassName('remove-cart'));

removeCart.forEach((item)=>{
  item.addEventListener('click',function () {
    item.parentElement.classList.remove('d-flex');
    item.parentElement.style.display='none';
  })
})

// set just number to input

$(".justNumber").keypress(function (e) {
  var charCode = (e.which) ? e.which : e.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }
});

// enter number between 1 to 12

// function My_Validate(){
  
//   let month=document.getElementById('monthInput').value;
//   let year=document.getElementById('yearInput').value;
  
  
//   if ( month <= 0 ){
//    console.log("باید یه عدد بزرگتر از 0 وارد کنی");
//    return false;
//   }
//   else if ( month >= 12 ){
//     month.value='00'
//    return false;
//   }
//   else{
//    alert("همه چی درسته و فرم ارسال شد");
//   }
// }


// second password

let secondPass = document.getElementById('secondPass');
let payment = document.getElementById('payment');
let secondPassBtn = document.getElementById('secondPassBtn');
let successAlert=document.getElementById('successAlert');
let dangerAlert=document.getElementById('dangerAlert');

secondPass.addEventListener('keyup', function () {
  if (secondPass.value.length >= 5) {
    payment.classList.add('bg-green');
    payment.removeAttribute("disabled");
  } else {
    payment.classList.remove('bg-green');
    payment.setAttribute('disabled','');
  }
});

secondPassBtn.addEventListener('click', function (e) {
  e.preventDefault();
  successAlert.style.display='flex';
  setInterval(()=>{
    successAlert.style.display = 'none'
},5000)
  this.querySelector('p').style.display = 'none';
  this.querySelector('.secondPassTimer').style.display = 'block';
  this.style.backgroundColor = '#FD9E021A';
  this.setAttribute('disabled', '');
  const startingMinutes = 2;
  let time = startingMinutes * 60;
  let timerId = setInterval(countDown, 1000);

  function countDown() {

    let minutes = Math.floor(time / 60)
    let seconds = time % 60
    time--
    if (time < 0) {
      clearInterval(timerId);
      secondPassBtn.querySelector('p').style.display = 'block';
      secondPassBtn.querySelector('.secondPassTimer').style.display = 'none';
      secondPassBtn.style.backgroundColor = '#0BA350';
      secondPassBtn.removeAttribute('disabled');
    }
    document.querySelector('.second-secretCode').innerHTML = seconds + '  ';
    document.querySelector('.minute-secretCode').innerHTML = minutes + ' ';
  }
  countDown()
})

payment.addEventListener('click',function (e) {
  e.preventDefault();

    Array.from(document.getElementsByClassName('.getError')).forEach((item)=>{
      item.classList.add('error')
    })
})

// open mailbox
let openMailBox = document.getElementById('open-mailBox');
openMailBox.addEventListener('click', function () {
  this.parentElement.nextElementSibling.classList.add('active');
  this.parentElement.style.display = 'none';
})

// save cart checkbox

let saveCart = document.getElementById('saveCart');

saveCart.addEventListener('click', function () {
  this.classList.toggle('unCheck');
})

// virtual keyboard

let keyboardIcon = Array.from(document.getElementsByClassName('keyboardIcon'));
let closeKeyboard = Array.from(document.getElementsByClassName('closeKeyboard'));
let virtualKeyboard = Array.from(document.getElementsByClassName('virtualKeyboard'));
let btnCheck = Array.from(document.getElementsByClassName('btnCheck'));
let number1Btn = Array.from(document.getElementsByClassName('number1-btn'));
let number1Btn2 = Array.from(document.getElementsByClassName('number1-btn2'));
let cvv2Digit = document.getElementById('cvv2Digit');
let removeBtnClose = document.getElementById('remove-btn-close');
let removeBtnClose2 = document.getElementById('remove-btn-close2');

keyboardIcon.forEach((item) => {
  item.addEventListener('click', function () {
    item.nextElementSibling.classList.toggle('active');
  })
})

closeKeyboard.forEach((item) => {
  item.addEventListener('click', function () {
    item.parentElement.classList.remove('active');
  })
})
btnCheck.forEach((item) => {
  item.addEventListener('click', function () {
    item.parentElement.parentElement.classList.remove('active');
  })
});
document.addEventListener('click', (event) => {
  if (!event.target.closest('.virtualKeyboard') && !event.target.closest('.keyboardIcon')) {
    virtualKeyboard.forEach((item) => {
      item.classList.remove('active')
    });
  }
})
number1Btn.forEach((item) => {
  item.addEventListener('click', (event) => {
    if (cvv2Digit.value.length < 4) {
      cvv2Digit.value += event.target.innerHTML;
    }
  })
})
number1Btn2.forEach((item) => {
  item.addEventListener('click', (event) => {
    if (secondPass.value.length < 10) {
      secondPass.value += event.target.innerHTML;
    }
    if (secondPass.value.length >= 5) {
      payment.classList.add('bg-green');
    }
  })
})
removeBtnClose.addEventListener('click', () => {

  kibordCvv2Array = [...cvv2Digit.value]

  kibordCvv2Array.splice(kibordCvv2Array.length - 1, 1)

  console.log(kibordCvv2Array);

  cvv2Digit.value = kibordCvv2Array.join('')

})
removeBtnClose2.addEventListener('click', () => {

  kibordSecondPassArray = [...secondPass.value]

  if (secondPass.value.length < 6) {
    payment.classList.remove('bg-green');
  }

  kibordSecondPassArray.splice(kibordSecondPassArray.length - 1, 1)

  secondPass.value = kibordSecondPassArray.join('')

})

cvv2Digit.addEventListener('input',function () {
  if (this.value.length>3) {
    monthInput.focus();
  }
})

monthInput.addEventListener('input',function () {
  if (this.value.length>1) {
    yearInput.focus();
  }
})

yearInput.addEventListener('input',function () {
  if (this.value.length>1) {
    document.getElementById('capcha').focus();
  }
})

// focus effect
let transparentFocus=Array.from(document.getElementsByClassName('transparent-focus'));

transparentFocus.forEach((item)=>{
  item.addEventListener('click',function () {
    item.parentElement.classList.add('border-main-1');
  })
})

document.addEventListener('click', (event) => {
  if (!event.target.closest('.box-focus')) {
    transparentFocus.forEach((item)=>{
      item.parentElement.classList.remove('border-main-1');
    })
  }
})