import { ADD_DIGIT } from '../calculatorSlice';

type DigitButtonProps = {
	dispatch: any, //FIXME correggere tipo
	digit: string
}

export function DigitButton({ dispatch, digit }: DigitButtonProps) {
	return (
		<button onClick={() => dispatch(ADD_DIGIT({ digit }))}>
			{digit}
		</button>
	)
}
