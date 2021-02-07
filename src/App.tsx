import React from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
	return (
		<div className='App'>
			<nav className='navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0'>
				<a className='navbar-brand col-sm-3 col-md-2 mr-0' href='#'>
					Company name
				</a>
				<input
					className='form-control form-control-dark w-100'
					type='text'
					placeholder='Search'
					aria-label='Search'
				/>
				<ul className='navbar-nav px-3'>
					<li className='nav-item text-nowrap'>
						<a className='nav-link' href='#'>
							Sign out
						</a>
					</li>
				</ul>
			</nav>

			<div className='container-fluid'>
				<div className='row'>
					<nav className='col-md-2 d-none d-md-block bg-light sidebar'>
						<div className='sidebar-sticky'>
							<ul className='nav flex-column'>
								<li className='nav-item'>
									<a className='nav-link active'>Dashboard</a>
								</li>
							</ul>
						</div>
					</nav>

					<main role='main' className='col-md-9 ml-sm-auto col-lg-10 pt-3 px-4'>
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
					</main>
				</div>
			</div>
		</div>
	)
}

export default App
