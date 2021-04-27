interface Todo {
  id: number;
  text: string;
}
export interface S {
  todos: Todo[];
}

export interface G {
  target: (id: number) => Todo;
}

export interface RG {
  'todos/target': G['target']
}

export interface M {
  setTodos: {todos: Todo[]}
}

export interface RM {
  'todos/setTodos': M['setTodos']
}

export interface A {
  asyncTodos: {todos: Todo[]}
}

export interface RA {
  'counter/asyncTodos': A['asyncTodos']
}