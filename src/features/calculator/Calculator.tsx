import { useAppDispatch, useAppSelector } from '../../app/store';
import {
	currentOperand,
	previousOperand,
	operation,
	CLEAR_DIGIT,
	EVALUATE,
	NEGATIVE_DIGIT
} from './calculatorSlice';
import { DigitButton } from './components/DigitButton';
import { OperationButton } from './components/OperationButton';

export function Calculator() {
	const dispatch = useAppDispatch();
	const currentOp = useAppSelector(currentOperand);
	const previousOp = useAppSelector(previousOperand);
	const op = useAppSelector(operation);

	return (
		<div className="calculator-grid">
			<div className="output">
				<div className="operand"> {previousOp} {op} {currentOp}</div>
			</div>
			<button className="span-two" onClick={() => dispatch(CLEAR_DIGIT())}>AC</button>
			<button onClick={() => dispatch(NEGATIVE_DIGIT())}>+/-</button>
			<OperationButton operation="÷" dispatch={dispatch}/>
			<DigitButton digit="1" dispatch={dispatch}/>
			<DigitButton digit="2" dispatch={dispatch}/>
			<DigitButton digit="3" dispatch={dispatch}/>
			<OperationButton operation="*" dispatch={dispatch}/>
			<DigitButton digit="4" dispatch={dispatch}/>
			<DigitButton digit="5" dispatch={dispatch}/>
			<DigitButton digit="6" dispatch={dispatch}/>
			<OperationButton operation="+" dispatch={dispatch}/>
			<DigitButton digit="7" dispatch={dispatch}/>
			<DigitButton digit="8" dispatch={dispatch}/>
			<DigitButton digit="9" dispatch={dispatch}/>
			<OperationButton operation="-" dispatch={dispatch}/>
			<DigitButton digit="." dispatch={dispatch}/>
			<DigitButton digit="0" dispatch={dispatch}/>
			<button className="span-two" onClick={() => dispatch(EVALUATE())}>=</button>
		</div>
	);
}
