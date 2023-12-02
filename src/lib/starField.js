class StarField {
	constructor(canvasId, numStars) {
		this.canvas = document.getElementById(canvasId);
		this.ctx = this.canvas.getContext('2d');

		// Set canvas size
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;

		// Generate stars
		this.stars = [];

		for (let i = 0; i < numStars; i++) {
			this.stars.push({
				x: Math.random() * this.canvas.width,
				y: Math.random() * this.canvas.height,
				radius: Math.random() * 2,
				color: 'rgba(255,255,255,0.4)'
			});
		}

		// Resize canvas on window resize
		window.addEventListener('resize', () => {
			this.canvas.width = window.innerWidth;
			this.canvas.height = window.innerHeight;
		});
	}

	update() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

		for (const star of this.stars) {
			// Move stars towards the center to create the illusion of movement
			star.x -= 0.5;
			star.y -= 0.5;

			// Reset stars when they move off-screen
			if (star.x < 0 || star.y < 0) {
				star.x = this.canvas.width + Math.random() * 200;
				star.y = this.canvas.height + Math.random() * 200;
			}

			// Draw stars
			this.ctx.beginPath();
			this.ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
			this.ctx.fillStyle = star.color;
			this.ctx.fill();
		}

		requestAnimationFrame(() => this.update());
	}

	start() {
		// Start the animation
		this.update();
	}
}

// Create a new StarField instance with a denser star field (1000 stars)
const starfield = new StarField('starfield', 400);

// Start the animation
starfield.start();