import { useContext } from 'react'
import { ContextProvider } from '../Modal'
import { Modal, Button } from 'react-bootstrap'
const ModalPage1 = () => {
    const { show, handleClose, nextPage } = useContext(ContextProvider)

    return (
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
                <Button variant="warning" onClick={nextPage}>
                    Next
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalPage1
