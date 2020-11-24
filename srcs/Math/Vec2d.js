class Vec2d {
	constructor (x, y) {
		this.x = x;
		this.y = y;
	}

	add(x, y) {
		return new Vec2d(this.x + x, this.y + y);
	}

	sub(vec) {
		return new Vec2d(this.x - vec.x, this.y - vec.y)
	}

	div(value) {
		return new Vec2d(this.x / value, this.y / value);
	}

	mul(value) {
		return new Vec2d(this.x * value, this.y * value);
	}

	len() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}

	norm() {
		if (this.len() === 0)
			return;
		this.x /= this.len();
		this.y /= this.len();
	}

	dir() {
		if (this.len() === 0)
			return this;
		return new Vec2d(this.x / this.len(), this.y / this.len());
	}
}

export const add = (v1, v2) => {
	return v1.add(v2);
}

export const sub = (v1, v2) => {
	return v1.sub(v2);
}

export const dot = (v1, v2) => {
	return (v1.x * v2.x + v1.y * v2.y) / (v1.len() + v2.len())
}

export default Vec2d;