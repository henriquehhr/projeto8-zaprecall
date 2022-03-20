import React from "react";
import StartScreen from "./components/StartScreen/index";
import PlayScreen from "./components/PlayScreen";


export default function App() {

    const [startRecall, setStartRecall] = React.useState(false);
    const [recallGoal, setRecallGoal] = React.useState();

    function startRecallWithGoal(goal) {
        console.log("Recall goal recebido pelo <App>: " + goal);
        setRecallGoal(goal);
        setStartRecall(true);
    }

    if (startRecall)
        return (<PlayScreen startRecall={setStartRecall} recallGoal={recallGoal} />);
    return (<StartScreen startRecallWithGoal={startRecallWithGoal} />);
}