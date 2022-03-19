import React from "react";
import { $SiteFooter } from "./style";

export default function SiteFooter({ answerCount }) {
    const [cardsAnswered, setCardsAnswered] = React.useState(0);

    answerCount.increaseCardsCount = () => {
        setCardsAnswered(cardsAnswered + 1);
    }

    return (
        <$SiteFooter>
            <p>{cardsAnswered}/8 CONCLUÍDOS</p>
        </$SiteFooter>
    );
}