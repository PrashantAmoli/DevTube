import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/layout/layout.module.css'

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<img src="../../public/favicon.ico" alt="ICON" />

			<ul>
				<Link href="/">
					<a>Home</a>
				</Link>

				<Link href="/courses">
					<a>Courses</a>
				</Link>

				<Link href="/contact">
					<a>Contact Us</a>
				</Link>

				<Link href="/profile">
					<a>Profile</a>
				</Link>
			</ul>
		</nav>
	)
}

export default Navbar
