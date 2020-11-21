import React from 'react'
import ReactDom from 'react-dom'

import ClickDisapear from './Drawing/ClickDisapear'
import DragDrawing from './Drawing/DragDrawing' 
import pointShot from './Drawing/PointShot'
import PointShot from './Drawing/PointShot'
import DragBox from './Drawing/DragBox'

function App () {
	return (
		<div>
			<h2>DragBox</h2>
			<DragBox />
		</div>
	)
}

ReactDom.render(<App />, document.getElementById('root'))
