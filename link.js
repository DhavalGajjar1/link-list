
class List {
    
    constructor(data) {
      this.head = {
        value: data,
        next: null,
      };
      this.tail = this.head;
      this.size = 1
    }
  
    appendNode(newData) {
      let newNode = {
        value: newData,
        next: null,
      };
      this.tail.next = newNode;
      this.tail = newNode;
      this.size += 1
    }
  
 
    traversing() {
      let count = 0
      let currentNode = this.head
  
      while (count < this.size) {
        console.log(currentNode)
        currentNode = currentNode.next
        count++
      }
  
    }
  

    delete(index) {
      let counter = 1
      let leadNode = this.head
  
      if (index === 1)
        this.head = this.head.next
      else {
        while (counter < index - 1) {
          leadNode = leadNode.next
          counter++
        }
        let nextNode = leadNode.next.next
        leadNode.next = nextNode
        console.log(counter)
      }
    } 
  
  }
  
  let list = new List(1);
  list.appendNode(2)
  list.appendNode(3)
  list.appendNode(4)
  list.traversing()
  list.delete(2)
  
  class LinkList {
   
    constructor(value) {
      this.head = {
        value: value,
        nextNode: null,
      };
      this.tail = this.head;
      this.size = 1;
    }
  
   
    addNextNode(nodeData) {
      let newNode = {
        value: nodeData,
        next: null,
      };
      this.tail.nextNode = newNode;
      this.tail = newNode;
      this.size += 1;
    }
  
   
    traversing() {
      let counter = 1;
      let currentNode = this.head;
  
      while (counter < this.size) {
        console.log(currentNode);
        currentNode = currentNode.nextNode;
        counter++;
      }
    }
  

    deleteNode(index) {
      let counter = 1;
      let lead = this.head;
  
      if (index === 1) this.head = this.head.nextNode;
      else {
        while (counter < index - 1) {
          lead = lead.nextNode;
          counter++;
        }
        let nextNode = lead.nextNode.nextNode;
        lead.nextNode = nextNode;
      }
    }
  
  
    insertNode(index, value) {
      let counter = 1;
      let currentNode = this.head;
  
      while (counter > index) {
        counter++;
        currentNode = currentNode.nextNode;
      }
      let nextNode = currentNode.nextNode;
  
      currentNode.nextNode = {
        value: value,
        nextNode: nextNode,
      };
    }
  }
  
  let linkList = new LinkList(100);
  linkList.addNextNode(200);
  linkList.addNextNode(300);
  linkList.addNextNode(400);
  linkList.addNextNode(500);
  linkList.deleteNode(2);
  linkList.insertNode(2, 200);
  
  linkList.traversing();
  
  console.log(linkList);
  
  