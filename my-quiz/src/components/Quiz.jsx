import { useState, useEffect } from "react";

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch quiz questions from the API using async/await
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(
          "https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple"
        );
        const data = await response.json();

        // Map the response and format the data
        const fetchedQuestions = data.results.map((q) => ({
          question: q.question,
          options: [...q.incorrect_answers, q.correct_answer].sort(),
          correctIndex: [...q.incorrect_answers, q.correct_answer].indexOf(q.correct_answer),
        }));

        setQuestions(fetchedQuestions);
        setLoading(false); // Data is now fetched, stop loading
      } catch (error) {
        console.error("Error fetching questions:", error);
        setLoading(false); // In case of error, stop loading
      }
    };

    fetchQuestions();
  }, []);

  // Handle user answer selection
  const handleAnswer = (index) => {
    if (index === questions[current].correctIndex) {
      setScore(score + 1);
    }

    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setIsFinished(true);
    }
  };

  // If the data is still being loaded, show a loading message
  if (loading) {
    return <div className="text-center text-xl">Loading questions...</div>;
  }

  // If the quiz is finished, show the score
  if (isFinished) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        <h2 className="text-3xl font-bold text-green-600 mb-4">Quiz Completed!</h2>
        <p className="text-lg font-medium">You scored</p>
        <p className="text-5xl font-extrabold text-blue-600 my-4">{score}</p>
        <p className="text-gray-500">out of {questions.length}</p>
      </div>
    );
  }

  // Current question data
  const q = questions[current];

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
      <h2 className="text-xl font-bold text-gray-700 mb-2">
        Question {current + 1} of {questions.length}
      </h2>
      <p className="text-lg font-semibold text-gray-800 mb-6">{q.question}</p>
      <div className="space-y-3">
        {q.options.map((option, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(i)}
            className="w-full py-3 px-4 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-all duration-200"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Quiz;
