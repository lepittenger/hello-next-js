import {useRouter} from 'next/router';

const Login = () => {
    const router = useRouter();

    const onLogin = (event) => {
        event.preventDefault();

        router.push('/dashboard');

    };
    return (
        <>
            <input placeholder="User Name" />
            <input placeholder="Password" type="password" />
            <button onClick={onLogin} type="button">Login</button>
        </>
    )
}

export default Login;