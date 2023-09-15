import CustomInput from "./CustomInput";

export default function Form() {
    const form = document.createElement('form');
    form.classList = "form";
    
    const inputs = [
        {
            labelText: "Nombre del Paciente",
            placeholderText: "Escriba su nombre"
        },
        {
            labelText: "Teléfono del Paciente",
            placeholderText: "Escriba su número telefónico"
        },
        {
            labelText: "Correo electrónico",
            placeholderText: "Escriba su dirección de correo electrónico"
        },
    ];

    for (let i = 0; i < inputs.length; i++) {
        form.appendChild(CustomInput(inputs[i]));
        if (i == inputs.length - 1) {
            const div = document.createElement('div');
            div.classList = "button-container";
            const button = document.createElement('button');
            button.textContent = "Ingresar";
            button.classList = "button"
            form.appendChild(div);
            div.appendChild(button);
        };
    };

    return form;
};