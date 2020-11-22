import React, { useState, useEffect, createRef } from 'react'

function ClickDisapear () {
	const [ points, setPoints ] = useState([]);

	let canvas;
	let canvasRef = createRef();
	let ctx ;

	const Draw = (ctx, points) => {
		points.forEach(point => {
			const {x, y, w, h} = point;
			
			if (w > 0.5)
				ctx.fillRect(x - w/2, y - w/2, w * 2, h * 2);
		})
	}

	const addPoint = ({clientX, clientY}) => {
		canvas = canvasRef.current;
		ctx = canvas.getContext('2d');
		const rect = canvas.getBoundingClientRect();
		setPoints([{x : clientX - rect.left, y : clientY - rect.top, w : 20, h : 20}, ...points]);
	}

	useEffect(() => {
		canvas = canvasRef.current;
		ctx = canvas.getContext('2d');
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		Draw(ctx, points);
	}, [points]);

	useEffect(() => {
		const anim = setInterval(() => {
			setPoints(points.map(point => {
				let { w, h } = point;
				w = w < 0.5 ? 0 : w * 0.9;
				h = h < 0.5 ? 0 : h * 0.9;

				if (w === 0)
					return null;
				return {...point, w : w, h : h}
			}).filter(e => e !== null));
		}, 100);

		return () => clearInterval(anim);;
	}, [points])

	return (
		<div >
			<canvas 
				style={{border : "2px solid blue"}}
				ref={canvasRef} width="400px" height="300px"
				onClick={addPoint}/>
		</div>
	)
}

export default ClickDisapear;