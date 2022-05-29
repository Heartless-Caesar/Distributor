//TO DO - Add submit functionality with Axios

const ModalPages = () => {
    const [show, setShow] = useState(false)

    const [page, setPage] = useState(1)

    const handleClose = () => setShow(false)

    const handleShow = () => setShow(true)

    const nextPage = () => setPage(2)

    const submit = () => {
        setPage(1), setShow(false)
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>
            {page == 1 ? (
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
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Woohoo, you're reading this text in a modal number 2!
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={submit}>
                            Submit
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </>
    )
}

export default ModalPages
