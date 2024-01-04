import { Circle, CheckCircle2, Star, Trash } from "lucide-react";

interface CardTaskProps {
  title: string;
  isCompleted: boolean;
  id: string;
  onHandleDeleteTask: (id: string) => void;
  onHandleIsCompleted: (id: string) => void;
}

export function CardTask({
  title,
  isCompleted,
  id,
  onHandleDeleteTask,
  onHandleIsCompleted,
}: CardTaskProps) {
  function handleDelete() {
    onHandleDeleteTask(id);
  }

  function handleIsCompleted() {
    onHandleIsCompleted(id);
  }

  return (
    <div className="flex items-center justify-between gap-4 bg-gray-800 p-4 rounded">
      <button onClick={handleIsCompleted}>
        {isCompleted ? (
          <CheckCircle2 className="text-violet-400" />
        ) : (
          <Circle className="text-gray-500" />
        )}
      </button>
      <p
        className={
          isCompleted
            ? "flex-1 text-gray-100 line-through "
            : "flex-1 text-gray-100"
        }
      >
        {title}
      </p>

      <div className="flex items-center gap-2">
        <button>
          <Star className="text-gray-500" />
        </button>
        <button onClick={handleDelete}>
          <Trash className="text-gray-500 hover:text-red-500" />
        </button>
      </div>
    </div>
  );
}
