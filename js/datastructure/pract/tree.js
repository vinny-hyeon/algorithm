// 트리 구조
// Node와 Branch를 이용해서, 사이클을 이루지 않도록 구성한 데이터 구조
// 이진 트리 = 최대 branch가 2인 트리
// 이진 탐색 트리(BST) = 왼쪽 노드는 해당 부모 노드보다 작은 값, 오른쪽 노드는 해당 부모 노드보다 큰 값을 가지고 있음! => 둘다 작으면? 둘다 크면?
// ㄴ 장점: 데이터 검색 단점 : 복잡

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function NodeMgmt(head) {
  this.head = head;
  function insert(value) {
    this.current_node = this.head;
    while (true) {
      if (value < this.current_node.value) {
        if (this.current_node.left != null)
          this.current_node = this.current_node.left;
        else {
          this.current_node.left = Node(value);
          break;
        }
      } else {
        if (this.current_node.right != null)
          this.current_node = this.current_node.right;
        else {
          this.current_node.right = Node(value);
          break;
        }
      }
    }
  }
}
// root Node
let head = Node(1);
let BST = NodeMgmt(head);
BST.insert(2);
