export default function projectBuilder(id) {
  const _bucket = {};

  // Create
  function createTodo(todoId, todoData) {
    if (!_bucket[todoId]) {
      _bucket[todoId] = todoData;
    } else {
      duplicateWarning(todoId);
    }
  }

  // Read
  function getTodo(todoId) {
    return _bucket[todoId];
  }

  // Update
  function updateTodo(todoId, todoData) {
    _bucket[todoId] = todoData;
  }

  // Delete
  function delTodo(todoId) {
    delete _bucket[todoId];
  }

  function getEveryEntry() {
    return Object.entries(_bucket);
  }

  function duplicateWarning(id) {
    console.log(`${id} already exists.`);
  }

  function getId() {
    return id;
  }

  return {
    createTodo,
    getTodo,
    delTodo,
    updateTodo,
    getEveryEntry,
    getId,
  };
}
