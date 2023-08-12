import "./ProductCard.css"

export const ProductCard = ({product}) => {
    return (
        <>
        <div className="productcard-container">
            <div className="productimage-container row-item">
                <img src={product.imageUrl} alt="" className="productimage" />
            </div>
            <div className="productname-container row-item">
                {product.name}
            </div>
            <div className="productname-description row-item">
                {product.description}
            </div>
            <div className="productprice-container row-item">
                ${product.price}
            </div>
            <div className="productstock-container row-item">
                {product.stock}
            </div>
            <div className="productsupplier-container row-item">
                {product.supplier}
            </div>
        </div>
        </>
    )
}