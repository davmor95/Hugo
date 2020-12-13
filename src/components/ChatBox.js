import {Form} from "react-bootstrap";
import {useEffect} from "react";

const ChatBox = () => {
    // useEffect({
    //
    // });
    return (
        <div>
            
            <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label></Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>

        </div>
    )
}

export default ChatBox;
