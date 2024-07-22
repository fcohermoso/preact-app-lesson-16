// Fichero pages/tareas/index.page.jsx

import { signal } from "@preact/signals";
import { useState } from "preact/hooks";
import preactLogo from '../../assets/preact.svg';
import './style.css';

const tareas = signal(["Tarea de ejemplo 1", "Tarea de ejemplo 2"]);

export function TareasPage() {
  const [tarea, setTarea] = useState("");
  const addNewTarea = () => {
    tareas.value = [...tareas.value, tarea];
    setTarea('');
  };
  return (
    <div className="home">
			<a href="https://preactjs.com" target="_blank">
				<img src={preactLogo} alt="Preact logo" height="160" width="160" />
			</a>
			<h1>Preact Apps Sample Lesson 16</h1>
			<div>
          <ul>
            {tareas.value.map((tarea, index) => (
              <li key={index}>{tarea}</li>
            ))}
          </ul>
          <input
            type="text"
            value={tarea}
            onChange={(e) => setTarea((e.target as HTMLInputElement).value)}
          />
          <button onClick={addNewTarea}>Añadir</button>
      </div>
    </div>
  );
}
