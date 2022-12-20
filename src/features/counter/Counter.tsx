import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/store';
import {
	decrement,
	increment,
	incrementByAmount,
	selectCount,
} from './counterSlice';


export function Counter() {
	const count = useAppSelector(selectCount);
	const dispatch = useAppDispatch();
	const [incrementAmount, setIncrementAmount] = useState('24');

	const incrementValue = Number(incrementAmount) || 0;

	return (
		<>
			<div>
				<button onClick={() => dispatch(decrement())}>-</button>
				<span>{count}</span>
				<button onClick={() => dispatch(increment())}>+</button>
			</div>
			<div>
				<input value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)}/>
				<button	onClick={() => dispatch(incrementByAmount(incrementValue))}>Add Amount</button>
			</div>
		</>
	);
}
