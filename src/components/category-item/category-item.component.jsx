import './category-item.component.scss';

const CategoryItem = ({ category }) => {
    const { title, imageUrl } = category;
    return (
        <div className="category-container">
            <div
                className="background-image"
                style={{ backgroundImage: `url(${imageUrl})` }}>
            </div>
            <div className="category-body-container">
                <h2>{title}</h2>
                <p>Show Now</p>
            </div>
        </div>
    );
}

export default CategoryItem;