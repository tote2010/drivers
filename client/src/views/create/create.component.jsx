import "./create.styles.css";

import { useState, useRef } from "react";

function Create() {

    const [input, setInput] = useState({
        nombre: "",
        apellido: "",
        nacionalidad: "",
        imagen: "",
        nacimiento: "",
        descripcion: "",
        escuderias: []
    });

    const [image, setImage] = useState(null);

    const [errors, setErrors] = useState({
        nombre: "",
        apellido: "",
        nacionalidad: "",
        imagen: "",
        nacimiento: "",
        descripcion: "",
        escuderias: []
    });

    const valid = (input) => {
        if(!/^[a-zA-Z\s]*$/.test(input.nombre)) {
            console.log("ERR");
            setErrors({...errors, nombre: "Solo debe usar caracteres alfanuméricos."});
        }
        if(!/^[a-zA-Z\s]*$/.test(input.apellido)) {
            console.log("ERR");
            setErrors({...errors, apellido: "Solo debe usar caracteres alfanuméricos."});
        }
        if(!/^[a-zA-Z]*$/.test(input.nacionalidad)) {
            console.log("ERR");
            setErrors({...errors, nacionalidad: "Solo debe usar caracteres alfanuméricos. Y no deben existir espacios en blanco."});
        }
        if(!/^[a-zA-Z]*$/.test(input.imagen)) {
            console.log("ERR");
            setErrors({...errors, imagen: "Debe seleccionar una imagen."});
        }
    }

    function handleChange(e) {
        setInput((prevInput) => {   //// de esta manera el componente muestra los cambios (componentdidupdate?) para poder ir validando
            const newInput = {
                ...prevInput,
                [e.target.name]: e.target.value
            };
            //const validations = validate(newInput);
            //setErrors(validations)
            valid({
                ...input,
                [e.target.nombre]: e.target.value
            });

            return newInput;
        });
    }

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
          setImage(URL.createObjectURL(event.target.files[0]));
        }
    };

    function handleSubmit(e) {
        e.preventDefault();

        if (Object.values(errors).length > 0) {
            alert("Please complete the information required");
        } else if (
           input.name === '' && 
           input.summary === '' && 
           input.score === '' &&
           input.healthScore === '' &&
           input.steps === '' &&
           !input.dietTypes.length) {
           alert("Please complete the form");}
       else {
           dispatch(addRecipe(input));
           alert('New recipe added successfully!')
           setInput({
               name: "",
               summary: '',
               score: '',
               healthScore: '',
               steps: [],
               dietTypes: []
           });
           history.push('/home')
       }
   }

   function validate(input) {
        const errors = {};
        if (!input.name) errors.name = 'Please complete with a recipe name';
        if (!input.summary) errors.summary = 'Please add some comments about your recipe';
        if (input.score < 1 || input.score > 100) errors.score = 'The score must be a number between 1 and 100';
        if (input.healthScore < 1 || input.healthScore > 100) errors.healthScore = 'The score must be a number between 1 and 100';
        if (!input.steps.length) errors.steps = 'Please detail the steps for your recipe';
        if (!input.dietTypes.length) errors.dietTypes = 'You must select at least one diet type';
        return errors;
    }

    return(
        <div className="create">
            <p>Create Page</p>
            <form onSubmit={ e => handleSubmit(e) }>
                {/* <div>
                    <label>Email:</label>
                    <input className="inputs" name="email" type="text" value={input.email} onChange={e => handleChange(e)}/>
                </div> */}
                <div>
                    <label>Nombre:</label>
                    <input className="inputs" name="nombre" type="text" value={input.nombre} onChange={e => handleChange(e)}/>
                            {/* {errors.name && (
                                <span className="errors">{errors.name}</span>
                            )} */}
                </div>
                <div>
                    <label>Apellido:</label>
                    <input className="inputs" name="apellido" type="text" value={input.apellido} onChange={e => handleChange(e)}/>
                </div>
                <div>
                    <label>Nacionalidad:</label>
                    <input className="inputs" name="nacionalidad" type="text" value={input.nacionalidad} onChange={e => handleChange(e)}/>
                </div>
                <div>
                <label>Imagen:</label>
                    <input accept="image/*" type="file" onChange={onImageChange} className="filetype" />
                    <img alt="" src={image}/>
                </div>
                <div>
                    <label>Fecha de Nacimiento:</label>
                    <input className="inputs" name="nacimiento" type="date" value={input.nacimiento} onChange={e => handleChange(e)}/>
                </div>
                <div>
                    <label>Descripción:</label>
                    <input className="inputs" name="descripcion" type="text-area" value={input.descripcion} onChange={e => handleChange(e)}/>
                </div>
                <div>
                    <label>Escuderias:</label>
                    <input className="inputs" name="descripcion" type="text" value={input.descripcion} onChange={e => handleChange(e)}/>
                </div>
            </form>
        </div>
    );
}

export default Create;