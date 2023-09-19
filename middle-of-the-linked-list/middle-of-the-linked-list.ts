/**
 * Definition for singly-linked list.
 */
class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}



function middleNode(head: ListNode | null): ListNode | null {
    let middle = head;
    let end = head;

    while (end !== null && end.next !== null) {
        middle = middle?.next;
        end = end.next.next;
    }

    return middle;
};