import React from 'react'
import { Card, Col} from "react-bootstrap"
import {Link} from 'gatsby';

const EmployeeCard = ({edge}) => {
        return (
            <Col md="4" className='mt-4 mr-4'>
            <Link to = {`/employees/${edge.node.slug}`}>
              <Card>
              <Card.Img
                variant="top"
                src={edge.node?.image?.file?.url || ""}
                style={{height: '300px',objectFit: 'cover'}}
              />
              <Card.Body>
                <Card.Title>{edge.node.name}</Card.Title>
                <Card.Text>{edge.node.designation}</Card.Text>
              </Card.Body>
            </Card>
            </Link>
          </Col>
        );
}

export default EmployeeCard;