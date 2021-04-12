import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const Card1 = ({img,name}) => (
    <div className="card">
    <Card>
        <Image className="mycard" src={img} wrapped ui={false} />
        <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Description>
            Matthew is a musician living in Nashville.
        </Card.Description>
        </Card.Content>
    </Card>
    </div>
)

export default Card1;