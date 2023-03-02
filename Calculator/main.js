const buttons = document.querySelectorAll('button')
//각 버튼을 컨트롤하는 변수 선언.

const displayElement = document.querySelector('input')
//값을 표시해주는 text창 컨트롤

class Calculator {
    constructor(displayElement) {
        this.displayElement = displayElement
        this.displayContent = ''
        this.clear()
    } //생성자로 초기화하는 부분

    appendNumber(number) {            //버튼을 클릭할 때 마다 함수 실행
        this.displayContent += number
    }
    appendOperator(operator) {
        this.displayContent += operator
    }

    updateDisplay() {
        this.displayElement.value = this.displayContent
    }

    clear() {
        this.displayContent = ''
        this.displayElement.value = 0
    }
    
    compute() {
        this.displayContent = eval(this.displayContent
            .replace('\u00D7', '*')
            .replace('\u00F7', '/')
        ) //"\u00D7" 는 ×, "\u00F7"는 ÷를 의미
    }
}

const calculator = new Calculator(displayElement)

buttons.forEach(button => {              //화살표 함수로 리스트 원소를 순서대로넣음
    button.addEventListener('click', () => {
        switch (button.dataset.type) {
            case 'operator':                    //케이스별로 분류해 일치여부 판단
                console.log('operator')
                calculator.appendOperator(button.innerText)
                calculator.updateDisplay()
                break
            case 'ac':
                console.log('ac')
                calculator.clear()
                break
            case 'equals':
                console.log('equals')
                calculator.compute()
                calculator.updateDisplay()
                break
            default:
                console.log('number')
                calculator.appendNumber(button.innerText)
                calculator.updateDisplay()
                break
        }
    })
})




