export default class Listener {
	constructor() {
		this.isImageNavigationActive = false
	}

	changeImageNavigationStatus() {
		this.isImageNavigationActive = !this.isImageNavigationActive
	}

	log() {
		console.log(`Navigation active: ${this.isImageNavigationActive}`)
	}
}
