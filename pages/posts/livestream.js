import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

export default function FirstPost() {
	return (
	<>
		<Head>
			<title>Livestream</title>
		</Head>
		<h1>Livestream</h1>
		<h2>
		Experience a conventional livestream of BROWSER's 3-day festival here. The interactive components of the new works will be observed through the POV of another user.
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


const YourComponent = () => (
  <Image
    src="SKAM_logo_RZ.jpg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Your Name"
  />
)
