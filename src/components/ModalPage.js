import React from 'react'


const ModalPage = ({modalData}) => {
  const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const {id,description} = modalData
  return (
   
      <div id={id} className="active">
        This is modal
        <h2>{id}</h2>
        <span className="description">{description}</span>
        <button onClick={changesShow}>Close me</button>
      </div>
  )
}

export default ModalPage