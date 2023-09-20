export default function CustomInput({ labelText, placeholderText, id, required }) {
    const div = document.createElement('div');
    div.classList = "field-container";

    div.innerHTML = `
        <label class="label" for="${id}">${labelText}</label>
        <input class="input" id="${id}" placeholder="${placeholderText}" ${required}/>
    `;
    return div;
}