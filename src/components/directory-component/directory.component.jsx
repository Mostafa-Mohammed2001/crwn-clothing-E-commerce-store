import "./directory.styles.scss"
import "../category-item/category-item.component"
import CategoryItem from "../category-item/category-item.component";

const Directory = ({categories}) =>{
      return (
        <div className="directory-container">
          {categories.map(({ title, id, imageUrl }) => {
            return <CategoryItem key= {id} title= {title} id={id} imageUrl={imageUrl} />
          })}
        </div>
      );
}

export default Directory