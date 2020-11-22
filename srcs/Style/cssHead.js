import styeld from 'styled-components'
import React from 'react'

const Div = styeld.div`
	width : 100%;
	height : 15rem;
	background-color : rgba(0, 0, 0, 1);
`

const DivT = styeld.div`
	width : 100%;
	height : 15rem;
	background-color : rgba(52, 73, 249, 0.5);

	clip-path : polygon(0 0, 90% 0, 76% 100%, 0% 100%);
`

function cssHead () {
	return (
		<>
		<Div>
			<DivT>

			</DivT>	
		</Div>
		
		</>
	)
}

export default cssHead;