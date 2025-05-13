/**
 * Our todo, we shall be able to add, delete, edit and read
 * title, body, id, status => pending, completed, cancelled
 */

const initialState = [
  {
    title: "Task",
    body: "This is task 1",
    id: ~~(Math.random() * 100000),
    state: "pending",
  },
];

const todoReducer = (state = initialState, action) => {
  // check if the state exists
  if (action.type === "todo/get") {
    return state;
  } else if (action.type === "todo/add") {
    // make a copy of the state
    return [
      ...state,
      {
        title: "Task",
        body: "This is task 1",
        id: ~~(Math.random() * 100000),
        state: "pending",
      },
    ];
  } else if (action.type === "todo/delete") {
    return [...state.filter((todo) => todo.id !== action.payload)];
  }

  return state;
};

export default todoReducer;
