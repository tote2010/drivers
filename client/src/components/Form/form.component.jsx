import "./form.styles.css";

export default function Form(props) {
    
    const {label, errorMessage, onChange, id, ...inputsProps } = props;

    return(
        <div className="formInput">
            <label>{ label }</label>
            <input { ...inputsProps } onChange={ onChange } />
            <span>{ errorMessage }</span>
        </div>
    );
}











// const Form = (props) => {
    
//     const {label, errorMessage, onChange, id, ...inputsProps } = props;

//     return(
//         <div className="formInput">
//             <label>{ label }</label>
//             <input { ...inputsProps } onChange={ onChange } />
//             <span>{ errorMessage }</span>
//         </div>
//     );
// }

// export default Form;