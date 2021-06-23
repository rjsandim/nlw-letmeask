// named export
type ButtonProps = {
    text?: string;
    children?: string
}

export function Button(props: ButtonProps) {
    return (
        <button>{props.text || props.children ||'Default'}</button>
    )
}