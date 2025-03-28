
const HamMenue = ({className ,onClick}) => {
    return (
        <div className={className} onClick={onClick} >
           <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 7H21" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M3 12H21" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M3 17H21" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
        </div>
    );
};

export default HamMenue;