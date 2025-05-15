const questionData = {
  questions: [
    {
      question: "1. Write a program to search an element from a list. Give user the option to perform Linear or Binary search.",
      solution: `
        <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
            <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
            <pre><code class="language-c">
#include &lt;stdio.h&gt;

void linearSearch(int arr[], int n, int key) {
    for (int i = 0; i &lt; n; i++) {
        if (arr[i] == key) {
            printf("Found at index %d (position %d)\\n", i, i + 1);
            return;
        }
    }
    printf("Not found\\n");
}

void binarySearch(int arr[], int n, int key) {
    // Bubble Sort
    for (int i = 0; i &lt; n - 1; i++)
        for (int j = 0; j &lt; n - i - 1; j++)
            if (arr[j] &gt; arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }

    int low = 0, high = n - 1;
    while (low &lt;= high) {
        int mid = (low + high) / 2;
        if (arr[mid] == key) {
            printf("Found at index %d (position %d)\\n", mid, mid + 1);
            return;
        } else if (key &lt; arr[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    printf("Not found\\n");
}

int main() {
    int arr[100], n, key, choice;
    printf("Enter number of elements: ");
    scanf("%d", &n);

    printf("Enter %d elements:\\n", n);
    for (int i = 0; i &lt; n; i++)
        scanf("%d", &arr[i]);

    printf("Enter element to search: ");
    scanf("%d", &key);

    printf("Choose search method:\\n1. Linear Search\\n2. Binary Search\\n");
    scanf("%d", &choice);

    if (choice == 1)
        linearSearch(arr, n, key);
    else if (choice == 2)
        binarySearch(arr, n, key);
    else
        printf("Invalid choice\\n");

    return 0;
}
            </code></pre>
        </div>
        <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
            <h3 class="text-lg font-semibold">Expected Output:</h3>
            <pre>
Enter number of elements: 5
Enter 5 elements:
10 30 20 50 40
Enter element to search: 50
Choose search method:
1. Linear Search
2. Binary Search
1
Found at index 3 (position 4)
            </pre>
        </div>
      `,
    },
    {
      question: "2. WAP to sort a list of elements. Give user the option to perform sorting using Insertion sort, Bubble sort or Selection sort.",
      solution: `
        <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
            <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
            <pre><code class="language-c">
#include &lt;stdio.h&gt;

void bubbleSort(int arr[], int n) {
    for (int i = 0; i &lt; n-1; i++)
        for (int j = 0; j &lt; n-i-1; j++)
            if (arr[j] &gt; arr[j+1]) {
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
}

void insertionSort(int arr[], int n) {
    for (int i = 1; i &lt; n; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j &gt;= 0 && arr[j] &gt; key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}

void selectionSort(int arr[], int n) {
    for (int i = 0; i &lt; n-1; i++) {
        int min_idx = i;
        for (int j = i+1; j &lt; n; j++)
            if (arr[j] &lt; arr[min_idx])
                min_idx = j;
        int temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
    }
}

void display(int arr[], int n) {
    for (int i = 0; i &lt; n; i++)
        printf("%d ", arr[i]);
    printf("\\n");
}

int main() {
    int arr[100], n, choice;
    printf("Enter number of elements: ");
    scanf("%d", &n);
    printf("Enter elements: ");
    for (int i = 0; i &lt; n; i++)
        scanf("%d", &arr[i]);

    printf("Choose sorting method:\\n1. Bubble Sort\\n2. Insertion Sort\\n3. Selection Sort\\n");
    scanf("%d", &choice);

    switch(choice) {
        case 1: bubbleSort(arr, n); break;
        case 2: insertionSort(arr, n); break;
        case 3: selectionSort(arr, n); break;
        default: printf("Invalid choice\\n"); return 0;
    }

    printf("Sorted array: ");
    display(arr, n);
    return 0;
}
            </code></pre>
        </div>
        <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
            <h3 class="text-lg font-semibold">Expected Output:</h3>
            <pre>
Enter number of elements: 5
Enter elements: 30 10 50 20 40
Choose sorting method:
1. Bubble Sort
2. Insertion Sort
3. Selection Sort
2
Sorted array: 10 20 30 40 50
            </pre>
        </div>
      `,
    },
    {
      question: "3. Implement Linked List. Include functions for insertion, deletion and search of a number, reverse the list and concatenate two linked lists.",
      solution: `
        <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
            <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
            <pre><code class="language-c">
#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

struct Node {
    int data;
    struct Node* next;
};

// Insert at beginning
void insertAtBeginning(struct Node** head, int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->next = *head;
    *head = newNode;
}

// Insert at end
void insertAtEnd(struct Node** head, int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->next = NULL;
    
    if (*head == NULL) {
        *head = newNode;
        return;
    }
    
    struct Node* temp = *head;
    while (temp->next != NULL)
        temp = temp->next;
    
    temp->next = newNode;
}

// Delete a node with given key
void deleteNode(struct Node** head, int key) {
    struct Node *temp = *head, *prev = NULL;
    
    if (temp != NULL && temp->data == key) {
        *head = temp->next;
        free(temp);
        return;
    }
    
    while (temp != NULL && temp->data != key) {
        prev = temp;
        temp = temp->next;
    }
    
    if (temp == NULL) {
        printf("Element not found\\n");
        return;
    }
    
    prev->next = temp->next;
    free(temp);
}

// Search for a node
int search(struct Node* head, int key) {
    struct Node* current = head;
    int position = 1;
    
    while (current != NULL) {
        if (current->data == key)
            return position;
        current = current->next;
        position++;
    }
    
    return -1;
}

// Reverse the linked list
void reverse(struct Node** head) {
    struct Node *prev = NULL, *current = *head, *next = NULL;
    
    while (current != NULL) {
        next = current->next;
        current->next = prev;
        prev = current;
        current = next;
    }
    
    *head = prev;
}

// Concatenate two linked lists
void concatenate(struct Node** list1, struct Node* list2) {
    if (*list1 == NULL) {
        *list1 = list2;
        return;
    }
    
    struct Node* temp = *list1;
    while (temp->next != NULL)
        temp = temp->next;
    
    temp->next = list2;
}

// Display the linked list
void display(struct Node* head) {
    struct Node* temp = head;
    while (temp != NULL) {
        printf("%d -> ", temp->data);
        temp = temp->next;
    }
    printf("NULL\\n");
}

int main() {
    struct Node* head1 = NULL;
    struct Node* head2 = NULL;
    int choice, data, position;
    
    do {
        printf("\\n1. Insert at beginning\\n2. Insert at end\\n3. Delete\\n4. Search\\n");
        printf("5. Reverse\\n6. Create second list\\n7. Concatenate\\n8. Display\\n0. Exit\\n");
        printf("Enter choice: ");
        scanf("%d", &choice);
        
        switch(choice) {
            case 1:
                printf("Enter data: ");
                scanf("%d", &data);
                insertAtBeginning(&head1, data);
                break;
            case 2:
                printf("Enter data: ");
                scanf("%d", &data);
                insertAtEnd(&head1, data);
                break;
            case 3:
                printf("Enter element to delete: ");
                scanf("%d", &data);
                deleteNode(&head1, data);
                break;
            case 4:
                printf("Enter element to search: ");
                scanf("%d", &data);
                position = search(head1, data);
                if (position != -1)
                    printf("Element found at position %d\\n", position);
                else
                    printf("Element not found\\n");
                break;
            case 5:
                reverse(&head1);
                printf("List reversed\\n");
                break;
            case 6:
                printf("Enter data for second list (0 to stop): ");
                while (1) {
                    scanf("%d", &data);
                    if (data == 0) break;
                    insertAtEnd(&head2, data);
                }
                printf("Second list: ");
                display(head2);
                break;
            case 7:
                concatenate(&head1, head2);
                head2 = NULL; // Avoid double free
                printf("Lists concatenated\\n");
                break;
            case 8:
                printf("List: ");
                display(head1);
                break;
            case 0:
                break;
            default:
                printf("Invalid choice\\n");
        }
    } while (choice != 0);
    
    return 0;
}
            </code></pre>
        </div>
        <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
            <h3 class="text-lg font-semibold">Expected Output:</h3>
            <pre>
1. Insert at beginning
2. Insert at end
3. Delete
4. Search
5. Reverse
6. Create second list
7. Concatenate
8. Display
0. Exit
Enter choice: 1
Enter data: 10

1. Insert at beginning
2. Insert at end
3. Delete
4. Search
5. Reverse
6. Create second list
7. Concatenate
8. Display
0. Exit
Enter choice: 2
Enter data: 20

1. Insert at beginning
2. Insert at end
3. Delete
4. Search
5. Reverse
6. Create second list
7. Concatenate
8. Display
0. Exit
Enter choice: 8
List: 10 -> 20 -> NULL

1. Insert at beginning
2. Insert at end
3. Delete
4. Search
5. Reverse
6. Create second list
7. Concatenate
8. Display
0. Exit
Enter choice: 6
Enter data for second list (0 to stop): 30 40 0
Second list: 30 -> 40 -> NULL

1. Insert at beginning
2. Insert at end
3. Delete
4. Search
5. Reverse
6. Create second list
7. Concatenate
8. Display
0. Exit
Enter choice: 7
Lists concatenated

1. Insert at beginning
2. Insert at end
3. Delete
4. Search
5. Reverse
6. Create second list
7. Concatenate
8. Display
0. Exit
Enter choice: 8
List: 10 -> 20 -> 30 -> 40 -> NULL
            </pre>
        </div>
      `,
    },
    {
      question: "4. Implement Doubly Linked List. Include functions for insertion, deletion and search of a number, reverse the list.",
      solution: `
        <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
            <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
            <pre><code class="language-c">
#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

struct Node {
    int data;
    struct Node* next;
    struct Node* prev;
};

// Insert at beginning
void insertAtBeginning(struct Node** head, int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->next = *head;
    newNode->prev = NULL;
    
    if (*head != NULL)
        (*head)->prev = newNode;
    
    *head = newNode;
}

// Insert at end
void insertAtEnd(struct Node** head, int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->next = NULL;
    
    if (*head == NULL) {
        newNode->prev = NULL;
        *head = newNode;
        return;
    }
    
    struct Node* temp = *head;
    while (temp->next != NULL)
        temp = temp->next;
    
    temp->next = newNode;
    newNode->prev = temp;
}

// Delete a node with given key
void deleteNode(struct Node** head, int key) {
    struct Node* temp = *head;
    
    // If head node itself holds the key
    if (temp != NULL && temp->data == key) {
        *head = temp->next;
        if (*head != NULL)
            (*head)->prev = NULL;
        free(temp);
        return;
    }
    
    // Search for the key
    while (temp != NULL && temp->data != key)
        temp = temp->next;
    
    // If key not found
    if (temp == NULL) {
        printf("Element not found\\n");
        return;
    }
    
    // Unlink the node from linked list
    if (temp->prev != NULL)
        temp->prev->next = temp->next;
    if (temp->next != NULL)
        temp->next->prev = temp->prev;
    
    free(temp);
}

// Search for a node
int search(struct Node* head, int key) {
    struct Node* current = head;
    int position = 1;
    
    while (current != NULL) {
        if (current->data == key)
            return position;
        current = current->next;
        position++;
    }
    
    return -1;
}

// Reverse the doubly linked list
void reverse(struct Node** head) {
    struct Node *temp = NULL, *current = *head;
    
    while (current != NULL) {
        temp = current->prev;
        current->prev = current->next;
        current->next = temp;
        current = current->prev;
    }
    
    if (temp != NULL)
        *head = temp->prev;
}

// Display the doubly linked list
void display(struct Node* head) {
    struct Node* temp = head;
    printf("NULL <-> ");
    while (temp != NULL) {
        printf("%d <-> ", temp->data);
        temp = temp->next;
    }
    printf("NULL\\n");
}

int main() {
    struct Node* head = NULL;
    int choice, data, position;
    
    do {
        printf("\\n1. Insert at beginning\\n2. Insert at end\\n3. Delete\\n4. Search\\n");
        printf("5. Reverse\\n6. Display\\n0. Exit\\n");
        printf("Enter choice: ");
        scanf("%d", &choice);
        
        switch(choice) {
            case 1:
                printf("Enter data: ");
                scanf("%d", &data);
                insertAtBeginning(&head, data);
                break;
            case 2:
                printf("Enter data: ");
                scanf("%d", &data);
                insertAtEnd(&head, data);
                break;
            case 3:
                printf("Enter element to delete: ");
                scanf("%d", &data);
                deleteNode(&head, data);
                break;
            case 4:
                printf("Enter element to search: ");
                scanf("%d", &data);
                position = search(head, data);
                if (position != -1)
                    printf("Element found at position %d\\n", position);
                else
                    printf("Element not found\\n");
                break;
            case 5:
                reverse(&head);
                printf("List reversed\\n");
                break;
            case 6:
                printf("List: ");
                display(head);
                break;
            case 0:
                break;
            default:
                printf("Invalid choice\\n");
        }
    } while (choice != 0);
    
    return 0;
}
            </code></pre>
        </div>
        <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
            <h3 class="text-lg font-semibold">Expected Output:</h3>
            <pre>
1. Insert at beginning
2. Insert at end
3. Delete
4. Search
5. Reverse
6. Display
0. Exit
Enter choice: 1
Enter data: 10

1. Insert at beginning
2. Insert at end
3. Delete
4. Search
5. Reverse
6. Display
0. Exit
Enter choice: 2
Enter data: 20

1. Insert at beginning
2. Insert at end
3. Delete
4. Search
5. Reverse
6. Display
0. Exit
Enter choice: 2
Enter data: 30

1. Insert at beginning
2. Insert at end
3. Delete
4. Search
5. Reverse
6. Display
0. Exit
Enter choice: 6
List: NULL <-> 10 <-> 20 <-> 30 <-> NULL

1. Insert at beginning
2. Insert at end
3. Delete
4. Search
5. Reverse
6. Display
0. Exit
Enter choice: 5
List reversed

1. Insert at beginning
2. Insert at end
3. Delete
4. Search
5. Reverse
6. Display
0. Exit
Enter choice: 6
List: NULL <-> 30 <-> 20 <-> 10 <-> NULL
            </pre>
        </div>
      `,
    },
    {
      question: "5. Implement Circular Linked List. Include functions for insertion, deletion and search of a number, reverse the list.",
      solution: `
        <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
            <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
            <pre><code class="language-c">
#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

struct Node {
    int data;
    struct Node* next;
};

// Insert at beginning
void insertAtBeginning(struct Node** head, int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    
    if (*head == NULL) {
        newNode->next = newNode; // Point to itself
        *head = newNode;
        return;
    }
    
    struct Node* temp = *head;
    while (temp->next != *head)
        temp = temp->next;
    
    newNode->next = *head;
    temp->next = newNode;
    *head = newNode;
}

// Insert at end
void insertAtEnd(struct Node** head, int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    
    if (*head == NULL) {
        newNode->next = newNode; // Point to itself
        *head = newNode;
        return;
    }
    
    struct Node* temp = *head;
    while (temp->next != *head)
        temp = temp->next;
    
    temp->next = newNode;
    newNode->next = *head;
}

// Delete a node with given key
void deleteNode(struct Node** head, int key) {
    if (*head == NULL) {
        printf("List is empty\\n");
        return;
    }
    
    // If head is to be deleted
    if ((*head)->data == key && (*head)->next == *head) {
        free(*head);
        *head = NULL;
        return;
    }
    
    struct Node *temp = *head, *d;
    
    // If head is to be deleted but list has more nodes
    if ((*head)->data == key) {
        while (temp->next != *head)
            temp = temp->next;
        
        temp->next = (*head)->next;
        free(*head);
        *head = temp->next;
        return;
    }
    
    // Search for the key to be deleted
    while (temp->next != *head && temp->next->data != key)
        temp = temp->next;
    
    // If key not found
    if (temp->next == *head) {
        printf("Element not found\\n");
        return;
    }
    
    // Delete the node
    d = temp->next;
    temp->next = d->next;
    free(d);
}

// Search for a node
int search(struct Node* head, int key) {
    if (head == NULL)
        return -1;
    
    struct Node* temp = head;
    int position = 1;
    
    do {
        if (temp->data == key)
            return position;
        temp = temp->next;
        position++;
    } while (temp != head);
    
    return -1;
}

// Reverse the circular linked list
void reverse(struct Node** head) {
    if (*head == NULL)
        return;
    
    struct Node *prev = NULL, *current = *head, *next;
    
    do {
        next = current->next;
        current->next = prev;
        prev = current;
        current = next;
    } while (current != *head);
    
    (*head)->next = prev;
    *head = prev;
}

// Display the circular linked list
void display(struct Node* head) {
    if (head == NULL) {
        printf("List is empty\\n");
        return;
    }
    
    struct Node* temp = head;
    do {
        printf("%d -> ", temp->data);
        temp = temp->next;
    } while (temp != head);
    printf("(head)\\n");
}

int main() {
    struct Node* head = NULL;
    int choice, data, position;
    
    do {
        printf("\\n1. Insert at beginning\\n2. Insert at end\\n3. Delete\\n4. Search\\n");
        printf("5. Reverse\\n6. Display\\n0. Exit\\n");
        printf("Enter choice: ");
        scanf("%d", &choice);
        
        switch(choice) {
            case 1:
                printf("Enter data: ");
                scanf("%d", &data);
                insertAtBeginning(&head, data);
                break;
            case 2:
                printf("Enter data: ");
                scanf("%d", &data);
                insertAtEnd(&head, data);
                break;
            case 3:
                printf("Enter element to delete: ");
                scanf("%d", &data);
                deleteNode(&head, data);
                break;
            case 4:
                printf("Enter element to search: ");
                scanf("%d", &data);
                position = search(head, data);
                if (position != -1)
                    printf("Element found at position %d\\n", position);
                else
                    printf("Element not found\\n");
                break;
            case 5:
                reverse(&head);
                printf("List reversed\\n");
                break;
            case 6:
                printf("List: ");
                display(head);
                break;
            case 0:
                break;
            default:
                printf("Invalid choice\\n");
        }
    } while (choice != 0);
    
    return 0;
}
            </code></pre>
        </div>
        <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
            <h3 class="text-lg font-semibold">Expected Output:</h3>
            <pre>
1. Insert at beginning
2. Insert at end
3. Delete
4. Search
5. Reverse
6. Display
0. Exit
Enter choice: 2
Enter data: 10

1. Insert at beginning
2. Insert at end
3. Delete
4. Search
5. Reverse
6. Display
0. Exit
Enter choice: 2
Enter data: 20

1. Insert at beginning
2. Insert at end
3. Delete
4. Search
5. Reverse
6. Display
0. Exit
Enter choice: 1
Enter data: 5

1. Insert at beginning
2. Insert at end
3. Delete
4. Search
5. Reverse
6. Display
0. Exit
Enter choice: 6
List: 5 -> 10 -> 20 -> (head)

1. Insert at beginning
2. Insert at end
3. Delete
4. Search
5. Reverse
6. Display
0. Exit
Enter choice: 5
List reversed

1. Insert at beginning
2. Insert at end
3. Delete
4. Search
5. Reverse
6. Display
0. Exit
Enter choice: 6
List: 20 -> 10 -> 5 -> (head)
            </pre>
        </div>
      `,
    },
    {
      question: "6. Perform Stack operations using Linked List implementation.",
      solution: `
        <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
            <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
            <pre><code class="language-c">
#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

struct Node {
    int data;
    struct Node* next;
};

struct Stack {
    struct Node* top;
};

// Initialize stack
void initialize(struct Stack* stack) {
    stack->top = NULL;
}

// Check if stack is empty
int isEmpty(struct Stack* stack) {
    return stack->top == NULL;
}

// Push element onto stack
void push(struct Stack* stack, int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    if (newNode == NULL) {
        printf("Stack overflow\\n");
        return;
    }
    
    newNode->data = data;
    newNode->next = stack->top;
    stack->top = newNode;
    printf("%d pushed to stack\\n", data);
}

// Pop element from stack
int pop(struct Stack* stack) {
    if (isEmpty(stack)) {
        printf("Stack underflow\\n");
        return -1;
    }
    
    struct Node* temp = stack->top;
    int popped = temp->data;
    stack->top = stack->top->next;
    free(temp);
    
    return popped;
}

// Return the top element
int peek(struct Stack* stack) {
    if (isEmpty(stack)) {
        printf("Stack is empty\\n");
        return -1;
    }
    
    return stack->top->data;
}

// Display stack elements
void display(struct Stack* stack) {
    if (isEmpty(stack)) {
        printf("Stack is empty\\n");
        return;
    }
    
    struct Node* temp = stack->top;
    printf("Stack elements: ");
    while (temp != NULL) {
        printf("%d ", temp->data);
        temp = temp->next;
    }
    printf("\\n");
}

int main() {
    struct Stack stack;
    initialize(&stack);
    
    int choice, data;
    
    do {
        printf("\\n1. Push\\n2. Pop\\n3. Peek\\n4. Display\\n0. Exit\\n");
        printf("Enter choice: ");
        scanf("%d", &choice);
        
        switch(choice) {
            case 1:
                printf("Enter data to push: ");
                scanf("%d", &data);
                push(&stack, data);
                break;
            case 2:
                data = pop(&stack);
                if (data != -1)
                    printf("%d popped from stack\\n", data);
                break;
            case 3:
                data = peek(&stack);
                if (data != -1)
                    printf("Top element: %d\\n", data);
                break;
            case 4:
                display(&stack);
                break;
            case 0:
                break;
            default:
                printf("Invalid choice\\n");
        }
    } while (choice != 0);
    
    return 0;
}
            </code></pre>
        </div>
        <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
            <h3 class="text-lg font-semibold">Expected Output:</h3>
            <pre>
1. Push
2. Pop
3. Peek
4. Display
0. Exit
Enter choice: 1
Enter data to push: 10
10 pushed to stack

1. Push
2. Pop
3. Peek
4. Display
0. Exit
Enter choice: 1
Enter data to push: 20
20 pushed to stack

1. Push
2. Pop
3. Peek
4. Display
0. Exit
Enter choice: 1
Enter data to push: 30
30 pushed to stack

1. Push
2. Pop
3. Peek
4. Display
0. Exit
Enter choice: 4
Stack elements: 30 20 10 

1. Push
2. Pop
3. Peek
4. Display
0. Exit
Enter choice: 2
30 popped from stack

1. Push
2. Pop
3. Peek
4. Display
0. Exit
Enter choice: 3
Top element: 20
            </pre>
        </div>
      `,
    },
    {
      question: "7. Perform Stack operations using Array implementation.",
      solution: `
        <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
            <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
            <pre><code class="language-c">
#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

#define MAX 10

struct Stack {
    int items[MAX];
    int top;
};

// Initialize stack
void initialize(struct Stack* stack) {
    stack->top = -1;
}

// Check if stack is full
int isFull(struct Stack* stack) {
    return stack->top == MAX - 1;
}

// Check if stack is empty
int isEmpty(struct Stack* stack) {
    return stack->top == -1;
}

// Push element onto stack
void push(struct Stack* stack, int data) {
    if (isFull(stack)) {
        printf("Stack overflow\\n");
        return;
    }
    
    stack->items[++stack->top] = data;
    printf("%d pushed to stack\\n", data);
}

// Pop element from stack
int pop(struct Stack* stack) {
    if (isEmpty(stack)) {
        printf("Stack underflow\\n");
        return -1;
    }
    
    return stack->items[stack->top--];
}

// Return the top element
int peek(struct Stack* stack) {
    if (isEmpty(stack)) {
        printf("Stack is empty\\n");
        return -1;
    }
    
    return stack->items[stack->top];
}

// Display stack elements
void display(struct Stack* stack) {
    if (isEmpty(stack)) {
        printf("Stack is empty\\n");
        return;
    }
    
    printf("Stack elements: ");
    for (int i = stack->top; i >= 0; i--)
        printf("%d ", stack->items[i]);
    printf("\\n");
}

int main() {
    struct Stack stack;
    initialize(&stack);
    
    int choice, data;
    
    do {
        printf("\\n1. Push\\n2. Pop\\n3. Peek\\n4. Display\\n0. Exit\\n");
        printf("Enter choice: ");
        scanf("%d", &choice);
        
        switch(choice) {
            case 1:
                printf("Enter data to push: ");
                scanf("%d", &data);
                push(&stack, data);
                break;
            case 2:
                data = pop(&stack);
                if (data != -1)
                    printf("%d popped from stack\\n", data);
                break;
            case 3:
                data = peek(&stack);
                if (data != -1)
                    printf("Top element: %d\\n", data);
                break;
            case 4:
                display(&stack);
                break;
            case 0:
                break;
            default:
                printf("Invalid choice\\n");
        }
    } while (choice != 0);
    
    return 0;
}
            </code></pre>
        </div>
        <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
            <h3 class="text-lg font-semibold">Expected Output:</h3>
            <pre>
1. Push
2. Pop
3. Peek
4. Display
0. Exit
Enter choice: 1
Enter data to push: 10
10 pushed to stack

1. Push
2. Pop
3. Peek
4. Display
0. Exit
Enter choice: 1
Enter data to push: 20
20 pushed to stack

1. Push
2. Pop
3. Peek
4. Display
0. Exit
Enter choice: 1
Enter data to push: 30
30 pushed to stack

1. Push
2. Pop
3. Peek
4. Display
0. Exit
Enter choice: 4
Stack elements: 30 20 10 

1. Push
2. Pop
3. Peek
4. Display
0. Exit
Enter choice: 2
30 popped from stack

1. Push
2. Pop
3. Peek
4. Display
0. Exit
Enter choice: 3
Top element: 20
            </pre>
        </div>
      `,
    },
    {
      question: "8. Perform Queues operations using Circular Array implementation.",
      solution: `
        <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
            <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
            <pre><code class="language-c">
#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

#define MAX 5

struct Queue {
    int items[MAX];
    int front;
    int rear;
    int size;
};

// Initialize queue
void initialize(struct Queue* queue) {
    queue->front = -1;
    queue->rear = -1;
    queue->size = 0;
}

// Check if queue is full
int isFull(struct Queue* queue) {
    return queue->size == MAX;
}

// Check if queue is empty
int isEmpty(struct Queue* queue) {
    return queue->size == 0;
}

// Add element to queue
void enqueue(struct Queue* queue, int data) {
    if (isFull(queue)) {
        printf("Queue overflow\\n");
        return;
    }
    
    if (isEmpty(queue))
        queue->front = 0;
    
    queue->rear = (queue->rear + 1) % MAX;
    queue->items[queue->rear] = data;
    queue->size++;
    printf("%d enqueued to queue\\n", data);
}

// Remove element from queue
int dequeue(struct Queue* queue) {
    if (isEmpty(queue)) {
        printf("Queue underflow\\n");
        return -1;
    }
    
    int data = queue->items[queue->front];
    
    if (queue->front == queue->rear) {
        // Last element in queue
        queue->front = -1;
        queue->rear = -1;
    } else {
        queue->front = (queue->front + 1) % MAX;
    }
    
    queue->size--;
    return data;
}

// Get front element
int front(struct Queue* queue) {
    if (isEmpty(queue)) {
        printf("Queue is empty\\n");
        return -1;
    }
    
    return queue->items[queue->front];
}

// Display queue elements
void display(struct Queue* queue) {
    if (isEmpty(queue)) {
        printf("Queue is empty\\n");
        return;
    }
    
    printf("Queue elements: ");
    int count = 0;
    int i = queue->front;
    
    while (count < queue->size) {
        printf("%d ", queue->items[i]);
        i = (i + 1) % MAX;
        count++;
    }
    printf("\\n");
}

int main() {
    struct Queue queue;
    initialize(&queue);
    
    int choice, data;
    
    do {
        printf("\\n1. Enqueue\\n2. Dequeue\\n3. Front\\n4. Display\\n0. Exit\\n");
        printf("Enter choice: ");
        scanf("%d", &choice);
        
        switch(choice) {
            case 1:
                printf("Enter data to enqueue: ");
                scanf("%d", &data);
                enqueue(&queue, data);
                break;
            case 2:
                data = dequeue(&queue);
                if (data != -1)
                    printf("%d dequeued from queue\\n", data);
                break;
            case 3:
                data = front(&queue);
                if (data != -1)
                    printf("Front element: %d\\n", data);
                break;
            case 4:
                display(&queue);
                break;
            case 0:
                break;
            default:
                printf("Invalid choice\\n");
        }
    } while (choice != 0);
    
    return 0;
}
            </code></pre>
        </div>
        <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
            <h3 class="text-lg font-semibold">Expected Output:</h3>
            <pre>
1. Enqueue
2. Dequeue
3. Front
4. Display
0. Exit
Enter choice: 1
Enter data to enqueue: 10
10 enqueued to queue

1. Enqueue
2. Dequeue
3. Front
4. Display
0. Exit
Enter choice: 1
Enter data to enqueue: 20
20 enqueued to queue

1. Enqueue
2. Dequeue
3. Front
4. Display
0. Exit
Enter choice: 1
Enter data to enqueue: 30
30 enqueued to queue

1. Enqueue
2. Dequeue
3. Front
4. Display
0. Exit
Enter choice: 4
Queue elements: 10 20 30 

1. Enqueue
2. Dequeue
3. Front
4. Display
0. Exit
Enter choice: 2
10 dequeued from queue

1. Enqueue
2. Dequeue
3. Front
4. Display
0. Exit
Enter choice: 3
Front element: 20
            </pre>
        </div>
      `,
    },
    {
      question: "9. Create and perform different operations on Double-ended Queues using Linked List implementation.",
      solution: `
        <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
            <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
            <pre><code class="language-c">
#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

struct Node {
    int data;
    struct Node* next;
    struct Node* prev;
};

struct Deque {
    struct Node* front;
    struct Node* rear;
};

// Initialize deque
void initialize(struct Deque* deque) {
    deque->front = NULL;
    deque->rear = NULL;
}

// Check if deque is empty
int isEmpty(struct Deque* deque) {
    return deque->front == NULL;
}

// Insert at front
void insertFront(struct Deque* deque, int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    
    if (isEmpty(deque)) {
        deque->front = newNode;
        deque->rear = newNode;
        newNode->next = NULL;
        newNode->prev = NULL;
    } else {
        newNode->next = deque->front;
        newNode->prev = NULL;
        deque->front->prev = newNode;
        deque->front = newNode;
    }
    
    printf("%d inserted at front\\n", data);
}

// Insert at rear
void insertRear(struct Deque* deque, int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    
    if (isEmpty(deque)) {
        deque->front = newNode;
        deque->rear = newNode;
        newNode->next = NULL;
        newNode->prev = NULL;
    } else {
        newNode->next = NULL;
        newNode->prev = deque->rear;
        deque->rear->next = newNode;
        deque->rear = newNode;
    }
    
    printf("%d inserted at rear\\n", data);
}

// Delete from front
int deleteFront(struct Deque* deque) {
    if (isEmpty(deque)) {
        printf("Deque underflow\\n");
        return -1;
    }
    
    struct Node* temp = deque->front;
    int data = temp->data;
    
    if (deque->front == deque->rear) {
        // Only one element
        deque->front = NULL;
        deque->rear = NULL;
    } else {
        deque->front = deque->front->next;
        deque->front->prev = NULL;
    }
    
    free(temp);
    return data;
}

// Delete from rear
int deleteRear(struct Deque* deque) {
    if (isEmpty(deque)) {
        printf("Deque underflow\\n");
        return -1;
    }
    
    struct Node* temp = deque->rear;
    int data = temp->data;
    
    if (deque->front == deque->rear) {
        // Only one element
        deque->front = NULL;
        deque->rear = NULL;
    } else {
        deque->rear = deque->rear->prev;
        deque->rear->next = NULL;
    }
    
    free(temp);
    return data;
}

// Get front element
int getFront(struct Deque* deque) {
    if (isEmpty(deque)) {
        printf("Deque is empty\\n");
        return -1;
    }
    
    return deque->front->data;
}

// Get rear element
int getRear(struct Deque* deque) {
    if (isEmpty(deque)) {
        printf("Deque is empty\\n");
        return -1;
    }
    
    return deque->rear->data;
}

// Display deque elements
void display(struct Deque* deque) {
    if (isEmpty(deque)) {
        printf("Deque is empty\\n");
        return;
    }
    
    struct Node* temp = deque->front;
    printf("Deque elements: ");
    while (temp != NULL) {
        printf("%d ", temp->data);
        temp = temp->next;
    }
    printf("\\n");
}

int main() {
    struct Deque deque;
    initialize(&deque);
    
    int choice, data;
    
    do {
        printf("\\n1. Insert at Front\\n2. Insert at Rear\\n3. Delete from Front\\n");
        printf("4. Delete from Rear\\n5. Get Front\\n6. Get Rear\\n7. Display\\n0. Exit\\n");
        printf("Enter choice: ");
        scanf("%d", &choice);
        
        switch(choice) {
            case 1:
                printf("Enter data: ");
                scanf("%d", &data);
                insertFront(&deque, data);
                break;
            case 2:
                printf("Enter data: ");
                scanf("%d", &data);
                insertRear(&deque, data);
                break;
            case 3:
                data = deleteFront(&deque);
                if (data != -1)
                    printf("%d deleted from front\\n", data);
                break;
            case 4:
                data = deleteRear(&deque);
                if (data != -1)
                    printf("%d deleted from rear\\n", data);
                break;
            case 5:
                data = getFront(&deque);
                if (data != -1)
                    printf("Front element: %d\\n", data);
                break;
            case 6:
                data = getRear(&deque);
                if (data != -1)
                    printf("Rear element: %d\\n", data);
                break;
            case 7:
                display(&deque);
                break;
            case 0:
                break;
            default:
                printf("Invalid choice\\n");
        }
    } while (choice != 0);
    
    return 0;
}
            </code></pre>
        </div>
        <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
            <h3 class="text-lg font-semibold">Expected Output:</h3>
            <pre>
1. Insert at Front
2. Insert at Rear
3. Delete from Front
4. Delete from Rear
5. Get Front
6. Get Rear
7. Display
0. Exit
Enter choice: 1
Enter data: 10
10 inserted at front

1. Insert at Front
2. Insert at Rear
3. Delete from Front
4. Delete from Rear
5. Get Front
6. Get Rear
7. Display
0. Exit
Enter choice: 2
Enter data: 20
20 inserted at rear

1. Insert at Front
2. Insert at Rear
3. Delete from Front
4. Delete from Rear
5. Get Front
6. Get Rear
7. Display
0. Exit
Enter choice: 1
Enter data: 5
5 inserted at front

1. Insert at Front
2. Insert at Rear
3. Delete from Front
4. Delete from Rear
5. Get Front
6. Get Rear
7. Display
0. Exit
Enter choice: 7
Deque elements: 5 10 20 

1. Insert at Front
2. Insert at Rear
3. Delete from Front
4. Delete from Rear
5. Get Front
6. Get Rear
7. Display
0. Exit
Enter choice: 3
5 deleted from front

1. Insert at Front
2. Insert at Rear
3. Delete from Front
4. Delete from Rear
5. Get Front
6. Get Rear
7. Display
0. Exit
Enter choice: 4
20 deleted from rear

1. Insert at Front
2. Insert at Rear
3. Delete from Front
4. Delete from Rear
5. Get Front
6. Get Rear
7. Display
0. Exit
Enter choice: 7
Deque elements: 10 
            </pre>
        </div>
      `,
    },
    {
      question: "10. WAP to calculate factorial and to compute the factors of a given no. (i) using recursion, (ii) using iteration",
      solution: `
        <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
            <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
            <pre><code class="language-c">
#include &lt;stdio.h&gt;

// Factorial using recursion
unsigned long long factorialRecursive(int n) {
    if (n == 0 || n == 1)
        return 1;
    return n * factorialRecursive(n - 1);
}

// Factorial using iteration
unsigned long long factorialIterative(int n) {
    unsigned long long result = 1;
    for (int i = 2; i <= n; i++)
        result *= i;
    return result;
}

// Factors using recursion
void factorsRecursive(int n, int i) {
    if (i > n)
        return;
    
    if (n % i == 0)
        printf("%d ", i);
    
    factorsRecursive(n, i + 1);
}

// Factors using iteration
void factorsIterative(int n) {
    printf("Factors of %d (iterative): ", n);
    for (int i = 1; i <= n; i++) {
        if (n % i == 0)
            printf("%d ", i);
    }
    printf("\\n");
}

int main() {
    int num;
    printf("Enter a number: ");
    scanf("%d", &num);
    
    // Factorial calculations
    printf("Factorial of %d (recursive): %llu\\n", num, factorialRecursive(num));
    printf("Factorial of %d (iterative): %llu\\n", num, factorialIterative(num));
    
    // Factors calculations
    printf("Factors of %d (recursive): ", num);
    factorsRecursive(num, 1);
    printf("\\n");
    
    factorsIterative(num);
    
    return 0;
}
            </code></pre>
        </div>
        <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
            <h3 class="text-lg font-semibold">Expected Output:</h3>
            <pre>
Enter a number: 6
Factorial of 6 (recursive): 720
Factorial of 6 (iterative): 720
Factors of 6 (recursive): 1 2 3 6 
Factors of 6 (iterative): 1 2 3 6 
            </pre>
        </div>
      `,
    },
    {
      question: "11. (ii) WAP to display fibonacci series (i) using recursion, (ii) using iteration",
      solution: `
        <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
            <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
            <pre><code class="language-c">
#include &lt;stdio.h&gt;

// Fibonacci using recursion
int fibRecursive(int n) {
    if (n <= 1)
        return n;
    return fibRecursive(n - 1) + fibRecursive(n - 2);
}

// Display Fibonacci series using recursion
void fibSeriesRecursive(int n) {
    printf("Fibonacci Series (recursive): ");
    for (int i = 0; i < n; i++)
        printf("%d ", fibRecursive(i));
    printf("\\n");
}

// Display Fibonacci series using iteration
void fibSeriesIterative(int n) {
    printf("Fibonacci Series (iterative): ");
    
    if (n <= 0)
        return;
    
    if (n == 1) {
        printf("0\\n");
        return;
    }
    
    int a = 0, b = 1, c;
    printf("%d %d ", a, b);
    
    for (int i = 2; i < n; i++) {
        c = a + b;
        printf("%d ", c);
        a = b;
        b = c;
    }
    
    printf("\\n");
}

int main() {
    int terms;
    printf("Enter number of terms: ");
    scanf("%d", &terms);
    
    fibSeriesRecursive(terms);
    fibSeriesIterative(terms);
    
    return 0;
}
            </code></pre>
        </div>
        <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
            <h3 class="text-lg font-semibold">Expected Output:</h3>
            <pre>
Enter number of terms: 8
Fibonacci Series (recursive): 0 1 1 2 3 5 8 13 
Fibonacci Series (iterative): 0 1 1 2 3 5 8 13 
            </pre>
        </div>
      `,
    },
    {
      question: "12. WAP to calculate GCD of 2 number (i) with recursion (ii) without recursion",
      solution: `
        <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
            <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
            <pre><code class="language-c">
#include &lt;stdio.h&gt;

// GCD using recursion (Euclidean algorithm)
int gcdRecursive(int a, int b) {
    if (b == 0)
        return a;
    return gcdRecursive(b, a % b);
}

// GCD using iteration (Euclidean algorithm)
int gcdIterative(int a, int b) {
    int temp;
    while (b != 0) {
        temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

int main() {
    int num1, num2;
    printf("Enter two numbers: ");
    scanf("%d %d", &num1, &num2);
    
    printf("GCD of %d and %d (recursive): %d\\n", num1, num2, gcdRecursive(num1, num2));
    printf("GCD of %d and %d (iterative): %d\\n", num1, num2, gcdIterative(num1, num2));
    
    return 0;
}
            </code></pre>
        </div>
        <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
            <h3 class="text-lg font-semibold">Expected Output:</h3>
            <pre>
Enter two numbers: 48 18
GCD of 48 and 18 (recursive): 6
GCD of 48 and 18 (iterative): 6
            </pre>
        </div>
      `,
    },
    {
      question: "13. WAP to create a Binary Search Tree and include following operations in tree: (a) Insertion (Recursive and Iterative Implementation) (b) Deletion by copying (c) Deletion by Merging (d) Search a no. in BST (e) Display its preorder, postorder and inorder traversals Recursively (f) Display its preorder, postorder and inorder traversals Iteratively (g) Display its level-by-level traversals (h) Count the non-leaf nodes and leaf nodes (i) Display height of tree (j) Create a mirror image of tree (k) Check whether two BSTs are equal or not",
      solution: `
        <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
            <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
            <pre><code class="language-c">
#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

struct Node {
    int data;
    struct Node* left;
    struct Node* right;
};

// Create a new node
struct Node* createNode(int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->left = NULL;
    newNode->right = NULL;
    return newNode;
}

// (a) Recursive insertion
struct Node* insertRecursive(struct Node* root, int data) {
    if (root == NULL)
        return createNode(data);
    
    if (data < root->data)
        root->left = insertRecursive(root->left, data);
    else if (data > root->data)
        root->right = insertRecursive(root->right, data);
    
    return root;
}

// (a) Iterative insertion
struct Node* insertIterative(struct Node* root, int data) {
    struct Node* newNode = createNode(data);
    
    if (root == NULL)
        return newNode;
    
    struct Node *current = root, *parent = NULL;
    
    while (current != NULL) {
        parent = current;
        
        if (data < current->data)
            current = current->left;
        else if (data > current->data)
            current = current->right;
        else {
            // Duplicate value, free the new node and return
            free(newNode);
            return root;
        }
    }
    
    if (data < parent->data)
        parent->left = newNode;
    else
        parent->right = newNode;
    
    return root;
}

// Find minimum value node
struct Node* findMin(struct Node* node) {
    struct Node* current = node;
    
    while (current && current->left != NULL)
        current = current->left;
    
    return current;
}

// (b) Deletion by copying
struct Node* deleteByCopying(struct Node* root, int key) {
    if (root == NULL)
        return root;
    
    if (key < root->data)
        root->left = deleteByCopying(root->left, key);
    else if (key > root->data)
        root->right = deleteByCopying(root->right, key);
    else {
        // Node with only one child or no child
        if (root->left == NULL) {
            struct Node* temp = root->right;
            free(root);
            return temp;
        } else if (root->right == NULL) {
            struct Node* temp = root->left;
            free(root);
            return temp;
        }
        
        // Node with two children: Get the inorder successor (smallest in right subtree)
        struct Node* temp = findMin(root->right);
        
        // Copy the inorder successor's data to this node
        root->data = temp->data;
        
        // Delete the inorder successor
        root->right = deleteByCopying(root->right, temp->data);
    }
    
    return root;
}

// (c) Deletion by merging
struct Node* deleteByMerging(struct Node* root, int key) {
    if (root == NULL)
        return root;
    
    if (key < root->data)
        root->left = deleteByMerging(root->left, key);
    else if (key > root->data)
        root->right = deleteByMerging(root->right, key);
    else {
        // Node with only one child or no child
        if (root->left == NULL) {
            struct Node* temp = root->right;
            free(root);
            return temp;
        } else if (root->right == NULL) {
            struct Node* temp = root->left;
            free(root);
            return temp;
        }
        
        // Node with two children
        struct Node* temp = root->left;
        
        // Find the rightmost node in the left subtree
        while (temp->right != NULL)
            temp = temp->right;
        
        // Connect the right subtree to the rightmost node of the left subtree
        temp->right = root->right;
        
        // Save the left subtree
        temp = root->left;
        
        // Delete the node
        free(root);
        
        // Return the left subtree
        return temp;
    }
    
    return root;
}

// (d) Search a number in BST
struct Node* search(struct Node* root, int key) {
    if (root == NULL || root->data == key)
        return root;
    
    if (key < root->data)
        return search(root->left, key);
    
    return search(root->right, key);
}

// (e) Recursive traversals
void preorderRecursive(struct Node* root) {
    if (root != NULL) {
        printf("%d ", root->data);
        preorderRecursive(root->left);
        preorderRecursive(root->right);
    }
}

void inorderRecursive(struct Node* root) {
    if (root != NULL) {
        inorderRecursive(root->left);
        printf("%d ", root->data);
        inorderRecursive(root->right);
    }
}

void postorderRecursive(struct Node* root) {
    if (root != NULL) {
        postorderRecursive(root->left);
        postorderRecursive(root->right);
        printf("%d ", root->data);
    }
}

// Stack implementation for iterative traversals
struct Stack {
    struct Node* data[100];
    int top;
};

void initStack(struct Stack* stack) {
    stack->top = -1;
}

int isEmpty(struct Stack* stack) {
    return stack->top == -1;
}

void push(struct Stack* stack, struct Node* node) {
    stack->data[++stack->top] = node;
}

struct Node* pop(struct Stack* stack) {
    if (isEmpty(stack))
        return NULL;
    return stack->data[stack->top--];
}

struct Node* peek(struct Stack* stack) {
    if (isEmpty(stack))
        return NULL;
    return stack->data[stack->top];
}

// (f) Iterative traversals
void preorderIterative(struct Node* root) {
    if (root == NULL)
        return;
    
    struct Stack stack;
    initStack(&stack);
    push(&stack, root);
    
    printf("Preorder (iterative): ");
    while (!isEmpty(&stack)) {
        struct Node* node = pop(&stack);
        printf("%d ", node->data);
        
        // Push right child first so that left is processed first
        if (node->right)
            push(&stack, node->right);
        if (node->left)
            push(&stack, node->left);
    }
    printf("\\n");
}

void inorderIterative(struct Node* root) {
    if (root == NULL)
        return;
    
    struct Stack stack;
    initStack(&stack);
    struct Node* current = root;
    
    printf("Inorder (iterative): ");
    while (current != NULL || !isEmpty(&stack)) {
        // Reach the leftmost node
        while (current != NULL) {
            push(&stack, current);
            current = current->left;
        }
        
        // Current is NULL at this point
        current = pop(&stack);
        printf("%d ", current->data);
        
        // Visit right subtree
        current = current->right;
    }
    printf("\\n");
}

void postorderIterative(struct Node* root) {
    if (root == NULL)
        return;
    
    struct Stack stack1, stack2;
    initStack(&stack1);
    initStack(&stack2);
    
    push(&stack1, root);
    
    // First stack is used to get the reverse of postorder
    while (!isEmpty(&stack1)) {
        struct Node* node = pop(&stack1);
        push(&stack2, node);
        
        if (node->left)
            push(&stack1, node->left);
        if (node->right)
            push(&stack1, node->right);
    }
    
    // Second stack contains nodes in postorder (reversed)
    printf("Postorder (iterative): ");
    while (!isEmpty(&stack2)) {
        struct Node* node = pop(&stack2);
        printf("%d ", node->data);
    }
    printf("\\n");
}

// Queue implementation for level order traversal
struct Queue {
    struct Node* data[100];
    int front, rear;
};

void initQueue(struct Queue* queue) {
    queue->front = queue->rear = -1;
}

int isQueueEmpty(struct Queue* queue) {
    return queue->front == -1;
}

void enqueue(struct Queue* queue, struct Node* node) {
    if (queue->rear == 99)
        return;
    
    if (queue->front == -1)
        queue->front = 0;
    
    queue->data[++queue->rear] = node;
}

struct Node* dequeue(struct Queue* queue) {
    if (isQueueEmpty(queue))
        return NULL;
    
    struct Node* node = queue->data[queue->front];
    
    if (queue->front == queue->rear)
        queue->front = queue->rear = -1;
    else
        queue->front++;
    
    return node;
}

// (g) Level order traversal
void levelOrderTraversal(struct Node* root) {
    if (root == NULL)
        return;
    
    struct Queue queue;
    initQueue(&queue);
    enqueue(&queue, root);
    
    printf("Level order traversal: ");
    while (!isQueueEmpty(&queue)) {
        struct Node* node = dequeue(&queue);
        printf("%d ", node->data);
        
        if (node->left)
            enqueue(&queue, node->left);
        if (node->right)
            enqueue(&queue, node->right);
    }
    printf("\\n");
}

// (h) Count leaf and non-leaf nodes
void countNodes(struct Node* root, int* leafCount, int* nonLeafCount) {
    if (root == NULL)
        return;
    
    if (root->left == NULL && root->right == NULL)
        (*leafCount)++;
    else
        (*nonLeafCount)++;
    
    countNodes(root->left, leafCount, nonLeafCount);
    countNodes(root->right, leafCount, nonLeafCount);
}

// (i) Height of tree
int height(struct Node* root) {
    if (root == NULL)
        return -1;
    
    int leftHeight = height(root->left);
    int rightHeight = height(root->right);
    
    return (leftHeight > rightHeight ? leftHeight : rightHeight) + 1;
}

// (j) Create mirror image
struct Node* mirror(struct Node* root) {
    if (root == NULL)
        return NULL;
    
    // Swap the subtrees
    struct Node* temp = root->left;
    root->left = root->right;
    root->right = temp;
    
    // Recursively mirror the subtrees
    if (root->left)
        mirror(root->left);
    if (root->right)
        mirror(root->right);
    
    return root;
}

// (k) Check if two BSTs are equal
int areEqual(struct Node* root1, struct Node* root2) {
    // Both empty
    if (root1 == NULL && root2 == NULL)
        return 1;
    
    // Both non-empty, compare them
    if (root1 != NULL && root2 != NULL) {
        return (
            root1->data == root2->data &&
            areEqual(root1->left, root2->left) &&
            areEqual(root1->right, root2->right)
        );
    }
    
    // One empty, one not
    return 0;
}

int main() {
    struct Node* root = NULL;
    struct Node* root2 = NULL;
    int choice, data, leafCount, nonLeafCount;
    
    do {
        printf("\\n1. Insert (Recursive)\\n2. Insert (Iterative)\\n3. Delete by Copying\\n");
        printf("4. Delete by Merging\\n5. Search\\n6. Recursive Traversals\\n");
        printf("7. Iterative Traversals\\n8. Level Order Traversal\\n9. Count Nodes\\n");
        printf("10. Height of Tree\\n11. Mirror Image\\n12. Check Equality\\n0. Exit\\n");
        printf("Enter choice: ");
        scanf("%d", &choice);
        
        switch(choice) {
            case 1:
                printf("Enter data: ");
                scanf("%d", &data);
                root = insertRecursive(root, data);
                break;
            case 2:
                printf("Enter data: ");
                scanf("%d", &data);
                root = insertIterative(root, data);
                break;
            case 3:
                printf("Enter element to delete: ");
                scanf("%d", &data);
                root = deleteByCopying(root, data);
                break;
            case 4:
                printf("Enter element to delete: ");
                scanf("%d", &data);
                root = deleteByMerging(root, data);
                break;
            case 5:
                printf("Enter element to search: ");
                scanf("%d", &data);
                if (search(root, data))
                    printf("Element found\\n");
                else
                    printf("Element not found\\n");
                break;
            case 6:
                printf("Preorder (recursive): ");
                preorderRecursive(root);
                printf("\\n");
                
                printf("Inorder (recursive): ");
                inorderRecursive(root);
                printf("\\n");
                
                printf("Postorder (recursive): ");
                postorderRecursive(root);
                printf("\\n");
                break;
            case 7:
                preorderIterative(root);
                inorderIterative(root);
                postorderIterative(root);
                break;
            case 8:
                levelOrderTraversal(root);
                break;
            case 9:
                leafCount = nonLeafCount = 0;
                countNodes(root, &leafCount, &nonLeafCount);
                printf("Leaf nodes: %d\\nNon-leaf nodes: %d\\n", leafCount, nonLeafCount);
                break;
            case 10:
                printf("Height of tree: %d\\n", height(root));
                break;
            case 11:
                root = mirror(root);
                printf("Tree mirrored\\n");
                break;
            case 12:
                printf("Create second tree for comparison (enter -1 to stop):\\n");
                while (1) {
                    scanf("%d", &data);
                    if (data == -1)
                        break;
                    root2 = insertRecursive(root2, data);
                }
                
                if (areEqual(root, root2))
                    printf("Trees are equal\\n");
                else
                    printf("Trees are not equal\\n");
                break;
            case 0:
                break;
            default:
                printf("Invalid choice\\n");
        }
    } while (choice != 0);
    
    return 0;
}
            </code></pre>
        </div>
        <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
            <h3 class="text-lg font-semibold">Expected Output:</h3>
            <pre>
1. Insert (Recursive)
2. Insert (Iterative)
3. Delete by Copying
4. Delete by Merging
5. Search
6. Recursive Traversals
7. Iterative Traversals
8. Level Order Traversal
9. Count Nodes
10. Height of Tree
11. Mirror Image
12. Check Equality
0. Exit
Enter choice: 1
Enter data: 50

1. Insert (Recursive)
2. Insert (Iterative)
3. Delete by Copying
4. Delete by Merging
5. Search
6. Recursive Traversals
7. Iterative Traversals
8. Level Order Traversal
9. Count Nodes
10. Height of Tree
11. Mirror Image
12. Check Equality
0. Exit
Enter choice: 1
Enter data: 30

1. Insert (Recursive)
2. Insert (Iterative)
3. Delete by Copying
4. Delete by Merging
5. Search
6. Recursive Traversals
7. Iterative Traversals
8. Level Order Traversal
9. Count Nodes
10. Height of Tree
11. Mirror Image
12. Check Equality
0. Exit
Enter choice: 1
Enter data: 70

1. Insert (Recursive)
2. Insert (Iterative)
3. Delete by Copying
4. Delete by Merging
5. Search
6. Recursive Traversals
7. Iterative Traversals
8. Level Order Traversal
9. Count Nodes
10. Height of Tree
11. Mirror Image
12. Check Equality
0. Exit
Enter choice: 6
Preorder (recursive): 50 30 70 
Inorder (recursive): 30 50 70 
Postorder (recursive): 30 70 50 
            </pre>
        </div>
      `,
    },
    {
      question: "14. WAP to convert the Sparse Matrix into non-zero form and vice-versa.",
      solution: `
        <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
            <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
            <pre><code class="language-c">
#include &lt;stdio.h&gt;

// Structure to represent a sparse matrix in triplet form
struct SparseMatrix {
    int row;
    int col;
    int value;
};

// Convert normal matrix to sparse matrix
void toSparse(int matrix[10][10], int rows, int cols, struct SparseMatrix sparse[]) {
    int k = 1; // Index for sparse matrix, starts from 1 as 0 stores metadata
    
    // First row of sparse matrix stores dimensions and count of non-zero elements
    sparse[0].row = rows;
    sparse[0].col = cols;
    
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            if (matrix[i][j] != 0) {
                sparse[k].row = i;
                sparse[k].col = j;
                sparse[k].value = matrix[i][j];
                k++;
            }
        }
    }
    
    // Store count of non-zero elements
    sparse[0].value = k - 1;
}

// Convert sparse matrix to normal matrix
void toNormal(struct SparseMatrix sparse[], int matrix[10][10]) {
    int rows = sparse[0].row;
    int cols = sparse[0].col;
    int nonZero = sparse[0].value;
    
    // Initialize matrix with zeros
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            matrix[i][j] = 0;
        }
    }
    
    // Fill non-zero elements
    for (int k = 1; k <= nonZero; k++) {
        matrix[sparse[k].row][sparse[k].col] = sparse[k].value;
    }
}

// Display normal matrix
void displayNormal(int matrix[10][10], int rows, int cols) {
    printf("Normal Matrix:\\n");
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            printf("%d\\t", matrix[i][j]);
        }
        printf("\\n");
    }
}

// Display sparse matrix
void displaySparse(struct SparseMatrix sparse[]) {
    int nonZero = sparse[0].value;
    
    printf("Sparse Matrix (Triplet Form):\\n");
    printf("Row\\tColumn\\tValue\\n");
    
    for (int k = 0; k <= nonZero; k++) {
        printf("%d\\t%d\\t%d\\n", sparse[k].row, sparse[k].col, sparse[k].value);
    }
}

int main() {
    int matrix[10][10];
    struct SparseMatrix sparse[100]; // Assuming maximum 100 non-zero elements
    int rows, cols, choice;
    
    printf("Enter dimensions of matrix (rows cols): ");
    scanf("%d %d", &rows, &cols);
    
    printf("Enter matrix elements:\\n");
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            scanf("%d", &matrix[i][j]);
        }
    }
    
    do {
        printf("\\n1. Convert to Sparse Matrix\\n2. Convert to Normal Matrix\\n0. Exit\\n");
        printf("Enter choice: ");
        scanf("%d", &choice);
        
        switch(choice) {
            case 1:
                toSparse(matrix, rows, cols, sparse);
                displaySparse(sparse);
                break;
            case 2:
                // Assuming sparse matrix is already created
                toNormal(sparse, matrix);
                displayNormal(matrix, rows, cols);
                break;
            case 0:
                break;
            default:
                printf("Invalid choice\\n");
        }
    } while (choice != 0);
    
    return 0;
}
            </code></pre>
        </div>
        <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
            <h3 class="text-lg font-semibold">Expected Output:</h3>
            <pre>
Enter dimensions of matrix (rows cols): 3 3
Enter matrix elements:
0 0 3
4 0 0
0 2 0

1. Convert to Sparse Matrix
2. Convert to Normal Matrix
0. Exit
Enter choice: 1
Sparse Matrix (Triplet Form):
Row	Column	Value
3	3	3
0	2	3
1	0	4
2	1	2

1. Convert to Sparse Matrix
2. Convert to Normal Matrix
0. Exit
Enter choice: 2
Normal Matrix:
0	0	3	
4	0	0	
0	2	0	
            </pre>
        </div>
      `,
    },
    {
      question: "15. WAP to reverse the order of the elements in the stack using additional stack.",
      solution: `
        <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
            <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
            <pre><code class="language-c">
#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

#define MAX 100

struct Stack {
    int items[MAX];
    int top;
};

// Initialize stack
void initialize(struct Stack* stack) {
    stack->top = -1;
}

// Check if stack is full
int isFull(struct Stack* stack) {
    return stack->top == MAX - 1;
}

// Check if stack is empty
int isEmpty(struct Stack* stack) {
    return stack->top == -1;
}

// Push element onto stack
void push(struct Stack* stack, int data) {
    if (isFull(stack)) {
        printf("Stack overflow\\n");
        return;
    }
    
    stack->items[++stack->top] = data;
}

// Pop element from stack
int pop(struct Stack* stack) {
    if (isEmpty(stack)) {
        printf("Stack underflow\\n");
        return -1;
    }
    
    return stack->items[stack->top--];
}

// Display stack elements
void display(struct Stack* stack) {
    if (isEmpty(stack)) {
        printf("Stack is empty\\n");
        return;
    }
    
    printf("Stack elements: ");
    for (int i = stack->top; i >= 0; i--)
        printf("%d ", stack->items[i]);
    printf("\\n");
}

// Reverse stack using additional stack
void reverseStack(struct Stack* stack) {
    struct Stack tempStack;
    initialize(&tempStack);
    
    // Pop all elements from original stack and push to temp stack
    while (!isEmpty(stack)) {
        push(&tempStack, pop(stack));
    }
    
    // Copy back to original stack
    while (!isEmpty(&tempStack)) {
        push(stack, pop(&tempStack));
    }
}

int main() {
    struct Stack stack;
    initialize(&stack);
    
    int choice, data;
    
    do {
        printf("\\n1. Push\\n2. Pop\\n3. Display\\n4. Reverse Stack\\n0. Exit\\n");
        printf("Enter choice: ");
        scanf("%d", &choice);
        
        switch(choice) {
            case 1:
                printf("Enter data to push: ");
                scanf("%d", &data);
                push(&stack, data);
                break;
            case 2:
                data = pop(&stack);
                if (data != -1)
                    printf("%d popped from stack\\n", data);
                break;
            case 3:
                display(&stack);
                break;
            case 4:
                reverseStack(&stack);
                printf("Stack reversed\\n");
                break;
            case 0:
                break;
            default:
                printf("Invalid choice\\n");
        }
    } while (choice != 0);
    
    return 0;
}
            </code></pre>
        </div>
        <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
            <h3 class="text-lg font-semibold">Expected Output:</h3>
            <pre>
1. Push
2. Pop
3. Display
4. Reverse Stack
0. Exit
Enter choice: 1
Enter data to push: 10

1. Push
2. Pop
3. Display
4. Reverse Stack
0. Exit
Enter choice: 1
Enter data to push: 20

1. Push
2. Pop
3. Display
4. Reverse Stack
0. Exit
Enter choice: 1
Enter data to push: 30

1. Push
2. Pop
3. Display
4. Reverse Stack
0. Exit
Enter choice: 3
Stack elements: 30 20 10 

1. Push
2. Pop
3. Display
4. Reverse Stack
0. Exit
Enter choice: 4
Stack reversed

1. Push
2. Pop
3. Display
4. Reverse Stack
0. Exit
Enter choice: 3
Stack elements: 10 20 30 
            </pre>
        </div>
      `,
    },
    {
      question: "16. WAP to reverse the order of the elements in the stack using additional Queue.",
      solution: `
        <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
            <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
            <pre><code class="language-c">
#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

#define MAX 100

// Stack implementation
struct Stack {
    int items[MAX];
    int top;
};

void initStack(struct Stack* stack) {
    stack->top = -1;
}

int isStackFull(struct Stack* stack) {
    return stack->top == MAX - 1;
}

int isStackEmpty(struct Stack* stack) {
    return stack->top == -1;
}

void push(struct Stack* stack, int data) {
    if (isStackFull(stack)) {
        printf("Stack overflow\\n");
        return;
    }
    
    stack->items[++stack->top] = data;
}

int pop(struct Stack* stack) {
    if (isStackEmpty(stack)) {
        printf("Stack underflow\\n");
        return -1;
    }
    
    return stack->items[stack->top--];
}

void displayStack(struct Stack* stack) {
    if (isStackEmpty(stack)) {
        printf("Stack is empty\\n");
        return;
    }
    
    printf("Stack elements: ");
    for (int i = stack->top; i >= 0; i--)
        printf("%d ", stack->items[i]);
    printf("\\n");
}

// Queue implementation
struct Queue {
    int items[MAX];
    int front, rear;
};

void initQueue(struct Queue* queue) {
    queue->front = -1;
    queue->rear = -1;
}

int isQueueFull(struct Queue* queue) {
    return queue->rear == MAX - 1;
}

int isQueueEmpty(struct Queue* queue) {
    return queue->front == -1 || queue->front > queue->rear;
}

void enqueue(struct Queue* queue, int data) {
    if (isQueueFull(queue)) {
        printf("Queue overflow\\n");
        return;
    }
    
    if (queue->front == -1)
        queue->front = 0;
    
    queue->items[++queue->rear] = data;
}

int dequeue(struct Queue* queue) {
    if (isQueueEmpty(queue)) {
        printf("Queue underflow\\n");
        return -1;
    }
    
    return queue->items[queue->front++];
}

// Reverse stack using queue
void reverseStack(struct Stack* stack) {
    struct Queue queue;
    initQueue(&queue);
    
    // Pop all elements from stack and enqueue to queue
    while (!isStackEmpty(stack)) {
        enqueue(&queue, pop(stack));
    }
    
    // Dequeue all elements and push back to stack
    while (!isQueueEmpty(&queue)) {
        push(stack, dequeue(&queue));
    }
}

int main() {
    struct Stack stack;
    initStack(&stack);
    
    int choice, data;
    
    do {
        printf("\\n1. Push\\n2. Pop\\n3. Display\\n4. Reverse Stack using Queue\\n0. Exit\\n");
        printf("Enter choice: ");
        scanf("%d", &choice);
        
        switch(choice) {
            case 1:
                printf("Enter data to push: ");
                scanf("%d", &data);
                push(&stack, data);
                break;
            case 2:
                data = pop(&stack);
                if (data != -1)
                    printf("%d popped from stack\\n", data);
                break;
            case 3:
                displayStack(&stack);
                break;
            case 4:
                reverseStack(&stack);
                printf("Stack reversed using queue\\n");
                break;
            case 0:
                break;
            default:
                printf("Invalid choice\\n");
        }
    } while (choice != 0);
    
    return 0;
}
            </code></pre>
        </div>
        <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
            <h3 class="text-lg font-semibold">Expected Output:</h3>
            <pre>
1. Push
2. Pop
3. Display
4. Reverse Stack using Queue
0. Exit
Enter choice: 1
Enter data to push: 10

1. Push
2. Pop
3. Display
4. Reverse Stack using Queue
0. Exit
Enter choice: 1
Enter data to push: 20

1. Push
2. Pop
3. Display
4. Reverse Stack using Queue
0. Exit
Enter choice: 1
Enter data to push: 30

1. Push
2. Pop
3. Display
4. Reverse Stack using Queue
0. Exit
Enter choice: 3
Stack elements: 30 20 10 

1. Push
2. Pop
3. Display
4. Reverse Stack using Queue
0. Exit
Enter choice: 4
Stack reversed using queue

1. Push
2. Pop
3. Display
4. Reverse Stack using Queue
0. Exit
Enter choice: 3
Stack elements: 10 20 30 
            </pre>
        </div>
      `,
    },
    // Add additional questions and solutions here
  ],
};

// Vanilla JS implementation with loader
function renderQuestions() {
  const container = document.getElementById("questions-container");
  if (!container) {
    console.error('Element with ID "questions-container" not found.');
    return;
  }

  // Hide loader after questions are rendered
  const loader = document.getElementById("loader");
  
  questionData.questions.forEach((q) => {
    const questionElement = document.createElement("div");
    questionElement.classList.add("mb-6");
    questionElement.innerHTML = `
      <h2 class="text-lg font-semibold mb-2">${q.question}</h2>
      ${q.solution}
    `;
    container.appendChild(questionElement);
  });
  
  // Apply syntax highlighting
  if (typeof Prism !== 'undefined') {
    Prism.highlightAll();
  }
  
  // Hide loader after questions are rendered
  if (loader) {
    loader.style.display = "none";
  }
}

function copyCode(button) {
  const code = button.nextElementSibling.querySelector("code").innerText;
  navigator.clipboard
    .writeText(code)
    .then(() => {
      button.innerText = "Copied!"; // Change button text
      setTimeout(() => {
        button.innerText = "Copy Code"; // Reset after 2 seconds
      }, 2000);
    })
    .catch((err) => {
      console.error("Failed to copy code: ", err);
    });
}

// Create and show loader when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("questions-container");
  if (container) {
    // Create loader element
    const loader = document.createElement("div");
    loader.id = "loader";
    loader.className = "flex justify-center items-center py-20";
    loader.innerHTML = `
      <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-900"></div>
      <p class="ml-4 text-lg font-medium text-blue-900">Loading questions...</p>
    `;
    container.appendChild(loader);
    
    // Render questions after a small delay to ensure loader is visible
    setTimeout(renderQuestions, 800);
  }
});
