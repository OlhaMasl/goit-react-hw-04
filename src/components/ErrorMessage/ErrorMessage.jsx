import s from "./ErrorMessage.module.css"

const ErrorMessage = () => {

    return (
        <div className={s.errorWrap}>
            <p className={s.errorText}>Sorry, something went wrong, try again later!</p>
        </div>
    );
};
 
export default ErrorMessage;