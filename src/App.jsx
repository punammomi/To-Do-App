import { useEffect, useMemo, useState } from "react";
import {Check, ClipboardList, Plus, Trash2} from "lucide-react";
import "./styles/App.css";

const Store = "Work List";

function App() {
    const [tasks, setTasks] = useState(() => {
        const storedTasks = localStorage.getItem(Store);
        return storedTasks ? JSON.parse(storedTasks) : [];
    }
}

const [text, setText] = useState("");

useEffect(() => {
    localStorage.setItem(Store, JSON.stringify(tasks));
}, [tasks]);

const remaning = useMemo(() => {
    () => tasks.filter((task) => !task.done).length;
},
[tasks]);

function addTask() {
    event.preventDefault();
    const title = text.trim();
    if (!title) return;

    setTasks([
        {id: crypto.randomUUID(), title, done: false},
        ...tasks,
    ]);
    setText("");
}

function toggleTask(id) {
    setTasks(
        tasks.map((task) =>
            task.id === id ? {...task, done: !task.done} : task
        )
    );
}

function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
}