import {ChangeEvent, HTMLInputTypeAttribute, forwardRef} from 'react';

interface InputProps {
	type: HTMLInputTypeAttribute;
	name: string;
	placeholder: string;
	value: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	errorMsg?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	const {type, name, placeholder, onChange, errorMsg} = props;

	return (
		<label htmlFor={name}>
			<input
				ref={ref}
				type={type}
				name={name}
				placeholder={placeholder}
				onChange={onChange}
			/>
			<p>{errorMsg}</p>
		</label>
	);
});

export default Input;
