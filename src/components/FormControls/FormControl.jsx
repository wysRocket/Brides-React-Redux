import React from 'react';
import style from './FormControl.module.css';

export const Textarea = ({input, meta, ...props}) => {
    
    const hasError = meta.touched && meta.error;

    return (
        <div className={style.formControl + ' ' + (hasError ? style.error : '')}>
            { hasError && <i>{meta.error}</i> }
            <div>
            <textarea {...input} {...props} className={style.type_mssg_area}/>
            </div>
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    
    const hasError = meta.touched && meta.error;

    return (
        <div className={style.formControl + ' ' + (hasError ? style.error : '')}>
            { hasError && <i>{meta.error}</i> }
            <div>
            <input {...input} {...props} className={style.type_login_area}/>
            </div>
        </div>
    )
}