import React from 'react'
import style from './FormControl.module.css'
import { WrappedFieldProps } from 'redux-form'

export const Textarea: React.FC<WrappedFieldProps> = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error
  return (
    <div className={style.formControl + ' ' + (hasError ? style.error : '')}>
      {hasError && <i>{meta.error}</i>}
      <div>
        <textarea {...input} {...props} className={style.type_mssg_area} />
      </div>
    </div>
  )
}

export const Input: React.FC<WrappedFieldProps> = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error
  return (
    <div className={style.formControl + ' ' + (hasError ? style.error : '')}>
      {hasError && <i>{meta.error}</i>}
      <div>
        <input {...input} {...props} className={style.type_login_area} />
      </div>
    </div>
  )
}
