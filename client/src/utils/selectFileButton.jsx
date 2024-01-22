import { useRef } from 'react';

function SelectFileButton() {

    const fileInput = useRef();
    const selectFile = () => {
        fileInput.current.click();
    }

    return (
        <div className='mt-5' >
            <input type="file" style={{ "display": "none" }} ref={fileInput} />
            <button onClick={selectFile} className='btn btn-primary' >
                <span className='ms-2'>Subir</span>
            </button>
        </div>
    );
}

export default SelectFileButton;