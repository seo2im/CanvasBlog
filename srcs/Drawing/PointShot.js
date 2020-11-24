import React, { createRef, useState, useEffect } from 'react'
import Vec2d from '../Math/Vec2d'

function PointShot () {
	const [ points, setPoints ] = useState([]);
	const canvasRef = createRef();
	let canvas;
	let ctx;

	const BulletPosInit = (pointPos, width , height) => {
		const bullets = [];
		for (let i = 0; i < 7; i++)
		{
			let pos;
			const flag = Math.random();
			if (0 <= flag && flag < 0.25)
				pos = new Vec2d(0, Math.random() * height);
			else if (0.25 <= flag && flag < 0.5)
				pos = new Vec2d(width, Math.random() * height);
			else if (0.5 <= flag && flag <= 0.75)
				pos = new Vec2d(Math.random() * width, 0);
			else
				pos = new Vec2d(Math.random() * width, height);
			bullets.push({ pos : pos, dist : pointPos.sub(pos).div(50) })
		}
		return bullets;
	}

	const MoveBullets = (bullets, pointPos) => {
		return bullets.map(bullet => {
			const { pos, dist } = bullet;
			const newPos = pos.add(dist);
	
			if (newPos.sub(pointPos).len() >= 1)
				return { pos : newPos, dist : dist };
			return null;
		}).filter(e => e !== null);
	}

	const DrawPoint = (ctx, pos, color) => {
		ctx.beginPath();
		ctx.arc(pos.x, pos.y, 10, 0, 2 * Math.PI);
		ctx.fillStyle = color;
		ctx.fill();
	}

	const DrawBullet = (ctx, bullets) => {
		bullets.forEach(bullet => {
			const { pos } = bullet; 
			DrawPoint(ctx, pos, 'red');
		})
	}

	useEffect(() => {
		canvas = canvasRef.current;
		ctx = canvas.getContext('2d');

		ctx.clearRect(0, 0, canvas.width, canvas.height);
		points.forEach(point => {
			const { pos, bullets } = point;
			DrawPoint(ctx, pos, 'black');
			DrawBullet(ctx, bullets);
		})
	}, [points])

	useEffect(() => {
		const anim = setInterval(() => {
			setPoints(points.map(point => {
				const bullets = MoveBullets(point.bullets, point.pos);
				if (bullets.length !== 0)
					return {...point, bullets : bullets}
				return null
			}).filter(e => e !== null));
		}, 10)

		return () => clearInterval(anim);
	}, [points])

	const addPoint = ({ clientX, clientY }) => {
		canvas = canvasRef.current;
		ctx = canvas.getContext('2d');
		const rect = canvas.getBoundingClientRect();
		const { x, y } = { x : clientX - rect.left, y : clientY - rect.top };
		const pos = new Vec2d(x, y);

		setPoints([...points, {
			pos : pos,
			bullets : BulletPosInit(pos, canvas.width, canvas.height),
		}])
	}

	return (
		<>
		<canvas style={{border : "2px solid blue"}}
			ref={canvasRef} width="500px" height="500px"
			onMouseDown={addPoint}/>
		</>
	)
}

export default PointShot;

/*
	/ This is sample draw & anim same Effect, it make problem /

 	useEffect(() => {
		canvas = canvasRef.current;
		ctx = canvas.getContext('2d');
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		
		points.forEach(point => {
			const { pos, bullets } = point;
			DrawPoint(ctx, pos, 'black');
			DrawBullet(ctx, bullets);
		})

		const anim = setTimeout(() => {
			setPoints(points.map(point => {
				const bullets = MoveBullets(point.bullets, point.pos);
				if (bullets.length !== 0)
					return {...point, bullets : bullets}
				return null
			}).filter(e => e !== null));
		}, 50)
	}, [points])
	*/

