import "./directory.styles.scss"
import "../directory-item/Directory-item.component"
import Directoryitem from "../directory-item/Directory-item.component";

const categories = [
  {
    id: 1,
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    route: "/shop/hats"
  },
  {
    id: 2,
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    route: "/shop/jackets"
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    route: "/shop/sneakers"
  },
  {
    id: 4,
    title: "womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    route: "/shop/womens"
  },
  {
    id: 5,
    title: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    route: "/shop/mens"
  },
];


const Directory = () =>{
      return (
        <div className="directory-container">
          {categories.map(({ title, id, imageUrl,route }) => {
            return <Directoryitem key= {id} title= {title} id={id} imageUrl={imageUrl} route={route}/>
          })}
        </div>
      );
}

export default Directory