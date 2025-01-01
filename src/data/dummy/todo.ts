export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  createdAt: string;
}

export const todos: Todo[] = [
  {
    id: 1,
    title: 'Create a new project',
    completed: true,
    createdAt: '2021-09-01T16:00:00.000Z',
  },
  {
    id: 2,
    title: 'Create a new project',
    completed: true,
    createdAt: '2021-09-01T16:00:00.000Z',
  },
  {
    id: 3,
    title: 'Create a new project',
    completed: true,
    createdAt: '2021-09-01T16:00:00.000Z',
  }
]