export const ShowTask = ({tasklist, setTasklist, task, setTask}) => {
    const handleEdit = (id) => {
        const selectedTask = tasklist.find(task_todo => task_todo.id === id);
        setTask(selectedTask);
    }

    const handleDelete = (id) => {
        const updatedTaskList = tasklist.filter(task_todo => task_todo.id !== id);
        setTasklist(updatedTaskList);
    }

  return (
    <section className="showTask">
        <div className="head">
            <div>
                <span className="title">Tasks</span>
                <span className="count">{tasklist.length}</span>
            </div>
            <button  onClick={ () => setTasklist([])}className="clearAll">Clear All</button>
        </div>
        <ul>
            {tasklist.map((task_todo) => 
                <li>
                    <p>
                        <span className="name">{task_todo.name}</span>
                        <span className="time">{task_todo.time}</span>
                    </p>
                    <i onClick={() => handleEdit(task_todo.id)} className="bi bi-pen"></i>
                    <i onClick={() => handleDelete(task_todo.id)} className="bi bi-trash"></i>
                </li>
            )}

        </ul>
    </section>
  )
}

