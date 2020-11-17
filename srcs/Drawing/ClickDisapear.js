import React, { useState, useEffect, createRef } from 'react'

function ClickDisapear () {
	const [ points, setPoints ] = useState([]);

	let canvas;
	let canvasRef = createRef();
	let ctx ;

	const Draw = (ctx, points) => {
		points.forEach(point => {
			const {x, y, w, h} = point;
			ctx.clearRect(x, y, w * (1 / 0.85) + 0.5, h * (1 / 0.85) + 0.5);
			if (w > 0.5)
				ctx.fillRect(x, y, w, h);
		})
	}

	const addPoint = () => {
		setPoints([{x : event.offsetX, y : event.offsetY, w : 20, h : 20}, ...points]);
	}

	useEffect(() => {
		canvas = canvasRef.current;
		ctx = canvas.getContext('2d');
		Draw(ctx, points);

		const anim = setTimeout(() => {
			setPoints(points.map(point => {
				let { w, h } = point;
				w = w < 0.5 ? 0 : w * 0.9;
				h = h < 0.5 ? 0 : h * 0.9;

				if (w === 0)
					return null;
				return {...point, w : w, h : h}
			}).filter(e => e !== null));
		}, 100);

		return _ => clearInterval(anim);
	}, [points]);

	return (
		<div >
			<canvas 
				style={{border : "2px solid blue"}}
				ref={canvasRef} width="400" height="300"
				onClick={addPoint}/>
		</div>
	)
}

export default ClickDisapear;