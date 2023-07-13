import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import BaseInput from './components/BaseInput';
import PasswordInput from './components/PasswordInput';
import {signInFormValidation} from './constants/validation';

interface LoginForm {
	email: string;
	password: string;
}

const App = () => {
	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm<LoginForm>({
		mode: 'onBlur',
		resolver: yupResolver(signInFormValidation),
	});

	const email = register('email');
	const password = register('password');

	const successCallback = () => {
		alert('폼 제출 성공');
	};

	return (
		<main>
			<form method='post' onSubmit={handleSubmit(successCallback)}>
				<BaseInput {...email} errorMsg={errors.email && errors.email.message} />
				<PasswordInput
					{...password}
					errorMsg={errors.password && errors.password.message}
				/>
				<button>제출</button>
			</form>
		</main>
	);
};

export default App;
