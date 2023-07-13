import {HTMLProps, ReactNode, forwardRef, useState} from 'react';

interface CustomInputProps {
	name: string;
	plcaeholder?: string;

	postfix?: ReactNode;
	errorMsg?: string;
}

export type BaseInputProps = Omit<
	HTMLProps<HTMLInputElement>,
	keyof CustomInputProps
> &
	CustomInputProps;

const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(
	(
		{
			type,
			name,
			title,
			placeholder,
			value,
			onChange,
			errorMsg,
			postfix,
			...props
		},
		ref
	) => {
		const [isFocused, setIsFocused] = useState<boolean>(false);

		return (
			<label htmlFor={name}>
				<input
					{...props}
					ref={ref}
					type={type}
					name={name}
					placeholder={placeholder}
					value={value}
					onChange={onChange}
					onFocus={() => setIsFocused(true)}
					onBlur={(e) => {
						props.onBlur && props.onBlur(e);
						setIsFocused(false);
					}}
				/>
				{postfix}
				<p>{errorMsg}</p>
			</label>
		);
	}
);

export default BaseInput;
