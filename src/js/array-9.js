(function () {
    /**
     * @Title: Implement A Basic Queue
     */

    lb(false, 'Implement A Basic Queue', true);

    // Stack
    lb('red', 'Custom Queue');

    const MAX_SIZE = 30;

    class Queue {
        constructor() {
            this.front = 0;
            this.rear = 0;
            this.queue = new Array(MAX_SIZE);
        }

        enqueue(item) {
            if (this.rear === MAX_SIZE) {
                console.log('Queue is Full');
                return false;
            }
            this.queue[this.rear++] = item;
        }

        dequeue() {
            if (this.isEmpty()) {
                console.log('Queue is Empty');
                return;
            }
            const item = this.queue[this.front];
            for (let i = 0; i < this.rear - 1; i++) {
                this.queue[i] = this.queue[i + 1];
            }
            delete this.queue[--this.rear];
            return item;
        }

        showQueue() {
            if (this.isEmpty()) {
                console.log('Queue is Empty');
                return false;
            }
            for (let i = this.front; i < this.rear; i++) {
                console.log('Displaying=>', this.queue[i]);
            }
        }

        next() {
            if (this.isEmpty()) {
                console.log('Queue is Empty');
                return;
            }
            return this.queue[this.front];
        }

        isEmpty() {
            return this.front === this.rear;
        }
    }
    const queue = new Queue();

    queue.enqueue('Task One');
    queue.enqueue('Task Two');
    queue.enqueue('Task Three');
    queue.enqueue('Task Four');
    queue.enqueue('Task Five');
    queue.dequeue();
    queue.dequeue();
    console.log(queue.showQueue());
    console.log(queue.next());
    console.log(queue);
})();
