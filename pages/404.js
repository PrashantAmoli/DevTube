import Link from 'next/link'

const NotFound = () => {
	return (
		<>
			<h1>Page not found because it doesn't exists. How did you get here?</h1>
			<Link href="/">
				<a>Home </a>
			</Link>
		</>
	)
}
export default NotFound
