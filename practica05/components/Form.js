import CustomInput from "./CustomInput";

export default function Form() {
    const form = document.createElement('form');
    form.classList = "form";
    const div = document.createElement('div');
    div.classList = "button-container";
    const button = document.createElement('button');
    button.textContent = "Ingresar";
    button.classList = "button"
    
    const inputs = [
        {
            labelText: "Nombre del Paciente",
            placeholderText: "Escriba su nombre",
            id: "name",
            required: "required"
        },
        {
            labelText: "Teléfono del Paciente",
            placeholderText: "Escriba su número telefónico",
            id: "phone",
            required: "required"
        },
        {
            labelText: "Correo electrónico",
            placeholderText: "Escriba su dirección de correo electrónico",
            id:"email",
            required: "required"
        },
        {
            labelText: "Síntomas",
            placeholderText: "Escriba sus síntomas",
            id: "symptoms",
            required: "required"
        },
    ];

    button.addEventListener("click", (e) => {
        e.preventDefault();
        const inputArr = document.querySelectorAll('input');
        const [ name, phone, email, symptoms ] = inputArr;
        console.log(name.value, phone.value, email.value, symptoms.value);
    });
    
    for (let i = 0; i < inputs.length; i++) {
        form.appendChild(CustomInput(inputs[i]));
    };

    form.appendChild(div);
    div.appendChild(button);
    
    return form;
};