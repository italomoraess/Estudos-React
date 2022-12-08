import { useState } from "react";

type Props = {
    title: string;
}

export const Contador = ({ title }: Props) => {
    const [number, setNumber] = useState(0);

    const handleSum = () => {
        setNumber(number + 1)
    }

    const handleSub = () => {
        setNumber(number - 1)
    }

    const stacks = ['javascript', 'typescript', 'node.js'];

    return (
        <>
            <button onClick={handleSum}>{title} +</button>
            <div>{number}</div>
            <button onClick={handleSub}>{title} -</button>
            <ul>
                {stacks.map((stack, index) => {
                    return <li key={index}>{stack}</li>
                })
                }
            </ul>
        </>
    );
}