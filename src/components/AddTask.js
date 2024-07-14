export const AddTask = ({tasklist, setTasklist, task, setTask}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        if(task.id) {
            const date = new Date();
            const updatedTaskList = tasklist.map((task_todo) => (
                task_todo.id === task.id ? {
                    id: task.id, 
                    name: task.name, 
                    time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
                } : task_todo
            ));
            setTasklist(updatedTaskList);
             
            setTask({});

        } else {
            const date = new Date();
            const newTask = {
                id: date.getTime(), 
                name: e.target.task.value, 
                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}
            setTasklist([...tasklist, newTask]);
            setTask({});
        }
    }
  return (
    <section className="addTask">
        <form onSubmit={handleSubmit}>
            <input type="text" name="task" value={task.name || "" } autoComplete="off" placeholder="new task" onChange={e => setTask({...task, name:e.target.value})} />
            <button type="submit">{ task.id ? "Update" : "Add"}</button>
        </form>
    </section>
  )
}
