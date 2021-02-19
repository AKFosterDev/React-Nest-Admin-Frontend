import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Nav = () => {
	const [user, setUser] = useState({
		first_name: '',
	})

	useEffect(() => {
		(async () => {
			const { data } = await axios.get('user')

			setUser(data)
		})()
	}, [])

	const logout = async () => {
		await axios.post('logout', {})
	}

	return (
		<nav className='navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow'>
			<a className='navbar-brand col-sm-3 col-md-2 mr-0 px-3' href='#'>
				Company name
			</a>

			<ul className='my-2 my-md-8 mr-md-3'>
				<Link to='/profile' className='p-2 text-white text-decoration-none'>
					{user?.first_name}
				</Link>
				<Link
					to='/login'
					className='p-2 text-white text-decoration-none'
					onClick={logout}
				>
					Sign out
				</Link>
			</ul>
		</nav>
	)
}

export default Nav
