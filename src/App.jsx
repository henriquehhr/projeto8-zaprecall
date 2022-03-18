import React from "react";
import StartScreen from "./components/StartScreen/index";
import PlayScreen from "./components/PlayScreen";


export default function App() {

    const [startRecall, setStartRecall] = React.useState(false);

    if (startRecall)
        return (<PlayScreen />);
    return (<StartScreen startRecall={setStartRecall} />);
}