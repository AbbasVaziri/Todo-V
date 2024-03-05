const NodeSchedule = (todo) => {

        const calculateSecondsUntilEndOfDay = () => {
            let d = new Date();
            let h = d.getHours();
            let m = d.getMinutes();
            let s = d.getSeconds();
            return (24 * 60 * 6) - (h * 6 * 6) - (m * 6) - s;
        };
        let secondsUntilEndOfDate = calculateSecondsUntilEndOfDay();
        console.log(secondsUntilEndOfDate);
        setTimeout(() => {
            console.log(todo.todo)
        }, secondsUntilEndOfDate);


    return (
        <div>
            timer-component
        </div>
    );
};

export default NodeSchedule