import React from 'react'
import { Link } from 'react-router-dom'

export const AppLayout: React.FC = ({ children }) => (
	<div className="container">
		<Link to="/" className="text-center">
			<h1>Construct-Co</h1>
		</Link>
		{children}
	</div>
)

export default AppLayout
