import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

export default function FirstPost() {
	return (
	<>
		<Head>
			<title>Online Festival</title>
		</Head>
		<h1>Online Festival Grounds</h1>
		<h2>
		BROWSER's 3-day festival will take place in virtual reality. 
		Bookmark this page, and come back on June 11th to experience the 
		program live with other online avatars.
		</h2>

		<h2>
		Friday June 11th
		</h2>
		<h3>
		Open Gallery - all day <br /> interactive and installative works
		</h3>
		<h2>
		Saturday June 12th
		</h2>
		<h3>
		EVENT 1: 7:00-8:30pm (CEST) / 10:00-12:30am (PDT)  <br />
		Premiere and Presentation of New Works by <br />
		Delia Ramos Rodríguez + Nikolay Suslov  <br />
		Jana De Troyer + Steffen Reichelt <br />
		Carla Tapparo + Rapo Francisco <br /> <br />
		Open Gallery - all day 
		</h3>
		<h2>
		Sunday June 13th
		</h2>
		<h3>
		EVENT 2: 7:00-8:30pm (CEST) / 10:00-12:30am (PDT)  <br />
		Premiere and Presentation of New Works by <br />
		Solomiya Moroz + Curt Miller  <br />
		Zak Argabrite + Becky Brown <br />
		Kevin CK Lo  <br /> <br />
		Open Gallery - all day 
		</h3>
		<h3>
			<Link href="/">
				<a>Back to Homepage</a>
			</Link>
		</h3>

 
	</>


		)
}




