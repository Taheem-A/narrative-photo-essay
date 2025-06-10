import './Card.css';
import { FiRepeat } from 'react-icons/fi';

function Card({ header, }) {
    return (
        <div className="card">
            <div className="cardContent">
                <p className="cardHeader">
                    Find The Best Places In Switzerland
                </p>
                <FiRepeat className="cardIcon" />
            </div>
        </div>
    )
}