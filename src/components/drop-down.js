import React, { useState } from 'react';
import { Row, Col, Collapse, Button, CardBody, Card } from 'reactstrap';

const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const category = props.category;

    console.log("Props : ", props)
    return (
        <Row className="">
            <Col xs="6" md="6">
                <Row className="justify-content-end">
    <Button color="muted" onClick={toggle} style={{ margin: `1.25rem`, width:`190px`, background:`lightgrey` }} className="justify-content-center"><span style={{float:`left`}}>{category.title}</span> <span style={{ display: (isOpen ? `block`: `none`), paddingLeft:`8px`, float:`right`}}> &#9650;</span> <span style={{ display: (isOpen ? `none`: `block`), paddingLeft:`8px`, float:`right`}}>&#9660;</span></Button>
                </Row>
            </Col>
            <Col xs="8" md="6" style={{ paddingLeft:`0` }} className="offset-2 offset-md-0">
                <Collapse isOpen={isOpen}>
                    <Card style={{ backgroundColor: `black` }}>
                        <CardBody>
                            <ul>
                                {category.items.map(item => (
                                    <li style={{ color: `white`, fontWeight: `bold` }}>{item}</li>
                                ))}
                            </ul>
                        </CardBody>
                    </Card>
                </Collapse>
            </Col>
            <Col xs="8" md="6" className="offset-2 offset-md-3" style={{borderBottom:(props.index + 1 < props.itemsLength ? `1px solid white` : ``)}}></Col>
        </Row>
    );
}

export default Example;