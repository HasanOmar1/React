

export default function Button({title , cssStyle}){
    return (
        <button className={cssStyle ? 'bold' : ''} >{title}</button>
    )
}