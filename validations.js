let correctWay = /^[A-Za-z]+$/;
let strongPassword = /^.{8,}$/;

function validations() {
    let EmptyName = document.getElementById('emptyName');
    let EmptyEmail = document.getElementById('emptyEmail');
    let EmptyMob = document.getElementById('emptyMob');
    let EmptyPass = document.getElementById('emptyPass');
    let EmptyCpass = document.getElementById('emptyCpass');

    let UserFname = document.getElementById('userFname').value;
    let Mail = document.getElementById('mail').value;
    let Mob = document.getElementById('mob').value;
    let password = document.getElementById('pass').value;
    let cpassword = document.getElementById('cpass').value;

    if (UserFname === "") {
        EmptyName.innerHTML = "Name is required";
        return false;
    } else if ((UserFname.length <= 2) || (UserFname.length > 20)) {
        EmptyName.innerHTML = "UserName must be 3 character and less than 20 character";
        return false;
    } else if (UserFname.match(correctWay)) {
        true;
    } else {
        EmptyName.innerHTML = "Only alphabets are allowed";
        return false;
    }

    if (Mail === "") {
        EmptyEmail.innerHTML = "Email is required";
        return false;
    }

    if (Mob.length !== 10) {
        EmptyMob.innerHTML = "Mobile Number must be 10 digits";
        return false;
    }

    if (![7, 8, 9].includes(parseInt(Mob.charAt(0)))) {
        EmptyMob.innerHTML = "Mobile Number must start with 7, 8, or 9.";
        return false;
    }

    if (password === "") {
        EmptyPass.innerHTML = "Fill Password";
        return false;
    } else if (password.length < 5) {
        EmptyPass.innerHTML = "Password must be between 5 and 16 characters";
        return false;
    } else if (!password.match(strongPassword)) {
        EmptyPass.innerHTML = "Password must be at least 8 characters long.";
        return false;
    }

    if (cpassword === "") {
        EmptyCpass.innerHTML = "Confirm Password Required";
        return false;
    } else if (password !== cpassword) {
        EmptyCpass.innerHTML = "Passwords do not match!";
        return false;
    }

    if (validateForm()) {
        printData();
    }

    return false;
}

function validateForm() {
    return true; // Return true if the form is valid, false otherwise
}

function printData() {
    let UserFname = document.getElementById('userFname').value;
    let Mail = document.getElementById('mail').value;
    let Mob = document.getElementById('mob').value;
    // let password = document.getElementById('pass').value;
    // let cpassword = document.getElementById('cpass').value;

    console.log('Name:', UserFname);
    console.log('Email:', Mail);
    console.log('Mobile:', Mob);
    // console.log('Password:', password);
    // console.log('Confirm Password:', cpassword);


    // Reset form fields after printing data
    document.getElementById('userFname').value = '';
    document.getElementById('mail').value = '';
    document.getElementById('mob').value = '';
    document.getElementById('pass').value = '';
    document.getElementById('cpass').value = '';

}