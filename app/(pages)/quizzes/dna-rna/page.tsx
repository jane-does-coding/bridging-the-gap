import Quiz from "@/components/Quiz/Quiz";
import { DnaRnaData } from "@/data/DnaRna";
import React from "react";

const page = () => {
	const questions = DnaRnaData;
	return (
		<>
			<Quiz questions={questions} title="DNA RNA Quiz" />
		</>
	);
};

export default page;
