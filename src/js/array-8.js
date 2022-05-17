(function () {
    /**
     * @Title: Implement A Basic Stack
     */

    lb(false, 'Implement A Basic Stack', true);

    // Stack
    lb('red', 'Custom Stack');

    const MAX_SIZE = 30;

    class Stack {
        constructor() {
            this.list = new Array(MAX_SIZE);
            this.top = -1;
        }

        push(item) {
            if (this.top >= MAX_SIZE) {
                console.log('Stack Overflow');
                return false;
            }
            this.list[++this.top] = item;
            return true;
        }

        pop() {
            if (this.isEmpty()) {
                console.log('Stack Underflow');
                return false;
            }
            let item = this.list[this.top];
            delete this.list[this.top];
            this.top--;
            return item;
        }

        peek() {
            if (this.isEmpty()) {
                console.log('Stack Underflow');
                return false;
            }
            return this.list[this.top];
        }

        isEmpty() {
            return this.top < 0;
        }
    }

    const stack = new Stack();
    const text = 'Hello World';

    for (let i = 0; i < text.length; i++) {
        stack.push(text.charAt(i));
    }

    let reversedText = '';

    while (!stack.isEmpty()) {
        console.log(stack);
        reversedText += stack.pop();
    }

    console.log('1=>', reversedText);

    // Javascript Built In Stack
    lb('red', 'Javascript Build In Stack');
    const jsStack = [];
    for (let i = 0; i < text.length; i++) {
        jsStack.push(text.charAt(i));
    }
    let reversedText2 = '';
    while (jsStack.length) {
        reversedText2 += jsStack.pop();
    }
    console.log('2=>', reversedText2);
})();
