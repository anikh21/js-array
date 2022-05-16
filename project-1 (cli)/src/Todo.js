/**
 * @param {Array} arr
 */

function generateId(arr) {
    if (arr.length === 0) return 1;
    return arr[arr.length - 1].id + 1;
}

/**
 * @property todoList
 * @method addItem
 * @method update
 * @method done
 * @method next
 * @method find
 * @method list
 */

class Todo {
    constructor(todoList = []) {
        this.todoList = todoList;
    }

    addItem(text) {
        const item = {
            text,
            id: generateId(this.todoList),
            created: new Date(),
        };
        this.todoList.push(item);
    }

    update(id, text) {
        for (let i = 0; i < this.todoList.length; i++) {
            if (this.todoList[i].id === id) {
                this.todoList[i].text = text;
                break;
            }
        }
    }

    done(id = 1) {
        if (id === 1) this.todoList.shift();
        this.todoList.forEach((item, index) => {
            if (item.id === id) {
                this.todoList.splice(index, 1);
            }
        });
    }

    next() {
        return this.todoList[0];
    }

    find(term) {
        const result = [];
        for (let i = 0; i < this.todoList.length; i++) {
            const item = this.todoList[i];
            if (item.text.toLowerCase().includes(term.toLowerCase())) {
                result.push(item);
            }
        }
        return result;
    }

    list() {
        return this.todoList;
    }
}

module.exports = Todo;
