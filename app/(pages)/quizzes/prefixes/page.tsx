import Quiz from "@/components/Quiz/Quiz";
import { MedicalPrefixesData } from "@/data/MedicalPrefixesData";
import React from "react";

const page = () => {
	const questions = MedicalPrefixesData;
	return (
		<>
			<Quiz questions={questions} title="Medical Prefixes" />
		</>
	);
};

export default page;
