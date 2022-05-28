import React from 'react';
import {useState, useContext} from'react';
import axios from 'axios';

//for category
// const table = {
//     sports: 21,
//     history: 23,
//     politics: 24
// }


// function Pymodule() {

const API_ENDPOINT = "https://opentdb.com/api.php?"

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [waiting, setWaiting] = useState(true);
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [index, setIndex] = useState(0);
    const [correct, setCorrect] = useState(0);
    const [error, setError] = useState(false);
    const [quiz, setQuiz] = useState(
        {
            amount: 10,
            difficulty: "easy"
        }
    );
    const [isModalOpen, setIsModalOpen] = useState(false);

    const fetchQuestions = async(url) => {
        setLoading(true);
        setWaiting(false);
        const response = await axios(url).catch((err) => console.log(err));
        if(response) {
            const data = response.data.results;
            if(data.length > 0){
                setQuestions(data);
                setLoading(false);
                setWaiting(false);
                setError(false);
            }
            else{
                setWaiting(true);
                setError(true);
            }
        }
        else{
            setWaiting(true);
        }
    }

    const nextQuestion = () => {
        setIndex((oldIndex) => {
            const index = oldIndex + 1;
            if(index > questions.length - 1) {
                openModal();
                return 0;
            }
            else{
                return index;
            }
        });
    }

    const openModal = () => {
        setIsModalOpen(true);
    }

    const checkAnswer = (value) => {
        if(value) {
            setCorrect((oldState) => oldState + 1);
        }
        nextQuestion();
    }

    const closeModal = () => {
        setWaiting(true);
        setCorrect(0);
        setIsModalOpen(false);
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setQuiz({...quiz, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const {amount, difficulty} = quiz;

        const url = `${API_ENDPOINT} amount = ${amount} &difficulty=${difficulty} &type=multiple`
        fetchQuestions(url)
    }
    return ( 
        <AppContext.Provider value={{
                    waiting,
                    loading,
                    questions,
                    index,
                    correct,
                    error,
                    isModalOpen,
                    nextQuestion,
                    checkAnswer,
                    closeModal,
                    quiz,
                    handleChange,
                    handleSubmit
    
    
                }}>
                    {children}
                </AppContext.Provider>
    );
}


// }

// export default Pymodule;

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export {AppContext, AppProvider};