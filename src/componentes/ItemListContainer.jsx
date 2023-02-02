const ItemListContainer = ({greeting}) => {
    return(
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <div className="alert alert-danger" role="alert">
                        <h1>{greeting}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItemListContainer