const dataApi = 'http://localhost:8000/items/'

export const getStaticPaths = async () => {
	const res = await fetch(url)
	const data = await res.json()

	const paths = data.map(video => {
		return {
			params: { id: 'A63UxsQsEbU' },
		}
	}) // id should be string

	return {
		paths,
		fallback: false,
	}
}

export const getStaticProps = async context => {
	const id = context.data.id
	const res = await fetch(dataApi + id)
	const data = await res.json()
	// console.log(JSON.stringify(data))

	return {
		props: { data },
	}
}

const Details = ({ data }) => {
	return (
		<>
			<h2>Details /videos/</h2>
			<p>{JSON.stringify(data)}</p>
		</>
	)
}
