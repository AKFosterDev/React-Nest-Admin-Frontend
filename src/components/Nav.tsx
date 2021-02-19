import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Nav = () => {
	const [user, setUser] = useState({
		first_name: '',
	})

	useEffect(() => {
		const getUser = async () => {
			const { data } = await axios.get('user')

			setUser(data)
		}

		getUser()
	}, [])

	return (
		<nav className='navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow'>
			<a className='navbar-brand col-sm-3 col-md-2 mr-0 px-3' href='#'>
				Company name
			</a>

			<ul className='my-2 my-md-8 mr-md-3'>
				<a className='p-2 text-white text-decoration-none' href='#'>
					{user?.first_name}
				</a>
				<a className='p-2 text-white text-decoration-none' href='#'>
					Sign out
				</a>
			</ul>
		</nav>
	)
}

export default Nav
