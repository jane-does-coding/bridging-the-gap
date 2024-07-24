import Quiz from "@/components/Quiz/Quiz";
import { BodySystemsData } from "@/data/BodySystemsData";
import React from "react";

const page = () => {
	const questions = BodySystemsData;
	return (
		<>
			<Quiz questions={questions} title={"Body Systems Quiz"} />
		</>
	);
};

export default page;
