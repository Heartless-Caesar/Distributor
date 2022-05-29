import { ContextProvider } from '../Modal'
import { Modal, Button } from 'react-bootstrap'
const ModalPage2 = () => {
    const { show, handleClose, submit } = ContextProvider
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Woohoo, you're reading this text in a modal number 2!
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="warning" onClick={submit}>
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalPage2
