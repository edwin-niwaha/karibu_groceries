const prodnameEl = document.querySelector('#prodname');
const tonnEl = document.querySelector('#tonn');
const amtpdEL = document.querySelector('#amtpd');
const ddbuyerEL = document.querySelector('#ddbuyer');
const sdateEL = document.querySelector('#sdate');
const refnoEL = document.querySelector('#refno');
const letters = /^[A-Za-z]+$/;

const form = document.querySelector('#salesfrm');


const checkProdName = () => {

    let valid = false;

    const prodname = prodnameEl.value.trim();

    if (!isRequired(prodname)) {
        // alert("Please select the user role!");
        showError(prodnameEl, '⛔️ Please select the produce name !');
        return false;
    }
    else {
        showSuccess(prodnameEl);
        valid = true;
    }
    return valid;
};

const checkTonnage = () => {

    let valid = false;

    const tonn = tonnEl.value.trim();

    if (!isRequired(tonn)) {
        showError(tonnEl, '⛔️ Tonnage field cannot be empty.');
    }
    else {
        showSuccess(tonnEl);
        valid = true;
    }
    return valid;
};


const checkAmount = () => {
    // var Textboxvalue = $("#amtpd").val();

    let valid = false;

    const amtpd = amtpdEL.value.trim();

    if (!isRequired(amtpd)) {
        showError(amtpdEL, '⛔️ Amount field cannot be empty.');
        return false;
    }
    else if (amtpd.length < 5) {
        showError(amtpdEL, '⛔️ Lengthen this to 5 characters or more.');
        return false;
    }
    else {
        showSuccess(amtpdEL);
        valid = true;
    }
    return valid;
};


const checkBuyer = () => {

    let valid = false;

    const ddbuyer = ddbuyerEL.value.trim();

    if (!isRequired(ddbuyer)) {
        // alert("Please select the user role!");
        showError(ddbuyerEL, '⛔️ Please enter the buyer !');
        return false;
    }
    else if (ddbuyer.length < 2) {
        showError(ddbuyerEL, '⛔️ Lengthen this to 2 characters or more.');

        return false;
    }
    else {
        showSuccess(ddbuyerEL);
        valid = true;
    }
    return valid;
};

//valide alphanumeric
function Validate(e) {
    var keyCode = e.keyCode || e.which;
    var lblError = document.getElementById("lblError");
    lblError.innerHTML = "";

    //Regex for Valid Characters i.e. Alphabets and Numbers.
    var regex = /^[A-Za-z0-9]+$/;

    //Validate TextBox value against the Regex.
    var isValid = regex.test(String.fromCharCode(keyCode));
    if (!isValid) {
        lblError.innerHTML = "Only Alphabets and Numbers allowed.";
    }

    return isValid;
}

const checkDate = () => {

    let valid = false;

    const sdate = sdateEL.value.trim();

    if (!isRequired(sdate)) {
        // alert("Please select the user role!");
        showError(sdateEL, '⛔️ Please enter date !');
        return false;
    }
    else {
        showSuccess(sdateEL);
        valid = true;
    }
    return valid;
};

const checkRef = () => {

    let valid = false;

    const refno = refnoEL.value.trim();

    if (!isRequired(refno)) {
        // alert("Please select the user role!");
        showError(refnoEL, '⛔️ Please enter the reference no !');
        return false;
    }
    else {
        showSuccess(refnoEL);
        valid = true;
    }
    return valid;
};

const isRequired = value => value === '' ? false : true;

const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}


form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate fields
    let isUsernameValid = checkProdName(),
        isProdValid = checkProdName(),
        isTonnValid = checkTonnage(),
        isAmountValid = checkAmount(),
        isValidBuyer = checkBuyer(),
        isValidDate = checkDate(),
        isValidRefno = checkRef();

    let isFormValid = isUsernameValid &&
        isProdValid &&
        isTonnValid &&
        isAmountValid &&
        isValidBuyer &&
        isValidDate &&
        isValidRefno;

    // submit to the server if the form is valid
    if (isFormValid) {
        alert('✅ Transaction recorded successfully');
        // Redirecting to other page or webste code. 
        window.location = "https://www.javascripttutorial.net/javascript-dom/javascript-form-validation/";
    }
});


const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'prodname':
            checkProdName();
            break;
        case 'tonn':
            checkTonnage();
            break;
        case 'amtpd':
            checkAmount();
            break;
        case 'ddbuyer':
            checkBuyer();
            break;
        case 'sdate':
            checkDate();
            break;
        case 'refno':
            checkRef();
            break;
    }
}));

//validate numbers only
function functionx(evt) {
    if (evt.charCode > 31 && (evt.charCode < 48 || evt.charCode > 57)) {
        alert("Only numbers are allowed");
        return false;
    }
}
