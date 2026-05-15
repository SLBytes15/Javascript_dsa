function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function insertionSort(head) {
  if (!head || !head.next) return head;

  // 1. Create a dummy node to act as the start of our sorted list
  let dummy = new Node(0);
  let current = head;

  while (current !== null) {
    // At each step, we save the next node to process
    let nextNode = current.next;

    // 2. Find the right place to insert 'current' in the sorted list
    // We start searching from the beginning of the dummy list
    let prev = dummy;
    while (prev.next !== null && prev.next.val < current.val) {
      prev = prev.next;
    }

    // 3. Insert 'current' between 'prev' and 'prev.next'
    current.next = prev.next;
    prev.next = current;

    // 4. Move to the next node in the original list
    current = nextNode;
  }

  return dummy.next; // The real head is after the dummy
}