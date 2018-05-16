if (typeof theactualHead === 'undefined') {
  theactualHead = head;
}
if (head && head.next) {
   if (head.data === head.next.data) {
       if (head.next.next) {
           head.next = head.next.next;
       } else {
           head.next = null;
       }
       this.removeDuplicates(head);
   } else {
       this.removeDuplicates(head.next);
   }
}
return theactualHead;