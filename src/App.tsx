import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Menu from './components/Menu'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Nav />
				<Menu />

				<div className='container-fluid'>
					<div className='row'>
						<main
							role='main'
							className='col-md-9 ml-sm-auto col-lg-10 pt-3 px-4'
						>
							<Route path={'/'} exact component={Dashboard} />
							<Route path={'/users'} component={Users} />
						</main>
					</div>
				</div>
			</BrowserRouter>
		</div>
	)
}

export default App
