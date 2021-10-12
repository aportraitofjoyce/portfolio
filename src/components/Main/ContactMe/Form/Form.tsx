import React from 'react'
import s from '../ContactMe.module.scss'
import emailjs from 'emailjs-com'
import {useFormik} from 'formik'

type FormInitValues = {
    name: string
    email: string
    message: string
}

export const Form = () => {
    const validate = (values: FormInitValues) => {
        const errors = {} as FormInitValues
        if (!values.name) errors.name = 'Name is required'
        if (!values.email) errors.email = 'Email is required'
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) errors.email = 'Invalid email address'
        return errors
    }
    const onSubmit = async (values: FormInitValues) => {
        try {
            await emailjs.send('gmail', 'template_7eyueer', values, 'user_22VRdmcJd0uaKf5W0EuQ4')
            alert('Thank you! I will contact you soon')
        } catch (e) {
            alert(e.text)
        }
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        } as FormInitValues,
        validate,
        onSubmit: async values => {
            await onSubmit(values)
            formik.resetForm()
        }
    })

    return (
        <form onSubmit={formik.handleSubmit} className={s.formContainer}>
            <input type='text' placeholder={'Name'} {...formik.getFieldProps('name')}/>
            {formik.errors.name && formik.touched.name &&
			<div style={{color: 'red'}}>{formik.errors.name}</div>}

            <input type='text' placeholder={'Email'} {...formik.getFieldProps('email')}/>
            {formik.errors.email && formik.touched.email &&
			<div style={{color: 'red'}}>{formik.errors.email}</div>}

            <textarea placeholder={'Say something about your project...'} {...formik.getFieldProps('message')}/>
            {formik.errors.message && formik.touched.message &&
			<div style={{color: 'red'}}>{formik.errors.message}</div>}

            <button type={'submit'}>Send</button>
        </form>
    )
}