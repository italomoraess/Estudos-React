type Props = {
    text: string;
    clickFn: (texto: string) => void;
}

export const Button = ({text, clickFn}: Props) => {
    const handleClick = () => {
        clickFn("frase")
    }

    return(
        <button onClick={handleClick}>{text}</button>
    );
}