'use client';
import { useRef, useState } from 'react';
import classes from './image-picker.module.css'
import Image from 'next/image';
const ImagePicker = ({ lable, name }) => {
    const [pickImage,setPickImage]=useState();
    const imageInput = useRef()
    const handalPickClick = () => {
        imageInput.current.click();
    }
    const handalChangeImage=(event)=>{
        const file=event.target.files[0];
        if(!file){
            return;
        }
        const fileReader= new FileReader();
        fileReader.onload=()=>{
            setPickImage(fileReader.result);
        }
        fileReader.readAsDataURL(file)
    }
    return <div className={classes.picker}>
        <lable htmlFor={name}>{lable}</lable>
        <div className={classes.controls}>
            <div className={classes.preview}>
                {!pickImage && <p>NO IMAGE IS SELECTED</p>}
                {pickImage && <Image src={pickImage} alt='your food image' fill/>}
            </div>
            <input
                className={classes.input} 
                type='file' id={name} 
                accept='image/png , image/jpeg' 
                name={name} 
                ref={imageInput}
                onChange={handalChangeImage} />
            <button type='button' className={classes.button} onClick={handalPickClick}>PICK AN IMAGE</button>
        </div>
    </div>
};
export default ImagePicker;