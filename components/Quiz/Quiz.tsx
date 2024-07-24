"use client";
import React, { useState, useEffect } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { useRouter } from "next/navigation";
import { motion, useAnimation } from "framer-motion";
import { Progress } from "../ui/progress";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import AnimatedTextWord from "../Text/AnimatedTextWord";

interface Question {
	question: string;
	choices: string[];
	correctAnswer: string;
}

const shuffleArray = <T,>(array: T[]): T[] => {
	let shuffled = [...array];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
};

const createShuffledQuestions = (
	data: any,
	numQuestions: number
): Question[] => {
	const shuffledQuestions = shuffleArray(data).slice(0, numQuestions);

	return shuffledQuestions.map((question: any) => ({
		...question,
		choices: shuffleArray(question.choices),
	}));
};

const Quiz = ({
	questions: QuestionsArray,
	title,
}: {
	questions: any;
	title: string;
}) => {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
	const [score, setScore] = useState(0);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [isQuizStarted, setIsQuizStarted] = useState(false);
	const [numQuestions, setNumQuestions] = useState(10);
	const [timerMinutes, setTimerMinutes] = useState(0);
	const [timeLeft, setTimeLeft] = useState(0);
	const [isFading, setIsFading] = useState(false);

	const [questions, setQuestions] = useState<Question[]>(
		createShuffledQuestions(QuestionsArray, numQuestions)
	);

	const animations = {
		fadeIn: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.3 },
		},
		fadeOut: {
			opacity: 0,
			y: 20,
			transition: { duration: 0.3 },
		},
	};

	const controls = useAnimation();

	useEffect(() => {
		if (isFading) {
			controls.start("fadeOut").then(() => {
				setIsFading(false);
				controls.start("fadeIn");
			});
		} else {
			controls.start("fadeIn");
		}
	}, [currentQuestionIndex, isFading]);

	useEffect(() => {
		setQuestions(createShuffledQuestions(QuestionsArray, numQuestions));
		setCurrentQuestionIndex(0);
		setSelectedAnswers([]);
	}, [numQuestions]);

	const currentQuestion = questions[currentQuestionIndex];
	const progressValue = ((currentQuestionIndex + 1) / questions.length) * 100;

	const handleAnswerSelect = (choice: string) => {
		const updatedAnswers = [...selectedAnswers];
		updatedAnswers[currentQuestionIndex] = choice;
		setSelectedAnswers(updatedAnswers);
	};

	const handleNextQuestion = () => {
		if (currentQuestionIndex < questions.length - 1) {
			setIsFading(true);
			setTimeout(() => {
				setCurrentQuestionIndex(currentQuestionIndex + 1);
				setIsFading(false);
			}, 300);
		}
	};

	const handlePrevQuestion = () => {
		if (currentQuestionIndex > 0) {
			setIsFading(true);
			setTimeout(() => {
				setCurrentQuestionIndex(currentQuestionIndex - 1);
				setIsFading(false);
			}, 300);
		}
	};

	const handleSubmit = () => {
		let calculatedScore = 0;
		selectedAnswers.forEach((answer, index) => {
			if (answer === questions[index].correctAnswer) {
				calculatedScore += 1;
			}
		});
		setScore(calculatedScore);
		setIsSubmitted(true);
	};

	const handleStartQuiz = () => {
		setIsQuizStarted(true);
		if (timerMinutes > 0) {
			setTimeLeft(timerMinutes * 60);
		}
	};

	useEffect(() => {
		if (timeLeft > 0) {
			const timerId = setInterval(() => {
				setTimeLeft(timeLeft - 1);
			}, 1000);
			return () => clearInterval(timerId);
		} else if (timeLeft === 0 && timerMinutes > 0) {
			handleSubmit();
		}
	}, [timeLeft]);

	const handleRestartQuiz = () => {
		setIsSubmitted(false);
		setIsQuizStarted(false);
		setCurrentQuestionIndex(0);
		setSelectedAnswers([]);
		setScore(0);
		setQuestions(createShuffledQuestions(QuestionsArray, numQuestions));
	};

	const router = useRouter();

	if (!isQuizStarted) {
		return (
			<div className="w-[100vw] h-screen flex items-center justify-center bg-gradient-to-b from-neutral-50 to-sky-100/75">
				<div className="w-[45vw] min-h-[60vh] bg-white/75 border-[1px] border-neutral-200 mx-auto rounded-[1rem] flex flex-col items-center justify-center px-12">
					<AnimatedTextWord text={title} className="jura text-[2.5rem] mb-8" />
					<div className="mb-8 w-full">
						<AnimatedTextWord
							text="Number of Questions:"
							className="block mx-auto text-center mb-4 text-[1.25rem] jura"
						/>
						<select
							id="num-questions"
							value={numQuestions}
							onChange={(e) => setNumQuestions(parseInt(e.target.value))}
							className="w-full bg-sky-100 border-sky-200 border-[2px] rounded-full px-6 py-3 text-[1rem]"
						>
							<option value={10}>10</option>
							<option value={25}>25</option>
							<option value={50}>50</option>
							<option value={100}>100</option>
							<option value={150}>150</option>
							<option value={QuestionsArray.length}>All</option>
						</select>
					</div>
					<div className="mb-8 w-full">
						<AnimatedTextWord
							text="Set Timer (minutes):"
							className="block mx-auto text-center mb-4 text-[1.25rem] jura"
						/>
						<select
							id="timer"
							value={timerMinutes}
							className="w-full bg-sky-100 border-sky-200 border-[2px] rounded-full px-6 py-3 text-[1rem]"
							onChange={(e) => setTimerMinutes(parseInt(e.target.value))}
						>
							<option value={0}>No Timer</option>
							{Array.from({ length: 90 }, (_, i) => i + 1).map((minute) => (
								<option key={minute} value={minute}>
									{minute}
								</option>
							))}
						</select>
					</div>
					<button
						className="w-full bg-blue-200 hover:bg-blue-300/75 rounded-full py-3 text-[1.1rem] mt-4"
						onClick={handleStartQuiz}
					>
						Start Quiz
					</button>
				</div>
			</div>
		);
	}

	if (isSubmitted) {
		return (
			<div className="w-[100vw] h-screen flex items-center justify-center bg-gradient-to-b from-neutral-50 to-sky-100/75">
				<div className="w-[50vw] min-h-[60vh] bg-white/75 border-[1px] border-neutral-200 mx-auto rounded-[1rem] flex flex-col items-center justify-center px-12">
					<h2 className="text-[1.5rem] mb-4">Quiz Completed!</h2>
					<p className="text-[1.2rem]">
						Your score: {score}/{questions.length}
					</p>
					<button
						onClick={handleRestartQuiz}
						className="w-full bg-blue-200 hover:bg-blue-300/75 rounded-full py-3 text-[1.1rem] mt-12"
					>
						Restart
					</button>
				</div>
			</div>
		);
	}

	return (
		<div className="w-[100vw] h-screen flex items-center justify-center bg-gradient-to-b from-neutral-50 to-sky-100/75">
			<div className="w-[50vw] min-h-[40vh] bg-white/75 border-[1px] border-neutral-200 mx-auto rounded-[1rem] flex flex-col">
				<div className="w-[90%] mx-auto flex items-center justify-center gap-4 mt-8">
					<Progress value={((currentQuestionIndex + 1) / numQuestions) * 100} />
					<p className="flex items-center justify-center">{`${
						currentQuestionIndex + 1
					}/${questions.length}`}</p>
				</div>
				{timerMinutes > 0 && (
					<div className="w-[90%] mx-auto flex items-center justify-center mt-4">
						<p className="text-[1rem]">
							Time left:{" "}
							{`${Math.floor(timeLeft / 60)}:${
								timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60
							}`}
						</p>
					</div>
				)}
				<h2 className="w-[90%] jura mx-auto mt-6 text-[1.3rem] pb-6 border-b-[1px] border-neutral-200">
					<motion.div variants={animations} initial="fadeIn" animate={controls}>
						{currentQuestion.question}
					</motion.div>
				</h2>
				<div className="w-[90%] mx-auto">
					<RadioGroup
						onValueChange={(value) => handleAnswerSelect(value)}
						className="my-6 mb-12"
						value={selectedAnswers[currentQuestionIndex] || ""}
					>
						{currentQuestion.choices.map((choice, index) => (
							<motion.div
								key={index}
								variants={animations}
								initial="fadeIn"
								animate={controls}
								className="flex space-x-3 items-center justify-start"
							>
								<RadioGroupItem value={choice} id={choice} className="" />
								<Label htmlFor={choice} className="jura text-[1.25rem] my-2">
									{choice}
								</Label>
							</motion.div>
						))}
					</RadioGroup>
				</div>
				<div className="w-[90%] mx-auto mt-auto mb-4 flex justify-between gap-4">
					<button
						onClick={handlePrevQuestion}
						disabled={currentQuestionIndex === 0}
						className="w-full bg-blue-200 hover:bg-blue-300/75 rounded-full py-3 text-[1.1rem] flex items-center justify-center gap-2"
					>
						<IoIosArrowBack size={24} />
						Previous
					</button>
					{currentQuestionIndex < questions.length - 1 ? (
						<button
							onClick={handleNextQuestion}
							className="w-full bg-blue-200 hover:bg-blue-300/75 rounded-full py-3 text-[1.1rem] flex items-center justify-center gap-2"
						>
							Next
							<IoIosArrowForward size={24} />
						</button>
					) : (
						<button
							onClick={handleSubmit}
							className="w-full bg-blue-200 hover:bg-blue-300/75 rounded-full py-3 text-[1.1rem]"
						>
							Submit
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default Quiz;
