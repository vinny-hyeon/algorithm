// Linked List
// 장점: 미리 데이터 공간을 할당하지 않아도 된다. (배열은 미리 해야함)
// 단점: 연결을 위한 별도 데이터 공간이 필요하므로, 저장공간 효율이 높지 않고, 접근 속도가 느리며, 중간 데이터 삭제 시 앞뒤 연결을 위한 재작업 필요

// 데이터 사이에 새로운 데이터 추가

class Node {
  constructor(props) {
    this.data = props.data;
    this.next = props.next;
  }
}

class NodeMgmt {
  constructor(props) {
    this.head = new Node(props.data);
  }
  add() {
    if (head == "") {
      this.head = new Node(data);
    } else {
      let node = this.head;
      while (node.next) {
        node = node.next;
        node.next = Node(data);
      }
    }
  }
}

linkedlisst1 = new NodeMgmt(0);
