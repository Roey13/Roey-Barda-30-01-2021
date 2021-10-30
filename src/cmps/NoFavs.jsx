export const NoFavs = ({isLight}) =>{

    const style = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '55px',
        marginTop: '35px',
        color: !isLight && 'white'
    }

    return <div className="no-favs-container" style={style}>
        <h1>No Favorites</h1>
        <h5>You have no favorite cities.</h5>
    </div>

}