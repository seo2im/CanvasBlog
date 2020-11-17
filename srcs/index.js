import React from 'react'
import ReactDom from 'react-dom'

import ClickDisapear from './Drawing/ClickDisapear'
import DragDrawing from './Drawing/DragDrawing' 

function App () {
	return (
		<div>
			
			<h2>DragDrawing</h2>
			<DragDrawing />
		</div>
	)
}

ReactDom.render(<App />, document.getElementById('root'))
