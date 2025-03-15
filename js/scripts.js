/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// Função para lidar com a validação e envio do formulário
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Limpar erros antigos
    clearErrors();

    // Obter os campos do formulário
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const message = document.getElementById("message");

    let isValid = true;

    // Verifica se os campos obrigatórios estão preenchidos
    if (!name.value.trim()) {
        showError(name, "Um nome é necessário.");
        isValid = false;
    }

    if (!email.value.trim()) {
        showError(email, "Um email válido é necessário.");
        isValid = false;
    } else if (!isValidEmail(email.value.trim())) {
        showError(email, "Por favor, insira um email válido.");
        isValid = false;
    }

    if (!phone.value.trim()) {
        showError(phone, "Número de telefone é necessário.");
        isValid = false;
    }

    if (!message.value.trim()) {
        showError(message, "Uma mensagem é necessária.");
        isValid = false;
    }

    // Se for válido, simula o envio e exibe mensagem de sucesso
    if (isValid) {
        // Simulando sucesso no envio
        document.getElementById("submitSuccessMessage").classList.remove("d-none");
        document.getElementById("submitErrorMessage").classList.add("d-none");

        // Reseta o formulário após o envio simulado
        setTimeout(() => {
            document.getElementById("contactForm").reset();
        }, 2000);
    } else {
        // Exibe mensagem de erro
        document.getElementById("submitSuccessMessage").classList.add("d-none");
        document.getElementById("submitErrorMessage").classList.remove("d-none");
    }
});

// Função para limpar erros anteriores
function clearErrors() {
    const formGroups = document.querySelectorAll('.form-group');
    formGroups.forEach(group => {
        const feedback = group.querySelector('.invalid-feedback');
        if (feedback) {
            feedback.style.display = 'none';
            group.classList.remove('has-error');
        }
    });
}

// Função para exibir erro específico
function showError(element, message) {
    const formGroup = element.closest('.form-group');
    const feedback = formGroup.querySelector('.invalid-feedback');
    if (feedback) {
        feedback.innerText = message;
        feedback.style.display = 'block';
        formGroup.classList.add('has-error');
    }
}

// Função para validar email
function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
}

