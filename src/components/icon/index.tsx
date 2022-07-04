import Automotive from "./Automotive";
import Fragrance from "./Fragrance";
import Furniture from "./Furniture";
import Groceries from "./Groceries";
import HomeDecoration from "./HomeDecoration";
import { styles } from "./Icon.style";
import Laptop from "./Laptop";
import Lighting from "./Lighting";
import MenShirt from "./MenShirt";
import MenShoes from "./MenShoes";
import MenWatchs from "./MenWatches";
import Motorcycle from "./Motorcycle";
import Skincare from "./Skincare";
import Smartphone from "./Smartphone";
import Sunglasses from "./Sunglasses";
import Tops from "./Tops";
import WomenBag from "./WomenBag";
import WomenDresses from "./WomenDresses";
import WomenJewellery from "./WomenJewellery";
import WhomenShoes from "./WomenShoes";
import WhomenWatches from "./WomenWatches";

export const SVGIcon = Object.freeze({
	automotive: <Automotive style={styles.size} />,
	fragrances: <Fragrance style={styles.size} />,
	furniture: <Furniture style={styles.size} />,
	groceries: <Groceries style={styles.size} />,
	"home-decoration": <HomeDecoration style={styles.size} />,
	laptops: <Laptop style={styles.size} />,
	lighting: <Lighting style={styles.size} />,
	"mens-shirts": <MenShirt style={styles.size} />,
	"mens-shoes": <MenShoes style={styles.size} />,
	"mens-watches": <MenWatchs style={styles.size} />,
	motorcycle: <Motorcycle style={styles.size} />,
	skincare: <Skincare style={styles.size} />,
	smartphones: <Smartphone style={styles.size} />,
	sunglasses: <Sunglasses style={styles.size} />,
	tops: <Tops style={styles.size} />,
	"womens-bags": <WomenBag style={styles.size} />,
	"womens-dresses": <WomenDresses style={styles.size} />,
	"womens-jewellery": <WomenJewellery style={styles.size} />,
	"womens-shoes": <WhomenShoes style={styles.size} />,
	"womens-watches": <WhomenWatches style={styles.size} />,
});
