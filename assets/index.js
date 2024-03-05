let currentLabel = '';

const inputs = document.querySelectorAll('[name="seat"]');

for(let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('click', (event) => {
        const label = document.querySelector(`label[for="${event.target.getAttribute('id')}"]`)

        if(currentLabel != '') {
            document.querySelector(`label[for="${currentLabel}"]`).classList.toggle('seat-form-label-checked');
        }

        currentLabel = label.getAttribute('for');
        label.classList.toggle('seat-form-label-checked');
    });
}