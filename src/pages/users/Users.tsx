import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Wrapper from '../../components/Wrapper'

const Users = () => {
	const [users, setUsers] = useState([])

	useEffect(() => {
		;(async () => {
			const { data } = await axios.get('users')

			console.log(data)
		})()
	}, [])

	return (
		<Wrapper>
			<div className='table-responsive'>
				<table className='table table-striped table-sm'>
					<thead>
						<tr>
							<th>#</th>
							<th>Header</th>
							<th>Header</th>
							<th>Header</th>
							<th>Header</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1,001</td>
							<td>Lorem</td>
							<td>ipsum</td>
							<td>dolor</td>
							<td>sit</td>
						</tr>
					</tbody>
				</table>
			</div>
		</Wrapper>
	)
}

export default Users
