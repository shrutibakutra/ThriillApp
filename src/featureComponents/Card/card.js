import { Card, CardBody, CardText, CardTitle } from "reactstrap"
import "./card.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CardThrill = ({ title, cardText, classname, border, src }) => {
    return (
        <Card className={[
            "card-thriill",
            classname,
            border && "card-thriill--border"
        ]}
        >
            <FontAwesomeIcon icon={src} className="card-thriill__icon"/>
            <CardBody>
                <CardTitle tag="h5">
                    {title}
                </CardTitle>

                <CardText>
                    {cardText}
                </CardText>
            </CardBody>
        </Card>
    )
}
export default CardThrill;