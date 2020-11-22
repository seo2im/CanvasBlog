import React from 'react'
import ReactDom from 'react-dom'
import { createGlobalStyle } from 'styled-components'

import ClickDisapear from './Drawing/ClickDisapear'
import DragDrawing from './Drawing/DragDrawing' 
import PointShot from './Drawing/PointShot'
import DragBox from './Drawing/DragBox'

import HeadDiv from './Style/HeadDiv'
import Head from './Style/cssHead'

const GlobalStyle = createGlobalStyle`
	body {
		margin : 0;
	}
`

function App () {
	return (
		<div>
			<GlobalStyle />
			<HeadDiv />
			<Head />
		</div>
	)
}

ReactDom.render(<App />, document.getElementById('root'))

/*
<h2>ClickDisapear</h2>
			<ClickDisapear/>
			<h2>DragBox</h2>
			<DragBox />
			<h2>DragDrawing</h2>
			<DragDrawing />
			<h2>PointShot</h2>
			<PointShot />
*/