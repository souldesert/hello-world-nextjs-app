import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../store/counterSlice';
import { RootState } from '../../store/store';
import styles from './counter.module.css'
import { SET_RANDOM } from '@/app/sagas/counter/types';

export default function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.counter.value);

  return (
    <div className={styles.container}>
      <p>Counter: {counter}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch({ type: SET_RANDOM })}>Set random</button>
    </div>
  );
}
