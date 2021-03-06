import { CloseButton } from "../CloseButton";

import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

export const feedbackTypes = {
    BUG:{
        title: "Problema",
        image: {
            source: bugImageUrl,
            alt: "Image de inseto"
        }

    },
    IDEA:{
        title: "Ideia",
        image: {
            source: ideaImageUrl,
            alt: "Image de uma lâmpada"
        }

    },
    OTHER:{
        title: "Outro",
        image: {
            source: thoughtImageUrl,
            alt: "Image de um balão de pensamento"
        }

    }
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm(){
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    return (
        <div className="bg-zinc-900 p-4 relation rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

        {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChangd ={setFeedbackType}/>
        ) : (
        <p>Hello world</p>
        )}

        <footer className="text-xs text-neutral-400">
        Feito com ♥ pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
        </footer>
        </div>
    )
}