import React, { createRef, useState, useEffect } from 'react'
import { Vec2d } from '../Math/Vec2d' 

function DragBox () {
	const hw = 10;
	const canvasRef = createRef();
	let canvas;
	let ctx;

	const [ point, setPoint ] = useState(new Vec2d(50, 50));
	const [ down, setDown ] = useState(false);

	const Draw = (ctx, x, y) => {
		ctx.clearRect(0, 0, 500, 500);
		ctx.fillRect(x - hw, y - hw, hw * 2, hw * 2);
	}

	const Down = ({clientX, clientY}) => {
		canvas = canvasRef.current;
		ctx = canvas.getContext('2d');
		const rect = canvas.getBoundingClientRect();
		const { x, y } = { x : clientX - rect.left, y : clientY - rect.top }
		if ((x - hw < point.x && point.x < x + hw) && (y - hw < point.y && point.y < y + hw))
			setDown(true);
	}

	const Move = ({clientX, clientY}) => {
		if (down)
		{
			canvas = canvasRef.current;
			ctx = canvas.getContext('2d');
			const rect = canvas.getBoundingClientRect();
			const { x, y } = { x : clientX - rect.left, y : clientY - rect.top };

			Draw(ctx, x, y);
			setPoint(new Vec2d(x, y));
		}
	}

	const Up = () => {
		setDown(false);
	}

	useEffect(() => {
		canvas = canvasRef.current;
		ctx = canvas.getContext('2d');
		Draw(ctx, point.x, point.y);
	}, [])

	return (
		<>
			<canvas style={{border : "2px solid blue"}}
				ref={canvasRef} width="500" height="500" 
				onMouseDown={Down} onMouseMove={Move} onMouseUp={Up}/>
		</>
	)
}

export default DragBox;