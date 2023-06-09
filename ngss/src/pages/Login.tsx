/* COMPONENTS */
import Button from '../components/ui/Button'
import Loading from '../components/ui/Loading'
/* STYLE */
import '../styles/login.css'
/* REDUX DISPATCH */
import { useAppDispatch, useAppSelector } from '../store/hooks'
/* REDUX AUTH ACTION */
import { postAuth, getUserById } from '../store/features/authSlice'
/* ROUTE */
import { useNavigate, Navigate } from 'react-router-dom'

const Login: React.FC = () => {

	/* get auth states from store */
	const { loginLoading, loginError, loginStatus } = useAppSelector(state => state.auth)
	
	const dispatch = useAppDispatch()

	const navigate = useNavigate()

	/* a function to handles the form submission and dispatches the postAuth action */
	const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		/* create payload for auth state */
		const form = event.currentTarget
		const payload = {
			username: form.username.value,
			password: form.password.value
		}
		/* if form areas filled, execute dispatches */
		if (payload.username && payload.password) {
			/* update auth state */
			const result = await dispatch(postAuth(payload))
			/* update user state using userId from auth state response */
			const userId = result.payload.id
			dispatch(getUserById(userId))
			/* if form succeed navigate user */
			if (loginStatus) {
				navigate('/')
			}
		}
	}

	/* if user is logged in already, navigate immediatly(hide) login page */
	if (loginStatus) {
		return <Navigate replace to='/' />
	}
	/* if user is bot logged in, display login page */
	return (
		<section className='login flex-center'>
			<div className='login-form-container flex-center'>
				<div className='login-form-wrapper'>
					<figure className='ngss-logo'>
						<img src='https://h8cc60.n3cdn1.secureserver.net/wp-content/uploads/2020/09/ngss-logo.png' alt='ngss' />
					</figure>
					<form action='' className='login-form' onSubmit={handleFormSubmit}>
						<div className='login-inputs flex-center'>
							<div className='form-input-wrapper'>
								<label htmlFor='username'>Enter your username</label>
								<input type='text' id='username' name='username' required />
							</div>
							<div className='form-input-wrapper'>
								<label htmlFor='password'>Enter your password</label>
								<input type='password' id='password' name='password' required />
							</div>
						</div>
						<Button type='submit' classname='login-submit flex-center'>
							Login
							{/* display Loading component during loginLoading */}
							{loginLoading && <span className='form-loader'><Loading /></span>}
						</Button>
					</form>
				</div>
				{/* display loginError state if authentication fails */}
				<p className='login-form-hint'>{loginError && loginError}</p>
			</div>
		</section>
	)
}

export default Login