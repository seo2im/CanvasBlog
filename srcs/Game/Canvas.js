import React, { createRef, useEffect, useState } from 'react'
import Vec2d from '../Math/Vec2d'
import Key from './keyCode'
import * as styled from './Style'

function Canvas () {
	const canvasRef = createRef();
	let canvas;
	let ctx;

	const [ pos, setPos ] = useState(new Vec2d(250, 440));
	const [ dir, setDir ] = useState(new Vec2d(0, 0));
	useEffect(() => {
		canvas = canvasRef.current;
		ctx = canvas.getContext('2d');

		ctx.fillStyle = 'black'
		ctx.fillRect(0, 450, 500, 50);
		ctx.fillStyle = 'blue'
		ctx.fillRect(pos.x - 10, pos.y - 10, 20, 20);
	}, []);

	const Event = ({ keyCode }) => {
		console.log(keyCode)

		switch (keyCode) {
			case Key.left :
				setDir(dir.add(-2, 0))
				break;
			case Key.right : 
				setDir(dir.add(2, 0))
				break;
			case Key.space : 
				setDir(dir.add(0, -2))
				break;
		}
	}


	useEffect(() => {
		setPos(pos.add(dir.x, dir.y));
		
		setTimeout(() => {
			if (pos.y === 440) {
				setDir(new Vec2d(dir.x, 0));
			}
			else if (pos.y > 440)
			{
				setPos(new Vec2d(pos.x, 440));
				setDir(new Vec2d(dir.x, 0));
			}
			else if (pos.y < 440)
				setDir(dir.add(0, 0.2));
		})
	}, [dir])

	useEffect(() => {
		ctx = canvasRef.current.getContext('2d');
		ctx.clearRect(0, 0, 500, 450);
		ctx.fillStyle = 'blue';
		ctx.fillRect(pos.x - 10, pos.y - 10, 20, 20);
	}, [pos]);


	return (
		<styled.Div tabIndex={0} onKeyDown={Event} onKeyUp={() => setDir(new Vec2d(0, dir.y))}>
			<canvas ref={canvasRef} 
				width="500px" height="500px"/>
		</styled.Div>
	)
}

export default Canvas;