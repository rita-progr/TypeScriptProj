import {useState} from 'react';
import classes from './Counter.module.scss';
const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div className={classes.counter}>
            <h1>{count}</h1>
            <button onClick = {()=>setCount(count+1)}>increase</button>
        </div>
    )
}
export default Counter;