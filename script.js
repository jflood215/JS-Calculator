class Caluclator {
    constructor(prevValue, currentValue){
        this.prevValue = prevValue
        this.currentValue = currentValue
    }
}

// variables to select our buttons and values based on custom data attributes
// went with data attributes so multiple classes weren't needed
const numButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const clearButton = document.querySelector('[data-clear]')
const prevValue = document.querySelector('[data-prev-value]')
const currentValue = document.querySelector('[data-current-value]')
