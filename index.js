// async function fetchTodos() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos');
//         const todos = await response.json();
//         const todoList = document.getElementById('todo-list');

//         todos.forEach(todo => {
//             const row = document.createElement('tr');
//             row.innerHTML = `
//                 <td>${todo.title}</td>
//                 <td>${todo.completed ? 'Выполнено' : 'Не выполнено'}</td>
//                 <td>${todo.date}</td>
//                 <td>${todo.time}</td>
//                 <td>${todo.completed}</td>
//             `;
//             todoList.appendChild(row);
//         });
//     } catch (error) {
//         console.error('Ошибка загрузки данных:', error);
//     }
// }

// // Вызов функции для загрузки данных
// fetchTodos();