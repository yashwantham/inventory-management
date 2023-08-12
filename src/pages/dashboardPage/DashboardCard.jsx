export const DashboardCard = ({number, text, color}) => {
    return (
        <>
        <div className="dashboard-card-container">
            <div className="numbercount" style={{color: color}}>
                {number}
            </div>
            <div className="textdisplay">
                {text}
            </div>
        </div>
        </>
    )
}