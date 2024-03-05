import {FaTrashAlt} from "react-icons/fa";
import {deleteTodo, toggleDefault, toggleTodo} from "../redux/todoSlice.js";
import {useDispatch} from "react-redux";
import styles from './Task.module.css'

const Task = (todo) => {
    const dispatch = useDispatch()

    const deleteHandler = (todoId) => {
        dispatch(deleteTodo(todoId))
    }

    const endDay = (date) => {
        let h = date.getHours();
        let m = date.getMinutes();
        let s = date.getSeconds();
        return (24 * 60 * 6) - (h * 6 * 6) - (m * 6) - s
    }

    const updateLocalStorage = (todoList) => {
        localStorage.setItem('todoList', JSON.stringify(todoList));
    };

    const toggleHandler = (todoId) => {
        const endOfDayInSeconds = endDay(new Date());
        dispatch(toggleTodo(todoId));

        setTimeout(() => {
            const updatedTodoList = todo.todo.map(item => {
                if(item.id === todoId){
                console.log(item)
                return {...item, complete: false};
                }
            });
            updateLocalStorage(updatedTodoList);
        }, [endOfDayInSeconds])
    };


    // const toggleHandler = (todoId) => {
    //     const Sex = endDay(new Date())
    //     setTimeout(()=>{
    //
    //     },[Sex])
    //     dispatch(toggleTodo(todoId))
    // }

    return (
        <div className={styles['outer-container']}>
            {todo.todo.map((item) => {
                return (
                    <div key={item.id} className={styles['task-container']}>
                        <h1 className={styles['todo-content']}>{item.text}</h1>
                        <FaTrashAlt onClick={() => deleteHandler(item.id)} className={styles['icon-delete']}/>
                        <input type={"checkbox"} className={styles['checkbox']}
                               onClick={() => toggleHandler(item.id)}
                               checked={item.complete}/>
                    </div>
                )
            })}
        </div>
    );
}

export default Task;