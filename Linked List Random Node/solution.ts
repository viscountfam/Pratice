class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

class Solution {
    head: ListNode | null
    constructor(head: ListNode | null){
        this.head = (head===null ? null : head)
    }

    getRandom(): number {
        let count = 0
        let current = this.head 
        while(current !== null){
            count++
            current = current.next
        }
        let random = Math.floor(Math.random() * count) + 1
        count = 0
        current = this.head
        while(count < random){
            current = current.next
        }
        return current.val
    }

    getRandomAlt() {
        let cnt = 0, res = null;
        
        for (let node = this.head; node !== null; node = node.next) {
            let r = Math.floor(Math.random() * ++cnt);
            if (r === 0) {
                res = node;        
            }
        }
        
        return res.val;
    }
}
