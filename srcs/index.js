import React from 'react'
import ReactDom from 'react-dom'

import Canvas from './Test/canvas.js'

function App () {
	return (
		<div>
			<p>Canvas</p>
			<Canvas />
		</div>
	)
}

ReactDom.render(<App />, document.getElementById('root'))
