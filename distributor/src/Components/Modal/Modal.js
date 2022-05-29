//TO DO - Add submit functionality with Axios
import React, { useState } from 'react'
import ModalPage1 from './Modal_Pages/recepie_page'
import ModalPage2 from './Modal_Pages/ingredient_page'
import { Button, Container } from 'react-bootstrap'
export const ContextProvider = React.createContext(null)

const ModalPages = () => {
    const [show, setShow] = useState(false)

    const [page, setPage] = useState(1)

    const handleClose = () => setShow(false)

    const handleShow = () => setShow(true)

    const nextPage = () => setPage(2)

    const submit = () => [setPage(1), setShow(false)]

    return (
        <Container>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            {page === 1 ? (
                <ContextProvider
                    value={{
                        handleClose,
                        handleShow,
                        nextPage,
                        submit,
                        page,
                        setPage,
                        show,
                        setShow,
                    }}
                >
                    <ModalPage1 />
                </ContextProvider>
            ) : (
                <ContextProvider
                    value={{
                        handleClose,
                        handleShow,
                        nextPage,
                        submit,
                        page,
                        setPage,
                        show,
                        setShow,
                    }}
                >
                    <ModalPage2 />
                </ContextProvider>
            )}
        </Container>
    )
}

export default ModalPages
