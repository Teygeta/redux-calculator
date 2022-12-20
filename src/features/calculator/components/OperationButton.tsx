import { OPERATION } from '../calculatorSlice';

type OperationButtonProps = {
	dispatch: any, //FIXME correggere tipo
	operation: string
}

export function OperationButton({ dispatch, operation }: OperationButtonProps) {
	return (
		<button onClick={() => dispatch(OPERATION({ operation }))}>
			{operation}
		</button>
	)
}
