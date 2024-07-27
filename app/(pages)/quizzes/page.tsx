import Footer from "@/components/Landing/Footer";
import Quizzes from "@/components/Quizzes/Quizzes";
import React from "react";

const page = () => {
	const sampleQuizzes = [
		{
			title: "Medical Prefixes",
			description: "Prefixes in Medical Terminology",
			imageUrl: "/prefixes.jpg",
			link: "/quizzes/prefixes",
		},
		{
			title: "Body Systems",
			description: "Body Systems and their functions",
			imageUrl: "/body.jpg",
			link: "/quizzes/body-systems",
		},
		{
			title: "DNA RNA Quiz",
			description: "knowledge related to DNA and RNA",
			imageUrl: "/dna.jpg",
			link: "/quizzes/dna-rna",
		},
	];

	return (
		<div className="bg-gradient-to-b from-neutral-50 to-sky-100">
			<Quizzes quizzes={sampleQuizzes} />
			<br />
			<br />
			<Footer />
		</div>
	);
};

export default page;
