//TO DO - Add submit functionality with Axios
import React, { useState } from 'react'
import { Button, Container, Modal } from 'react-bootstrap'

const ModalPages = () => {
    const [show, setShow] = useState(null)
    const [modalState, setModalState] = useState(null)

    const handleClose = () => [setModalState(null), setShow(false)]
    const handleShow = () => [setShow(true), setModalState(1)]
    const nextPage = () => setModalState(2)

    return (
        <Container className="d-grid gap-2">
            <Button variant="primary" onClick={handleShow} size="lg">
                Launch add modal
            </Button>
            {modalState === 1 ? (
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Woohoo, you're reading this text in a modal!
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={nextPage}>
                            Next
                        </Button>
                    </Modal.Footer>
                </Modal>
            ) : (
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading 2</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Woohoo, you're reading this text in a second modal!
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Submit
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </Container>
    )
}

export default ModalPages
