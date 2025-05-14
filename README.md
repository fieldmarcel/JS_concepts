 event bubbling and capturing are the ways of event propagation in a DOM tree. 
 in BUBBLING, event starts from target element and bubbles upwards to its ancestors .
 in CAPTURING, event starts from grandparent/parent(as per the example ) to child before reaching the tget element.

 EVENT DELEGATION- its a tech whee we attach a single event handlr(listner)to parent elemnt instead of multiple child elements

 so its improves perfromance , and we have to write lesser code tha earlier for eac child .

 STOP PROPAGATION- it stops the propagation of events either from  grandparent to child or vice versa .
