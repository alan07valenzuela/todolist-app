# 📝 To-Do List App

Este proyecto es una aplicación simple de lista de tareas creada con **React + TypeScript**.  
El modelo base fue creado por el <a href="https://github.com/Piuliss">Mg. Ing. Raúl Netto</a> para el curso de Tecnologías Emergentes.

## 🚀 Mejoras implementadas

### 1️⃣ Guardado en LocalStorage
Ahora las tareas se guardan automáticamente en el **almacenamiento local del navegador (localStorage)**.  
De esta manera, aunque el usuario recargue la página o cierre el navegador, las tareas **se mantienen guardadas**.

### 2️⃣ Separación en componentes
La aplicación fue refactorizada para tener una estructura más modular y organizada, separando la lógica en **dos componentes principales**:

- **`TaskInput`** → maneja el campo de texto y el botón para agregar nuevas tareas.
- **`TaskList`** → muestra las tareas existentes y permite marcarlas como completadas o eliminarlas.

