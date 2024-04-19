
import "./Button.css"
export const Button = (props) => {
    return (
        <div className="Buts  ">
            <button htmlFor={props?.id} >{props?.id}</button>
            
            
        </div>
    );
}