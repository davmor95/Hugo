import {Button, Col, Form} from "react-bootstrap";
import {useState} from "react";
import ChatBox from "./ChatBox";
import {SendToBot} from "../api/SendToBot";

const SplitPane = (props) => {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    );
}

const HugoForm = () => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        birthDate: "",
        email: "",
        phoneNumber: "",
        address: "",
        socialSec: "",
        city: "",
        zip: "",
        accountType: "",


    });
    const [chatBox, setChatBox] = useState("");

    const [showChatBox, setShowChatBox] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        let data = JSON.stringify({
            text: 'i want to open an account',
            userid: user.firstName,
            usertype: user.accountType
        });
        console.log(user);
        console.log(data);
        const response = SendToBot(data);
        if(response.status === 200) {
            console.log("sent to Hugo");
        }

    };

    const submitToHugo = (e) => {
        e.preventDefault();
        console.log(chatBox);
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser((u) => ({
            ...u,
            [name]: value,
        }));
    };

    const onShowChatBox = (e)=> {
        setShowChatBox(!showChatBox);
    }

    const left = <Form onSubmit={handleSubmit}>
        <Form.Row>
            <Col xs={2} className="ml-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" name="firstName" placeholder="Enter First Name" value={user.firstName} onChange={handleChange}/>
            </Col>
            <Col xs={3} className="ml-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text"  name="lastName" value={user.lastName} placeholder="Enter Last Name" onChange={handleChange}/>
            </Col>
        </Form.Row>

        <Form.Row>
            <Col xs={2} className="ml-3">
                <Form.Label>Birth Date</Form.Label>
                <Form.Control type="text" name="birthDate" placeholder="Enter Birth Date" value={user.birthDate} onChange={handleChange}/>
            </Col>
            <Col xs={2} className="ml-3">
                <Form.Label>Social Security</Form.Label>
                <Form.Control type="text" name="socialSec" placeholder="Enter Social Security" value={user.socialSec} onChange={handleChange}/>
            </Col>
        </Form.Row>
        <Form.Row>
            <Col xs={3} className="ml-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter Email" value={user.email} onChange={handleChange}/>
            </Col>
        </Form.Row>
        {/*<Col xs={5}>*/}
        {/*    <Form.Label>Phone Number</Form.Label>*/}
        {/*    <Form.Control type="text" name="phoneNumber" placeholder="###-###-####" />*/}
        {/*</Col>*/}
        <Col xs={5}>
            <Form.Label>Address </Form.Label>
            <Form.Control type="text" name="address" placeholder="1234 Main St" value={user.address} onChange={handleChange}/>
        </Col>

        <Form.Row>
            <Col xs={2} className="ml-3">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" value={user.city} onChange={handleChange}/>
            </Col>

            {/*<Col xs={2} className="ml-3">*/}
            {/*    <Form.Label>User type </Form.Label>*/}
            {/*    <Form.Control name="productType" as="select" defaultValue="Choose..." >*/}
            {/*        <option value="Advisor">Roth IRA</option>*/}
            {/*        <option value="Broker">401 K</option>*/}
            {/*    </Form.Control>*/}
            {/*</Col>*/}

            <Col xs={2}>
                <Form.Label>Zip</Form.Label>
                <Form.Control type="text" name="zip" value={user.zip} placeholder="Enter Zip Code" onChange={handleChange}/>
            </Col>
        </Form.Row>
        <Col xs={2} className="ml-3">
            <Form.Label>Account type </Form.Label>
            <Form.Control name="accountType" as="select" defaultValue="Choose..." value={user.accountType} onChange={handleChange}>
                <option value="Roth IRA">Roth IRA</option>
                <option value="401K">401 K</option>
            </Form.Control>
        </Col>

        <Button variant="primary" type="submit" className="ml-3">Submit</Button>

    </Form>;

    const right = <div><Button variant="info" type="submit" onClick={onShowChatBox}>Say Hi to Hugo</Button>
    {showChatBox && <Form onSubmit={submitToHugo}> <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Ask a question</Form.Label>
        <Form.Control type="text" value={chatBox} onChange={event => setChatBox(event.target.value)} as="textarea" rows={3} />
    </Form.Group> <Button variant="secondary" type="submit">Send to Hugo</Button></Form>}</div>;

    return (
        <div>
            <SplitPane left={left} right={right}/>

        </div>


    )
}
export default HugoForm;
