const delayedSuccess = () => {
	setTimesout(() => {
		let success = {'message': 'delayed success!'}
		console.log(sucess);
	}, 500)
}

const delayedException = () => {
	setTimeout(() => {
		try {
			throw new Error('error: delayed exceptioni!');
		} catch (e) {
			console.error(e);
		}
	}, 500)
}

delayedSuccess()
delayedException()
