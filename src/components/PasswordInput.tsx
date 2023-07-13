import {forwardRef, useState} from 'react';
import BaseInput, {BaseInputProps} from './BaseInput';

const PasswordInput = forwardRef<HTMLInputElement, BaseInputProps>(
	({...props}, ref) => {
		const [passwordExposed, setPasswordExposed] = useState<boolean>(false);

		return (
			<BaseInput
				{...props}
				ref={ref}
				type={passwordExposed ? 'text' : 'password'}
				postfix={
					<button onClick={() => setPasswordExposed(!passwordExposed)}>
						{passwordExposed ? '마스킹 추가' : '마스킹 제거'}
					</button>
				}
			/>
		);
	}
);

export default PasswordInput;
