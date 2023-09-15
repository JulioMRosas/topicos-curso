export default function CustomInput({labelText, placeholderText}) {
    const div = document.createElement('div');
    div.classList = "field-container";

    div.innerHTML = `
        <label class="label">${labelText}</label>
        <input class="input" placeholder="${placeholderText}"/>
    `;
    return div;
}