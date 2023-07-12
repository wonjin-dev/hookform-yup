import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface LoginForm {
	email: string;
	password: string;
}

const loginFormValidation = yup.object({
	email: yup
		.string()
		.required('필수 입력 사항입니다.')
		.matches(
			/^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
			'이메일 형식이 아닙니다'
		),
	password: yup
		.string()
		.required('필수 입력 사항입니다.')
		.min(6, '최소 6자 이상 입력해야 합니다'),
});

const App = () => {
	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm<LoginForm>({
		mode: 'onBlur',
		resolver: yupResolver(loginFormValidation),
	});

	const email = register('email');
	const password = register('password');

	const successCallback = () => {
		alert('폼 제출 성공');
	};

	return (
		<main>
			<form method='post' onSubmit={handleSubmit(successCallback)}>
				<label htmlFor='email'>
					<input {...email} />
					<p>{errors.email && errors.email.message}</p>
				</label>
				<label htmlFor='password'>
					<input {...password} />
					<p>{errors.password && errors.password.message}</p>
				</label>
				<button type='submit'>제출</button>
			</form>
		</main>
	);
};

export default App;
