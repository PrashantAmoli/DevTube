import { useState } from 'react'

const Contact = () => {
	const [data, setData] = useState({})
	return (
		<div>
			<h2>Contact</h2>

			<form action="">
				<input type="text" />

				<textarea name="message" id="message" cols="30" rows="6"></textarea>

				<button type="submit">Submit</button>
			</form>
		</div>
	)
}

export default Contact
