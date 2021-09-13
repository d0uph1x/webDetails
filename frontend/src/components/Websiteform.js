import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button, Card, CardBody } from 'reactstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { toast } from 'react-toastify';
import Contactdetails from './Contactdetails';
import { getContactDetails, saveWebdetails } from '../services/homeservices';


const WebsiteForm = () => {
    toast.configure()
    const [webdetails, setWebdetails] = useState({
        sitename: '', location: '', email: '', scope_of_work: '', contract_values: ''
    })
    const [contactdetails, setContactdetails] = useState({ phone: '8169677630', email: 'rishabh.com', website: 'rishabh.com' })

    const _handleSubmit = async (values) => {
        const saveResp = await saveWebdetails(values)
        if (saveResp.status) {
            toast(saveResp.message, {
                position: "top-right",
                autoClose: 5000,
            });
            setContactdetails({
                phone: ''
            })
        }
        else {
            toast.error(saveResp.message, {
                position: "top-right",
                autoClose: false,
            });
        }
        console.log('Save Response', saveResp)
    }

    useEffect(() => {
        const get_contact_details = async () => {
            const contact_details = await getContactDetails();
            console.log('contact details', contact_details)
            // setContactdetails(contact_details)
        }
        get_contact_details()
    }, [])
    return (
        <>
            <Container>
                <h5 className='text-center my-5'>Client Form</h5>
                <Row>
                    <Col lg={2}></Col>
                    <Col lg={5}>
                        <Contactdetails phone={contactdetails.phone} email={contactdetails.email} website={contactdetails.website} />
                    </Col>
                    <Col lg={4}>
                        <Card className='m-5'>
                            <CardBody>
                                <h5>Client Side Form</h5>
                                <Formik
                                    initialValues={webdetails}
                                    validate={values => {
                                        const errors = {};
                                        if (!values.email) {
                                            errors.email = 'This field is required';
                                        } else if (
                                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                        ) {
                                            errors.email = 'Please input a valid email address';
                                        }
                                        if (!values.contract_values) {
                                            errors.contract_values = 'This field is required'
                                        }
                                        if (!values.sitename) {
                                            errors.sitename = 'This field is required'
                                        }
                                        if (!values.scope_of_work) {
                                            errors.scope_of_work = 'This field is required'
                                        }
                                        if (!values.location) {
                                            errors.location = 'This field is required'
                                        }
                                        return errors;
                                    }}
                                    onSubmit={_handleSubmit}
                                >
                                    {({ isSubmitting }) => (
                                        <Form className='form-horizontal'>
                                            <div className='mt-3'>
                                                <Field type="text" name="sitename" className='form-control' placeholder='SiteName' />
                                                <ErrorMessage name="sitename" component="div" className='text-danger' />
                                            </div>
                                            <div className='mb-3 mt-3'>
                                                <Field type="text" name="location" className='form-control' placeholder='Location' />
                                                <ErrorMessage name="location" component="div" className='text-danger' />
                                            </div>
                                            <div className='mb-3'>
                                                <Field type="email" name="email" className='form-control' placeholder='Email' />
                                                <ErrorMessage name="email" component="div" className='text-danger' />
                                            </div>
                                            <div className='mb-3'>
                                                <Field type="text" name="scope_of_work" className='form-control' placeholder='Scope of Work' />
                                                <ErrorMessage name="scope_of_work" component="div" className='text-danger' />
                                            </div>
                                            <div className='mb-3'>
                                                <Field type="text" name="contract_values" className='form-control' placeholder='Contract Values' />
                                                <ErrorMessage name="contract_values" component="div" className='text-danger' />
                                            </div>
                                            <Button color='primary' type="submit">
                                                Submit
                                            </Button>
                                        </Form>
                                    )}
                                </Formik>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default WebsiteForm
