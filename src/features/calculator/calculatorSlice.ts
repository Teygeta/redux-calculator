import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

type Action = {
	type: string
	payload: any //FIXME correggere tipo
}
type CalculatorState = {
	currentOperand: any, //FIXME correggere tipo
	previousOperand: null | string,
	operation: null | string,
	overwrite: boolean
}

export const initialState: CalculatorState = {
	currentOperand: null,
	previousOperand: null,
	operation: null,
	overwrite: true
};

const evaluate = ({ currentOperand, previousOperand, operation }: any) => {
	const prev: number = parseFloat(previousOperand)
	const current: number = parseFloat(currentOperand)
	let computation: string | number = ''
	switch (operation) {
		case '+':
			computation = prev + current
			break
		case '-':
			computation = prev - current
			break
		case '÷':
			computation = prev / current
			break
		case '*':
			computation = prev * current
			break
	}
	return computation.toString()
}

export const calculatorSlice = createSlice({
		name: 'calculator',
		initialState,
		reducers: {
			ADD_DIGIT: (state, action: Action) => {
				console.log(action)
				if (action.payload.digit === '0' && state.currentOperand === '0') return state
				if (action.payload.digit === '.' && state.currentOperand === null) return state
				if (state.overwrite) {
					return {
						...state,
						currentOperand: action.payload.digit,
						overwrite: false
					}
				}
				return {
					...state,
					currentOperand: `${state.currentOperand || ''}${action.payload.digit}`
				}
			},
			OPERATION: (state, { payload }) => {
				if (!state.currentOperand && !state.previousOperand) return state
				if (!state.currentOperand) {
					return {
						...state,
						operation: payload.operation,
					}
				}
				if (state.previousOperand == null) {
					return {
						...state,
						operation: payload.operation,
						previousOperand: state.currentOperand,
						currentOperand: null
					}
				}
				return {
					...state,
					previousOperand: evaluate(state),
					operation: payload.operation,
					currentOperand: null
				}
			},
			CLEAR_DIGIT: () => {
				return {
					currentOperand: null,
					previousOperand: null,
					operation: null,
					overwrite: true
				}
			},
			NEGATIVE_DIGIT: (state) => {
				if (!state.currentOperand) return state
				return {
					...state,
					currentOperand: -Math.abs(state.currentOperand)
					//TODO trovare il modo di fare anche il contrario (da negativo a positivo)
				};
			},
			EVALUATE: (state) => {

				if (
					state.operation == null ||
					state.currentOperand == null ||
					state.previousOperand == null
				) {
					console.log('null ops..')
					return state
				}
				return {
					...state,
					overwrite: true,
					operation: null,
					previousOperand: null,
					currentOperand: evaluate(state)
				}
			}
		}
	}
);

export const { ADD_DIGIT, OPERATION, CLEAR_DIGIT, NEGATIVE_DIGIT, EVALUATE } = calculatorSlice.actions;
export const currentOperand = (state: RootState) => state.calculator.currentOperand;
export const previousOperand = (state: RootState) => state.calculator.previousOperand;
export const operation = (state: RootState) => state.calculator.operation;
export default calculatorSlice.reducer;
