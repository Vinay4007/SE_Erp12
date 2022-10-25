import { FormControl, FormHelperText, Input, InputLabel, FormGroup, Typography, Stack } from '@mui/material'
import React from 'react'
import { useFormik } from 'formik'

import { Authenticate } from './Authenticate'

export function FormComponent() {

    const formik = useFormik({
        initialValues: {
            email: "nishantharun64@gmail.com",
            password: "nishanth2002"
        },
        validateOnChange: true,
        isInitialValid: true
    })

    return (
        <div>
            <FormGroup>
                <Stack direction={'column'} columnGap='10'>
                    <FormControl>
                        <InputLabel htmlFor='email' variant='filled'>
                            <Typography variant='subtitle1'>Email</Typography>
                        </InputLabel>
                        <Input name='email' aria-describedby='email_helper' value={formik.values.email}
                            onChange={formik.handleChange} />
                        <FormHelperText id='email_helper' />
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor='password' variant='filled'>
                            <Typography variant='subtitle1'>Password</Typography>
                        </InputLabel>
                        <Input name='password' aria-describedby='password_helper' value={formik.values.password}
                            onChange={formik.handleChange} />
                        <FormHelperText id='password_helper' />
                    </FormControl>
                </Stack>
            </FormGroup>
            <Authenticate values={formik.values} />
        </div>
    )
}
