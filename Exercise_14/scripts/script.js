'use strict';
window.onload = function () {
    let fullName = document.getElementById('fullName');
    let userName = document.getElementById('userName');
    let check = document.getElementById('check');
    let signUp = document.getElementById('signUp');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let repeatPassword = document.getElementById('repeatPassword');
    let form = document.getElementsByTagName('form')[0];
    let btnpopup = document.getElementById('popupbtn');
    let link = document.getElementById('link');
    let heading = document.getElementById('heading');
    let popUp = document.getElementById('popUp');
    let desc = document.getElementById('desc');
    const regexe = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/g;
    const regexForPass = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/g;

    fullName.oninput = function () {
        let regex = /[^a-zа-я\s]/gi;
        if (this.value.match(regex)) {
            this.value = this.value.replaceAll(regex, '');
            this.classList.add('invalid-input');
            this.nextElementSibling.style.display = 'block';
        } else {
            this.classList.remove('invalid-input');
            this.nextElementSibling.style.display = 'none';
        }
    };

    fullName.onblur = function () {
        this.classList.remove('invalid-input');
        this.nextElementSibling.style.display = 'none';
    };

    userName.oninput = function () {
        const regex = /[^a-zа-яе0-9_-]/gi;
        if (this.value.match(regex)) {
            this.value = this.value.replaceAll(regex, '');
            this.classList.add('invalid-input');
            this.nextElementSibling.style.display = 'block';
        } else {
            this.classList.remove('invalid-input');
            this.nextElementSibling.style.display = 'none';
        }
    }

    userName.onblur = function () {
        this.classList.remove('invalid-input');
        this.nextElementSibling.style.display = 'none';
    };

    email.oninput = function () {
        if (!this.value.match(regexe)) {
            this.classList.add('invalid-input');
            this.nextElementSibling.style.display = 'block';
        } else {
            this.classList.remove('invalid-input');
            this.nextElementSibling.style.display = 'none';
        }
    }

    email.onblur = function () {
        if (!this.value) {
            this.classList.remove('invalid-input');
            this.nextElementSibling.style.display = 'none';
        }
    };

    password.oninput = function () {
        if (!this.value.match(regexForPass)) {
            this.classList.add('invalid-input');
            this.nextElementSibling.style.display = 'block';
        } else {
            this.classList.remove('invalid-input');
            this.nextElementSibling.style.display = 'none';
        }
    }

    password.onblur = function () {
        if (!this.value) {
            this.classList.remove('invalid-input');
            this.nextElementSibling.style.display = 'none';
        }
    };


    check.onclick = function () {
        if (this.checked) {
            console.log('Согласен');
            console.log(this.checked);
        } else {
            console.log('Не согласен');
        }
    }

    function openModal() {
        popUp.style.opacity = '1';
        popUp.style.width = '100vw';
        popUp.style.height = '100vh';
        popUp.style.transform = 'translateX(0%)';
        popUp.style.transition = '1.2s ease-in-out';
        const body = document.querySelector('body');
        body.style.overflow = 'hidden';
    }

    function closeModal() {
        popUp.style.transform = 'translateX(100%)';
        popUp.style.transition = '1.2s ease-in-out';
        popUp.style.opacity = '0';
        popUp.style.width = '0';
        popUp.style.height = '0';
        const body = document.querySelector('body');
        body.style.overflow = 'auto';
    }

    function changePage() {
        document.getElementsByTagName('h1')[0].innerText = 'Log in to the system';
        fullName.parentElement.remove();
        email.parentElement.remove();
        repeatPassword.parentElement.remove();
        check.parentElement.remove();
        signUp.innerText = 'Sign In';
        link.innerText = 'Registration';
        link.classList.add('second_list');
        link.addEventListener('click', () => {
            location.reload();
        });
    }

    function handleInputChange(event){
        const input = event.target;
        input.value !== '' ?
            input.style.borderColor = 'greenyellow' :
            input.style.borderColor = '#C6C6C4';
    }

    const formInputs = document.querySelectorAll('form input');
    formInputs.forEach(input => {
        input.addEventListener('input', handleInputChange);
    })

    function checked(ev) {
        ev.preventDefault();
        if (!fullName.value) {
            fullName.classList.add('invalid-input');
            fullName.nextElementSibling.style.display = 'block';
            fullName.onblur = function () {
                fullName.classList.remove('invalid-input');
                fullName.nextElementSibling.style.display = 'none';
            };
        } else if (!userName.value) {
            userName.classList.add('invalid-input');
            userName.nextElementSibling.style.display = 'block';
            userName.onblur = function () {
                userName.classList.remove('invalid-input');
                userName.nextElementSibling.style.display = 'none';
            };
        } else if (!email.value || !email.value.match(regexe)) {
            email.classList.add('invalid-input');
            email.nextElementSibling.style.display = 'block';
            email.onblur = function () {
                email.classList.remove('invalid-input');
                email.nextElementSibling.style.display = 'none';
            };
        } else if (!password.value || !password.value.match(regexForPass)) {
            password.classList.add('invalid-input');
            password.nextElementSibling.style.display = 'block';
            password.onblur = function () {
                password.classList.remove('invalid-input');
                password.nextElementSibling.style.display = 'none';
            };
        } else if (password.value !== repeatPassword.value) {
            repeatPassword.classList.add('invalid-input');
            repeatPassword.nextElementSibling.style.display = 'block';
            repeatPassword.onblur = function () {
                repeatPassword.classList.remove('invalid-input');
                repeatPassword.nextElementSibling.style.display = 'none';
            };
        } else if (check.checked !== true) {
            check.nextElementSibling.style.display = 'block';
            check.onblur = function () {
                repeatPassword.nextElementSibling.style.display = 'none';
            };
        } else {
            let clients = [];
            let userInfo = {};
            let userFull = fullName.value;
            let name = userName.value;
            let mail = email.value;
            let pass = password.value;

            function addUserInfo(userFull, name) {
                this.userFull = userFull;
                this.name = name;
                this.email = mail;
                this.password = pass;
            }

            userInfo = new addUserInfo(userFull, name, mail);

            let client = localStorage.getItem('clients');
            if (client) {
                clients = JSON.parse(client);
            }
            clients.push(userInfo);
            localStorage.setItem('clients', JSON.stringify(clients));
            form.reset();
            openModal();
            formInputs.forEach(input =>{
                input.style.borderColor = '';
            });
        }

    }

    signUp.addEventListener("click", checked);

    function submit(e) {
        e.preventDefault();
        if (!userName.value) {
            userName.classList.add('invalid-input');
            userName.nextElementSibling.style.display = 'block';
            userName.onblur = function () {
                userName.classList.remove('invalid-input');
                userName.nextElementSibling.style.display = 'none';
            };

        } else if (!password.value) {
            password.classList.add('invalid-input');
            password.nextElementSibling.style.display = 'block';
            password.onblur = function () {
                password.classList.remove('invalid-input');
                password.nextElementSibling.style.display = 'none';
            };
        } else {
            let user = userName.value;
            let userPass = password.value;
            let client = localStorage.getItem('clients');
            let array = JSON.parse(client);
            console.log(array);
            for (let element of array) {
                userName.classList.remove('invalid-input');
                userName.nextElementSibling.nextElementSibling.style.display = 'none';
                password.classList.remove('invalid-input');
                password.nextElementSibling.nextElementSibling.style.display = 'none';
                if (element.name === user && element.password === userPass) {
                    heading.innerText = 'Welcome, ' + element.userFull + '!';
                    signUp.innerText = 'Exit';
                    signUp.removeEventListener('click', submit);
                    signUp.addEventListener('click', () => {
                        location.reload();
                    });
                    link.remove();
                    desc.remove();
                    userName.parentElement.remove();
                    password.parentElement.remove();

                    continue;

                } else if (element.name != user) {
                    userName.classList.add('invalid-input');
                    userName.nextElementSibling.nextElementSibling.style.display = 'block';
                    continue;
                } else if (element.password != userPass) {
                    password.classList.add('invalid-input');
                    password.nextElementSibling.nextElementSibling.style.display = 'block';
                    continue;
                }
            }
        }
    }


    btnpopup.addEventListener("click", function (e) {
        closeModal();
        changePage();
        signUp.removeEventListener("click", checked);
        signUp.addEventListener("click", submit);


    });

    link.addEventListener("click", function () {
        changePage();
        signUp.addEventListener("click", submit);
    });


}