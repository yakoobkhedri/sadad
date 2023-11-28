// filter  //  more

let filterBtn = Array.from(document.getElementsByClassName('filterBtn'));
let moreBtn = Array.from(document.getElementsByClassName('moreBtn'));
let filterContent = Array.from(document.getElementsByClassName('filterContent'));
let moreContent = Array.from(document.getElementsByClassName('moreContent'));

filterBtn.forEach((item) => {
  item.addEventListener('click', function () {
    item.nextElementSibling.classList.toggle('active');
    item.querySelector('svg').classList.toggle('active');
  })
})
moreBtn.forEach((item) => {
  item.addEventListener('click', function () {
    item.previousElementSibling.classList.add('active');
    item.classList.remove('d-block');
    item.classList.add('d-none');
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
    if (t.minutes == 0 && t.seconds == 30) {
      minutesSpan.style.color = '#CB0000';
      minutesSpan.parentElement.style.backgroundColor = '#fae5e5';
      secondsSpan.style.color = '#CB0000';
      secondsSpan.parentElement.style.backgroundColor = '#fae5e5';
      document.querySelector('.time-remain').classList.add('error-remain');
    }
    if (t.minutes == 0 && t.seconds == 0) {
      clearInterval(timeinterval);
      //_____________ این سایت عوض شود______________________________________________________
      window.open("https://getbootstrap.com");
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

var cardnumber = document.getElementById("cardnumber");
function sunnyweb_check_number(event) {
  let creditCardDigitArray = []
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

// cart list
const myCartsArray = [
  {
    cartNumber : "6037 9954 1234 6382" ,
    cartMonth : "08" ,
    cartYear : "06" ,
    cartSrc : "./assets/img/bank-iran/meli.png"
  },
  {
    cartNumber : "6219 8654 1234 6382" ,
    cartMonth : "04" ,
    cartYear : "00" ,
    cartSrc : "./assets/img/bank-iran/saman.png"
  },
  {
    cartNumber : "5894 6354 1234 6382",
    cartMonth : "01",
    cartYear : "02" ,
    cartSrc : "./assets/img/bank-iran/refah.png"
  },
  {
    cartNumber : "6219 8610 1546 1482",
    cartMonth : "05",
    cartYear : "09" ,
    cartSrc : "./assets/img/bank-iran/saman.png"
  }
]

// filter card number
let filteredArray = [...myCartsArray]

function filterCardNumber(num) {
  let newNum = [...num]
  for (let [enterNumIndex , enterNum] of Object.entries(newNum)) {
    for (let [arrayElementIndex , arrayElement] of Object.entries(filteredArray)) {
      for (let [arrayElementNumIndex , arrayElementNum] of Object.entries([...arrayElement.cartNumber])) {
        if (newNum[enterNumIndex] !== [...arrayElement.cartNumber][enterNumIndex]){
          filteredArray.splice(arrayElementIndex,1)
          break

        }
      }
      
    }
    
  }
}

// این متغیر در واقع جوابیه که سرور به ما میده که کارت معتبر است یا نه
let cardNumberIsOk = true
document.getElementById('cardnumber').addEventListener('input',function () {
  console.log(myCartsArray);
  filterCardNumber(this.value)
  showCartsUnderInput(filteredArray)
  if (this.value.length>18) {
    if (cardNumberIsOk){
      cvv2Digit.focus();
    }else{
      showCartListDropdown.classList="error"
    }
  }
})
function filter2 (event , value) {
  if (event.key == 'Backspace') {
    filteredArray = [...myCartsArray]
    filterCardNumber(value.value)
    // if(filteredArray.length > 0){
    //   cartDropdown.classList.toggle(`d-block`);
    // }
    showCartsUnderInput(filteredArray)
  }
}


// make cart number to star(*)
function cartNumberToStar(num) {
  const firstPart = num.slice(0, 10);
  const middlePart = '****';
  const lastPart = num.slice(14);
  const result = firstPart + middlePart + lastPart;
  return(result);
}

// show saved carts bottom of input
let cartDropdown = document.getElementById('cartDropdown');
let showCartListDropdown = document.getElementById('showCartListDropdown');
function showCartsUnderInput(arr) {
  cartDropdown.innerHTML= ""
  for (let el of arr) {
    let child = document.createElement('div')
    child.setAttribute('data-year', el.cartYear);
    child.setAttribute('data-month', el.cartMonth);
    child.classList ='rounded-8 cart-item bg-gradient-gray p-3 mb-1 mt-2 w-100 h-47 cursor-pointer d-flex align-items-center justify-content-between'
    child.innerHTML=
    `<div class="d-flex align-items-center justify-content-end w-100 gap-2" onclick="closeModal(event)">
        <p class="fw-bold ltr mb-0">${cartNumberToStar(el.cartNumber)}</p>
        <img alt="icon" src=${el.cartSrc} class="img-fluid d-block w-24">
      </div>`
    cartDropdown.appendChild(child)
  }
}
showCartsUnderInput(myCartsArray)

let cvv2 = document.getElementById('cvv2Digit');

function closeModal(event) {
  cartDropdown.classList.remove('d-block');
  let item = event.target.parentElement.parentElement
  let cartYear = item.dataset.year;
  let cartMonth = item.dataset.month;
  cartDropdown.classList.remove('active');
  cvv2.focus();
  monthInput.value = cartMonth;
  yearInput.value = cartYear;
  bankLogo.src = item.querySelector('img').src;
  cartNumber.value = item.querySelector('p').innerText;
}
showCartListDropdown.addEventListener('click', function () {
  cartDropdown.classList.toggle(`d-block`);
})
document.addEventListener('click', (event) => {
  if (!event.target.closest('.cartDropdown') && !event.target.closest('#showCartListDropdown')) {
    cartDropdown.classList.remove('d-block');
  }
})

// show saved carts in sideBar
let savedCartSideBar = document.getElementById('savedCartSideBar').children[0];
function showCartsInSideBar() {
  savedCartSideBar.innerHTML = ""
  let newChild = ''
  if(myCartsArray.length > 1){
    for (let i = 0; i < 2; i++) {
      newChild = document.createElement('div')
      newChild.setAttribute('data-year', myCartsArray[i].cartYear);
      newChild.setAttribute('data-month', myCartsArray[i].cartMonth);
      newChild.classList = "rounded-t-16 rounded-b-5 bg-gradient-gray cursor-pointer mb-2 px-3 w-288 h-47 d-flex align-items-center justify-content-between"
      newChild.innerHTML=
      `<svg class="cursor-pointer remove-cart" onclick="remove(this)" xmlns="http://www.w3.org/2000/svg" width="24" height="25"
        viewBox="0 0 24 25" fill="none">
        <path d="M8 8.5L16 16.5" stroke="#323232" stroke-width="1.5" stroke-linecap="round"
          stroke-linejoin="round" />
        <path d="M16 8.5L8 16.5" stroke="#323232" stroke-width="1.5" stroke-linecap="round"
        stroke-linejoin="round" />
      </svg>
      <div class="d-flex align-items-center gap-2 cart-item">
        <p class="fw-bold ltr mb-0">${cartNumberToStar(myCartsArray[i].cartNumber)}</p>
        <img alt="icon" src=${myCartsArray[i].cartSrc} class="img-fluid d-block w-32 h-32">
      </div>`
      savedCartSideBar.appendChild(newChild)
    }
  }else if (myCartsArray.length == 1) {
    newChild = document.createElement('div')
    newChild.setAttribute('data-year', myCartsArray[0].cartYear);
    newChild.setAttribute('data-month', myCartsArray[0].cartMonth);
    newChild.classList = "rounded-t-16 rounded-b-5 bg-gradient-gray cursor-pointer mb-2 px-3 w-288 h-47 d-flex align-items-center justify-content-between"
    newChild.innerHTML=
    `<svg class="cursor-pointer remove-cart" onclick="remove(this)" xmlns="http://www.w3.org/2000/svg" width="24" height="25"
      viewBox="0 0 24 25" fill="none">
      <path d="M8 8.5L16 16.5" stroke="#323232" stroke-width="1.5" stroke-linecap="round"
        stroke-linejoin="round" />
      <path d="M16 8.5L8 16.5" stroke="#323232" stroke-width="1.5" stroke-linecap="round"
      stroke-linejoin="round" />
    </svg>
    <div class="d-flex align-items-center gap-2 cart-item">
      <p class="fw-bold ltr mb-0">${cartNumberToStar(myCartsArray[0].cartNumber)}</p>
      <img alt="icon" src=${myCartsArray[0].cartSrc} class="img-fluid d-block w-32 h-32">
    </div>`
    savedCartSideBar.appendChild(newChild)
  }else{
    console.log("no cart added");
  }
}
showCartsInSideBar()

// show saved carts in Modal
let modalBody = document.getElementById('modal-body');
function showCartsInModal() {
  modalBody.innerHTML = ""
  for (let el of myCartsArray) {
    let newChild = document.createElement('div')
    newChild.setAttribute('data-year', el.cartYear);
    newChild.setAttribute('data-month', el.cartMonth);
    newChild.classList = "rounded-t-16 rounded-b-5 cursor-pointer border bg-gradient-gray mb-2 px-3 w-100 h-47 d-flex align-items-center justify-content-between"
    newChild.innerHTML=
   `<svg class="cursor-pointer remove-cart" onclick="remove(this)" xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25"
      fill="none">
      <path d="M8 8.5L16 16.5" stroke="#323232" stroke-width="1.5" stroke-linecap="round"
        stroke-linejoin="round"></path>
      <path d="M16 8.5L8 16.5" stroke="#323232" stroke-width="1.5" stroke-linecap="round"
        stroke-linejoin="round"></path>
    </svg>
    <div class="cart-item d-flex align-items-center gap-2 flex-grow-1 justify-content-end h-100" data-bs-dismiss="modal">
      <p class="fw-bold ltr mb-0">${cartNumberToStar(el.cartNumber)}</p>
      <img alt="icon" src=${el.cartSrc} class="img-fluid d-block w-32 h-32">
    </div>`
      modalBody.appendChild(newChild)
  }
}
showCartsInModal()
// show saved carts in Modal Mobile Version
let mobileModalBody = document.getElementById('mobile-modal-body');
function showCartsInModalMobile() {
  mobileModalBody.innerHTML = ""
  for (let [elIndex , el] of Object.entries(myCartsArray)) {
    let newChild = document.createElement('div')
    newChild.setAttribute('data-year', el.cartYear);
    newChild.setAttribute('data-month', el.cartMonth);
    newChild.classList = "rounded-8 bg-gray4 mb-2 cursor-pointer px-2 h-64 cart-item d-flex align-items-center justify-content-between"
    newChild.innerHTML=
    `<svg class="cursor-pointer remove-cart" onclick="remove(this)" xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25"
      fill="none">
      <path d="M8 8.5L16 16.5" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      </path>
      <path d="M16 8.5L8 16.5" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      </path>
    </svg>
    <div data-bs-dismiss="offcanvas" aria-label="Close" class="d-flex align-items-center gap-2 flex-grow-1 h-100 justify-content-end">
      <p class="fw-bold ltr mb-0">${cartNumberToStar(el.cartNumber)}</p>
      <img alt="icon" src=${el.cartSrc} class="img-fluid d-block w-32 h-32">
    </div>`
    mobileModalBody.appendChild(newChild)
    if (elIndex == 0) {
      newChild.style.backgroundColor = '#FF89651A'
      newChild.style.border = '1px solid #FF896533'
    }
  }
}
showCartsInModalMobile()
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
function remove(item) {
  let removableCart = item.parentElement.children[1].children[0].textContent 
  findedCart = myCartsArray.filter((el)=>cartNumberToStar(el.cartNumber) == removableCart)
  let removableCartIndex = myCartsArray.findIndex((obj)=> obj === findedCart[0])
  myCartsArray.splice(removableCartIndex, 1);
  showCartsInModal()
  showCartsInSideBar()
  showCartsInModalMobile()
}

// capcha Enter
let secondPass = document.getElementById('secondPass');
let capchacode =  document.getElementById('capcha')
capchacode.addEventListener('input',function () {
if (capchacode.value.length === 6){
  secondPass.focus()
  capchacode.blur()
}
})

// set just number to input

$(".justNumber").keypress(function (e) {
  var charCode = (e.which) ? e.which : e.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }
});

// second password

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

// enter submit buttom
payment.addEventListener('click',function (e) {
  e.preventDefault();
  let formArray = [ cardnumber.value , cvv2.value , monthInput.value , yearInput.value , capchacode.value , secondPass.value ]
  for (let arr of formArray){
    if (!arr) {
      if(arr === cardnumber.value){
        showCartListDropdown.classList="error"
        document.getElementById("getErrorcartNum").style.color = "#CB0000"
      }
      if(arr === cvv2.value){
        cvv2.parentElement.classList="error"
        document.getElementById("getErrorcvv2").style.color = "#CB0000"
      }
      if( arr === monthInput.value ){
        monthInput.classList="error"
        document.getElementById("getErrorcartDate").style.color = "#CB0000"
      }
      if( arr === yearInput.value ){
        yearInput.classList="error"
        document.getElementById("getErrorcartDate").style.color = "#CB0000"
        document.getElementById("svgErrorDate").classList = "d-block position-absolute errorIcon start-0 flex-shrink-0 ms-2"
      }
      if( arr === capchacode.value ){
        capchacode.parentElement.classList="error"
        document.getElementById("getErrorcapchacode").style.color = "#CB0000"
      }
      if( arr === secondPass.value ){
        secondPass.parentElement.classList="error";
        document.getElementById('getErrorsecondPass').style.color="#CB0000"
      } 
    }
  }
if (cardnumber.value || cvv2.value || monthInput.value || yearInput.value || capchacode.value || secondPass.value ){
  Array.from(document.getElementsByClassName('.getError')).forEach((item)=>{
    item.classList.add('error')
  })
}

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
    if (yearInput.value || monthInput.value) {
      if (!yearInput.value) {
        yearInput.focus();
      }else if (!monthInput.value) {
        monthInput.focus()
      }else{
        capcha.focus();
        cvv2Digit.blur()
      }
    }else{
      monthInput.focus();
      cvv2Digit.blur()
    }
  }
})

monthInput.addEventListener('input',function (event) {
  // Check if the input value is between 0 and 12
  if (this.value < 0 || this.value > 12) {
    this.value = "";
  }
  // next feild
  if (this.value.length>1) {
    yearInput.focus();
  }
})
const capcha =  document.getElementById('capcha')
yearInput.addEventListener('input',function () {
    // Check if the input value is between 0 and 12
    if (this.value < 0 || this.value > 12) {
      this.value = "";
    }
  if (this.value.length>1) {
    capcha.focus();
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