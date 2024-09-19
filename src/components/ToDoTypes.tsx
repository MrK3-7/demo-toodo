export type TodoItem = {
    id: string;
    title: string;
    complete: boolean;
    date: string;
    time: string;
}

export type TodoResponse = TodoItem[];
