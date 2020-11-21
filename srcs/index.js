import React from 'react'
import ReactDom from 'react-dom'

import ClickDisapear from './Drawing/ClickDisapear'
import DragDrawing from './Drawing/DragDrawing' 
import pointShot from './Drawing/PointShot'
import PointShot from './Drawing/PointShot'

function App () {
	return (
		<div>
			<h2>PointShot</h2>
			<PointShot />
		</div>
	)
}

ReactDom.render(<App />, document.getElementById('root'))
