import React, { createRef, useEffect } from 'react'

function Head() {
	const canvasRef = createRef();
	let canvas;
	let ctx;

	useEffect(() => {
		canvas = canvasRef.current;
		ctx = canvas.getContext('2d');
		ctx.imageSmoothingEnabled = true;
		const { width , height } = canvas; 
		
		ctx.fillStyle = "rgba(52, 73, 249, 1)";
		ctx.fillRect(0, 0, width, height);

		ctx.beginPath();
		ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
		ctx.moveTo(width - 25, 0);
		ctx.lineTo(width - 65, height);
		ctx.lineTo(width - 40, height);
		ctx.lineTo(width, 0);
		ctx.fill();
		ctx.closePath();

		ctx.beginPath();
		ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
		ctx.moveTo(width, 0);
		ctx.lineTo(width - 40, height);
		ctx.lineTo(width, height);
		ctx.fill();
		ctx.closePath();

	}, [])

	return (
		<>
		<canvas ref={canvasRef}
			style={{width : "100%", height : "15rem"}}/>
		</>
	)
}

export default Head;