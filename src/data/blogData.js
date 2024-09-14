import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import blog4 from "../assets/blog4.jpg";
import blog5 from "../assets/blog5.jpg";
import blog6 from "../assets/blog6.jpg";

const blogData = [
  {
    id: 1,
    title: "Healthy Vegan Collard Green Wraps!",
    description: "It starts with bringing a pot of water to boil on the stove and blanching large collard greens leaves. Blanching the collard greens makes them really flexible,  much easier to roll up and much more pleasant to eat.",
    image: blog1,
  },
  {
    id: 2,
    title: "How to make blueberryCake",
    description: "Succulent blueberries are speckled throughout the coffee cake. The streusel topping’s satisfying crunch, paired with the hint of spice and light sweetness, makes it difficult to stop at just one piece.",
    image: blog2,
  },
  {
    id: 3,
    title: "Apple pancakes for delicious supper",
    description: "This deliciously sweet apple bread with hints of seasonal spices is the perfect fall dessert. Each bite is packed with chunks of apple and hints of cinnamon and vanilla. Make this your new fall favorite indulgence",
    image: blog3,
  },
  {
    id: 4,
    title: "Making sweet Chocolate Ganache",
    description: "Chocolate ganache is the ultimate secret weapon for all things sweet because it’s dead easy to make, incredibly versatile and adds a luxurious touch to anything it graces. Spread on cakes as chocolate ganache frosting, pour over sundaes, make fancy drips, or roll it to make truffles!",
    image: blog4,
  },
  {
    id: 5,
    title: "Unique Dish Moroccan lamb backstrap",
    description: "Lamb backstrap is a cut that’s prized for its tenderness and delicate lamb flavour. You’ll fall in love with the flavourful Moroccan spice rub we’re using today. It’s the perfect match with backstrap!",
    image: blog5,
  },
  {
    id: 6,
    title: "Mexican Breakfast Burrito Bowls!",
    description: "Healthy, delicious Mexican Breakfast Burrito Bowls with roasted sweet potatoes, seasoned black beans, homemade turkey chorizo avocado, cilantro and an egg.  Easy, Full of flavor and lightened-up! Vegan-adaptable.",
    image: blog6,
  },
];

export const topTwoBlogData = () => {
  return blogData.slice(0, 2);
};
export const allBlogData = () => {
  return blogData;
};
