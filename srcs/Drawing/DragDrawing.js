import React, { createRef, useState } from 'react'

function DragDrawing () {
	const [down, setDown] = useState(false);

	let canvas;
	let canvasRef = createRef();
	let ctx;

	function Draw (event) {
		const { clientX, clientY } = event;
		canvas = canvasRef.current;
		ctx = canvas.getContext('2d');
		const rect = canvas.getBoundingClientRect();
		
		ctx.arc(clientX - rect.left, clientY - rect.top, 5, 0, 2 * Math.PI + 1)
		ctx.fillStyle = 'black';
		ctx.fill();
		ctx.closePath();
	}

	function Down (event) {
		setDown(true);
		Draw(event);
	}

	function Move (down, event) {
		if (down)
			Draw(event)
	}

	function Up () {
		setDown(false);
	}

	return (
		<>
		<canvas ref={canvasRef} width="500px" height="500px"
				style={{border : "2px solid blue"}}
				onMouseDown={Down} onMouseMove={(event) => Move(down, event)} onMouseUp={Up}/>
		</>
	)
}

export default DragDrawing;