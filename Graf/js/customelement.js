class inputElements extends HTMLElement{
    connectedCallback(){
        this.innerHTML = ` <input value="1" step="1" name="ada" id="tSlider" type="range" min="1" max="10" onchange="updateTextInput1(this.value), slider()"><div id="sliderValue"></div>
        <input value="1" name="ada" id="tNum" type="number" min="1" max="10" onchange="verifi(), updateTextInput(this.value)"><br>
        <p id="p">${this.innerHTML}</p>`
    }
}

if(!customElements.get('in-put')){
    customElements.define('in-put', inputElements);
}