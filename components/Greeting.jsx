
const Greeting = () => {
	const currentTime =  new Date();
	const currentHour = currentTime.getHours();

	let greeting = "";

	if(greeting < 12) {
		greeting = "Good morning!";
	} else if (currentHour <= 19) {
		greeting = "Good evening!";
	} else {
		greeting = "Good night!";
	}
	return (
		<h1
			className='
				text-white 
				text-3xl 
				font-semibold
			'
		>
			{greeting}
		</h1>
	)
}

export default Greeting;