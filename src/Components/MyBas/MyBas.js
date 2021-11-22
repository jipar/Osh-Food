import React, {useState, useEffect, useContext} from 'react'
import { Bas } from '../Bas/Bas'
import Item from '../Item'
import { Modal, Button, FormControl } from 'react-bootstrap'
import axios from 'axios'

const MyBas = () => {

    const [inpV, setInpV] = useState('')
    const [num, setNum] = useState('')
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const Bass = useContext(Bas)

    const inp = (e) => setInpV(e)
    const myNum = (e) => setNum(e)

    const id = -726414806

    const sendM = () => {
        axios.post('https://api.telegram.org/bot2146019791:AAFS6ylpBzl_Utwz9nM3re7-9YBtgjbdrm4/sendMessage', {
            text: `Name: ${inpV} \nNumber: ${num} \nYour meals: ${Bass.basket.map((v) => {
                return v.strMeal
            })}`,
            chat_id: id
        })
        setShow(false)
    }
    return (
       

         <>
                { show 
                    ?
                    <>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Your meals</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <FormControl
                                onChange={(e) => inp(e.target.value)}
                                type="text"
                                placeholder="name"
                            />
                            <FormControl
                                onChange={(e) => myNum(e.target.value)}
                                type="number"
                                placeholder="num"
                                className={'mt-2'}
                            />
                        </Modal.Body>
                        <Modal.Body>
                            <h3>
                                Your meals:
                            </h3>
                            <ul>
                                { Bass.basket.map((v) => {
                                    return <li>{v.strMeal}</li>
                                }) }
                            </ul>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => sendM()}>
                            Save Changes
                        </Button>
                        </Modal.Footer>
                    </Modal>
                    </>
                    :
                    Bass.basket.length === 0 ? <h1>basket is empty</h1>
            :
            <>
            <Button className={'mt-2'} variant="success" onClick={() => handleShow()}>
                Order now...
            </Button>
            <div className={'row'}>
                {Bass.basket.map((v) => {
                    return <Item v={ v } />
                })}
            </div> 
            </>
            }
        </>
    )
}

export default MyBas
