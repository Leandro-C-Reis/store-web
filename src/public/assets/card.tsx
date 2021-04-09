
const Card = ({ className }) => {
    return (
        <svg className={className} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 2H2C1.445 2 1.005 2.445 1.005 3L1 9C1 9.555 1.445 10 2 10H10C10.555 10 11 9.555 11 9V3C11 2.445 10.555 2 10 2ZM10 9H2V6H10V9ZM10 4H2V3H10V4Z" />
        </svg>
    );
}

export default Card;