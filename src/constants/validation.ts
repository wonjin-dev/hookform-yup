import * as yup from 'yup';

export const signInFormValidation = yup.object({
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

export const signUpFormValidation = yup.object({
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
	checkPassword: yup
		.string()
		.required('필수 입력 사항입니다.')
		.oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다.'),
	name: yup.string().required('필수 입력 사항입니다.'),
});
