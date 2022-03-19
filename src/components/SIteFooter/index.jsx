import React from "react";
import { $SiteFooter } from "./style";

export default function SiteFooter({ answerCount }) {
    const [results, setResults] = React.useState([]);

    answerCount.increaseCardsCount = (result) => {
        setResults([...results, result]);
    }

    return (
        <$SiteFooter>
            <p>{results.length}/8 CONCLUÍDOS</p>
            <div>{results}</div>
        </$SiteFooter>
    );
}