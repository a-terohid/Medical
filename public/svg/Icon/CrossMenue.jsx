
const CrossMenue = ({className ,onClick}) => {
    return (
        <div className={className} onClick={onClick} >
            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.00098 5L19 18.9991" stroke="#292D32" stroke-width="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.99996 18.9991L18.999 5" stroke="#292D32" stroke-width="1.5" strokeLinecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    );
};

export default CrossMenue;