import { FormEvent, useEffect, useState } from "react";
import { CardTask } from "./components/CardTask";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Empty } from "./components/Empty";

export interface TaskProps {
  id: string;
  title: string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [taskTitle, setTaskTitle] = useState("");

  // Buscas em localStorage Get
  function loadLocalStorageGetTasks() {
    const tasks = localStorage.getItem("tasks") 
    if(tasks) {
      setTasks(JSON.parse(tasks))
    }
  }

  // useEffect para carregar as tasks em localStorage assim que a aplicação iniciar
  useEffect(() => {
    loadLocalStorageGetTasks()
  }, [])

  // Salvar em localStorage Set
  function saveLocalStorageSetTasks(newTask: TaskProps[]) {
    setTasks(newTask)
    localStorage.setItem("tasks", JSON.stringify(newTask))
  }

  // Cria uma nova task
  function handleNewTask(event: FormEvent) {
    event.preventDefault();

    const newTask = {
      id: crypto.randomUUID(),
      title: taskTitle,
      isCompleted: false,
    };
    saveLocalStorageSetTasks([...tasks, newTask]);
    setTaskTitle("");
  }

  // Deleta uma task
  function handleDeleteTask(id: string) {
    const activeDelete = tasks.filter((task) => task.id !== id);
    saveLocalStorageSetTasks(activeDelete);
  }


  // Marca uma task como concluída
  function handleIsCompleted(id: string) {
    const actionIsCompleted = tasks.map(task => {
      if(task.id === id) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task
    })
    saveLocalStorageSetTasks(actionIsCompleted)
  }

  return (
    <div className="min-h-screen pb-10 bg-gray-950 flex justify-center">
      <div className="max-w-5xl mx-auto w-full px-6">
        <Header />
        <div className="md:flex  gap-6 space-y-4 md:space-y-0">
          <aside className="md:w-72 h-full bg-gray-900 p-6 rounded-md">
            <Sidebar />

            <div className="mt-4">
              <h3 className="text-xl text-violet-400 font-bold">
                Criar uma task
              </h3>

              <form className="flex flex-col space-y-2 mt-2">
                <input
                  className="bg-gray-800 text-gray-100 p-4 rounded-md"
                  type="text"
                  placeholder="Escreva sua tarefa"
                  onChange={(e) => setTaskTitle(e.target.value)}
                  value={taskTitle}
                />
                <button
                  onClick={handleNewTask}
                  className="bg-violet-600 text-gray-100 p-4 rounded-md"
                >
                  Criar
                </button>
              </form>
            </div>
          </aside>
          <main className="md:flex-1 bg-gray-900 p-6 rounded-md">
            <div>
              <h1 className="text-xl text-violet-400 font-bold">Tasks</h1>

              {tasks.length === 0 && <Empty />}

              <div className="mt-4 space-y-2">
                {tasks.map((task) => {
                  return (
                    <CardTask
                      key={task.id}
                      id={task.id}
                      title={task.title}
                      isCompleted={task.isCompleted}
                      onHandleDeleteTask={handleDeleteTask}
                      onHandleIsCompleted={handleIsCompleted}
                    />
                  );
                })}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
