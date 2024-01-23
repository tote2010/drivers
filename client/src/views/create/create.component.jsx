import { useState, useEffect } from 'react';
import { useDispatch, useSelector, } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";

import Form from "../../components/Form/form.component.jsx";

//import { validate } from "../../components/Form/Validators/validators.jsx";

import { getAllTeams, addDriver } from '../../redux/actions/index';

import "./create.styles.css";


function Create() {

    const dispatch = useDispatch();
    const teams = useSelector((state) => state.teams);
    const navigateTo = useNavigate();
    const [check, setCheck] = useState([]);

    const [input, setInput] = useState({
        nombre: "",
        apellido: "",
        nacionalidad: "",
        imagen: "test.png",
        nacimiento: "28/05/1981",
        descripcion: "Test"
        //escuderias: []
    });

    const [image, setImage] = useState(null);

    const [errors, setErrors] = useState({
        nombre: "",
        apellido: "",
        nacionalidad: "",
        imagen: "",
        nacimiento: "",
        descripcion: "",
        //escuderias: []
    });

    const validate = (input) => {
        //if(!input.nombre ||  !/^[a-zA-Z\s]*$/.test(input.nombre)) {
        if(!/^[a-zA-Z\s]*$/.test(input.nombre)) {
            console.log("ERR");
            setErrors({...errors, nombre: "Solo debe usar caracteres alfanuméricos."});
            return;
        } else {
            setErrors({...errors, nombre: input.nombre});
        }
        if(!/^[a-zA-Z\s]*$/.test(input.apellido)) {
            console.log("ERR");
            setErrors({...errors, apellido: "Solo debe usar caracteres alfanuméricos."});
            return;
        } else {
            setErrors({...errors, apellido: input.apellido});
        }
        if(!/^[a-zA-Z\s]*$/.test(input.nacionalidad)) {
            console.log("ERR");
            setErrors({...errors, nacionalidad: "Solo debe usar caracteres alfanuméricos. Y no deben existir espacios en blanco."});
            return;
        } else {
            setErrors({...errors, nacionalidad: input.nacionalidad});
        }
        if(!input.imagen) {
            console.log("ERR");
            setErrors({...errors, imagen: "Debe seleccionar una imagen."});
            return;
        } else {
            setErrors({...errors, imagen: input.imagen});
        }
        if(!input.nacimiento) {
            console.log("ERR");
            setErrors({...errors, nacimiento: "Debe seleccionar una fecha de nacimiento."});
            return;
        } else {
            setErrors({...errors, nacimiento: input.nacimiento});
        }
        if(!input.descripcion) {
            console.log("ERR");
            setErrors({...errors, descripcion: "Debe escribir una descripción."});
            return;
        } else {
            setErrors({...errors, descripcion: "input.descripcion"});
        }
    }

    function handleChange(e) {
        setInput((prevInput) => {   //// de esta manera el componente muestra los cambios (componentdidupdate?) para poder ir validando
            const newInput = {
                ...prevInput,
                [e.target.name]: e.target.value
            };
            const validations = validate(newInput);
            setErrors(validations)
            validate({
                ...input,
                [e.target.nombre]: e.target.value
            });
            return newInput;
        });
    }

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
          setImage(URL.createObjectURL(event.target.files[0]));
          setInput({...input, imagen: input.imagen});
        }
    };

    function handleSubmit(e) {

        e.preventDefault();

        if (Object.values(errors).length < 0) {
            alert(`"Faltan campos por completar !"${Object.values(errors)}`);
        // } else if (
        //    input.name === '' && 
        //    input.summary === '' && 
        //    input.score === '' &&
        //    input.healthScore === '' &&
        //    input.steps === '' &&
        //    !input.dietTypes.length) {
        //    alert("Please complete the form");
        } else {
           dispatch(addDriver(input));
           alert('New Driver added successfully!')
           setInput({
               nombre: "",
               apellido: "",
               nacionalidad: "",
               nacimiento: "",
               descripcion: "",
               //escuderias: []
           });
           navigateTo('/home');
       }
   }

    return(
        <div className="create">
            <form onSubmit={ e => handleSubmit(e) }>
                <Form placeholder="nombre"/>
                <Form placeholder="apellido"/>
                <Form placeholder="nacionalidad"/>
                <Form placeholder="nacimiento"/>
                <Form placeholder="descripcion"/>
                <Form placeholder="escuderias"/>
                <div>
                    <button className="submitButton" type="submit">Crear</button>
                    <Link to="/home"><button className="goBackButton">Volver</button></Link>
                </div>              
            </form>
        </div>
    );
}

export default Create;