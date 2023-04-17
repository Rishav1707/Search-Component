export function filterItems(items, query) {
  query = query.toLowerCase();
  return items.filter((item) =>
    item.name.split(" ").some((word) => word.toLowerCase().startsWith(query))
  );
}

export const foods = [
  {
    id: 0,
    name: "Butter Chicken",
    description:
      "A rich and creamy chicken dish cooked in a tomato-based sauce and finished with butter and cream.",
    src: "https://i0.wp.com/thetwincookingproject.net/wp-content/uploads/2020/08/Indian-Butter-Chicken-Murg-Makhani-Recipe-16.jpg?resize=610%2C915&ssl=1",
  },
  {
    id: 1,
    name: "Biryani",
    description:
      "A fragrant rice dish cooked with spices and either meat, vegetables or both. Biryani is often served with raita (yogurt-based side dish).",
    src: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?cs=srgb&dl=pexels-rajesh-tp-1624487.jpg&fm=jpg",
  },
  {
    id: 2,
    name: "Tandoori Chicken",
    description:
      "Chicken marinated in yogurt and spices, then grilled in a clay oven (tandoor). It is often served with mint chutney and sliced onions.",
    src: "https://www.cubesnjuliennes.com/wp-content/uploads/2022/12/Tandoori-Chicken-1.jpg",
  },
  {
    id: 3,
    name: "Chole Bhature",
    description:
      "A popular North Indian dish consisting of spicy chickpeas (chole) and deep-fried bread (bhature).",
    src: "https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/07/12135352/chole-bhature.jpg",
  },
  {
    id: 4,
    name: "Dosas",
    description:
      "A thin, crispy South Indian pancake made from fermented rice and lentil batter, often served with sambar (spicy lentil soup) and coconut chutney.",
    src: "https://t4.ftcdn.net/jpg/01/89/45/21/360_F_189452136_gJBG4ZRXY9NnZZCGV2s8QhObmpeerJTO.jpg",
  },
  {
    id: 5,
    name: "Samosas",
    description:
      "Triangular pastry filled with spiced vegetables or meat, usually deep-fried and served with chutney.",
    src: "https://images.pexels.com/photos/4449068/pexels-photo-4449068.jpeg?cs=srgb&dl=pexels-satyam-verma-4449068.jpg&fm=jpg",
  },
  {
    id: 6,
    name: "Vada Pav",
    description:
      "A popular street food from Mumbai, consisting of a potato patty (vada) served in a bread roll (pav) with chutneys and spices.",
    src: "https://www.196flavors.com/wp-content/uploads/2022/07/Vada-Pav-1.jpg",
  },
  {
    id: 7,
    name: "Palak Paneer",
    description:
      "A vegetarian dish made with paneer (Indian cheese) and spinach, cooked in a creamy tomato-based sauce.",
    src: "https://media.istockphoto.com/id/851889508/photo/palak-paneer.jpg?s=612x612&w=0&k=20&c=5xcTOeOYTnihYzSG4OYaLVkhgn1EOgehU73aiZnhhNA=",
  },
  {
    id: 8,
    name: "Lassi",
    description:
      "A refreshing yogurt-based drink, often sweetened and flavored with fruit or spices.",
    src: "https://lh3.googleusercontent.com/mVmw9Y4icBWWayslNBY8wv4YqisHBl4raxWOtKgWHXqvXigveYpkr5Q8qzM0DNdtB26mvDmTLJd0DnlO9JfV0HdI7KxNlhzqXC0XNHtI0w",
  },
  {
    id: 9,
    name: "Gulab Jamun",
    description:
      "A dessert made with deep-fried milk solids, soaked in a sugar syrup and flavored with cardamom and saffron.",
    src: "https://static.toiimg.com/thumb/65841454.cms?width=1200&height=900",
  },
  {
    id: 10,
    name: "Rogan Josh",
    description:
      "A popular Kashmiri dish made with lamb or mutton, cooked in a spicy tomato-based sauce.",
    src: "https://glebekitchen.com/wp-content/uploads/2017/07/roganjoshfront.jpg",
  },
  {
    id: 11,
    name: "Chicken Tikka Masala",
    description:
      "A spicy and creamy chicken dish cooked in a tomato-based sauce, often served with rice or naan bread.",
    src: "https://www.cubesnjuliennes.com/wp-content/uploads/2018/05/Chicken-Tikka-Masala-recipe.jpg",
  },
  {
    id: 12,
    name: "Aloo Gobi",
    description:
      "A vegetarian dish made with potatoes (aloo) and cauliflower (gobi), cooked with spices and served with rice or naan bread.",
    src: "https://cookingfromheart.com/wp-content/uploads/2020/11/Aloo-Gobi-Matar-4.jpg",
  },
  {
    id: 13,
    name: "Malai Kofta",
    description:
      "A vegetarian dish made with vegetable balls (kofta) in a creamy tomato-based sauce, often served with rice or naan bread.",
    src: "https://www.carveyourcraving.com/wp-content/uploads/2021/09/Best-Malai-Kofta-recipe.jpg",
  },
  {
    id: 14,
    name: "Chicken Korma",
    description:
      "A mild and creamy chicken dish made with yogurt and cashew nut paste, often served with rice or naan bread.",
    src: "https://recipe52.com/wp-content/uploads/2022/04/chicken-korma-11.jpg",
  },
  {
    id: 15,
    name: "Chicken Biryani",
    description:
      "A spicy rice dish made with marinated chicken, basmati rice, and a blend of aromatic spices.",
    src: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/01/Chicken-Biryani.jpg",
  },
  {
    id: 16,
    name: "Dal Makhani",
    description:
      "A creamy and flavorful lentil dish made with black lentils, kidney beans, and spices.",
    src: "https://www.jcookingodyssey.com/wp-content/uploads/2020/06/daal-makhni-05.jpg",
  },
  {
    id: 17,
    name: "Paneer Tikka",
    description:
      "A vegetarian dish made with marinated paneer cubes, grilled in a tandoor oven and served with chutney.",
    src: "https://geekrobocook.com/wp-content/uploads/2021/03/6.-Paneer-Tikka.jpg",
  },
  {
    id: 18,
    name: "Sarson ka Saag",
    description:
      "A popular Punjabi dish made with mustard greens and spinach, served with makki di roti (corn bread).",
    src: "https://www.cubesnjuliennes.com/wp-content/uploads/2018/12/Sarson-Ka-saag-Recipe.jpg",
  },
  {
    id: 19,
    name: "Shahi Paneer",
    description:
      "A vegetarian dish made with paneer (Indian cottage cheese) in a creamy tomato-based sauce, flavored with nuts and saffron.",
    src: "https://img.freepik.com/free-photo/vertical-shot-traditional-indian-paneer-butter-masala-cheese-cottage-curry-black-surface_181624-32001.jpg?w=2000",
  },
  {
    id: 20,
    name: "Upma",
    description:
      "A popular South Indian breakfast dish made with semolina, vegetables, and spices.",
    src: "https://thumbs.dreamstime.com/z/upma-uppumavu-uppittu-dish-indian-subcontinent-most-common-south-maharashtrian-sri-lankan-tamil-breakfast-119700026.jpg",
  },
  {
    id: 21,
    name: "Vegetable Biryani",
    description:
      "A fragrant rice dish made with mixed vegetables, spices, and herbs.",
    src: "https://nishkitchen.com/wp-content/uploads/2017/11/Veg-Biryani-5B.jpg",
  },
  {
    id: 22,
    name: "Chana masala",
    description: "A spicy and tangy chickpea curry.",
    src: "https://www.jcookingodyssey.com/wp-content/uploads/2022/08/authentic-chana-masala-recipe-5.jpg.webp",
  },
  {
    id: 23,
    name: "Chaat",
    description:
      "A street food snack made with a mix of ingredients like crispy fried dough, potatoes, chickpeas, yogurt, and chutneys.",
    src: "https://j6e2i8c9.rocketcdn.me/wp-content/uploads/2014/12/Katori-Chaat-Recipe-5.jpg",
  },
  {
    id: 24,
    name: "Chicken tikka masala",
    description:
      "Boneless chicken pieces marinated in spices and grilled, then cooked in a creamy tomato sauce.",
    src: "https://www.recipetineats.com/wp-content/uploads/2018/04/Chicken-Tikka-Masala_0.jpg",
  },
  {
    id: 25,
    name: "Idli",
    description:
      "A steamed rice cake made from fermented rice and lentil batter, often served with sambar and chutneys.",
    src: "https://img.freepik.com/premium-photo/mini-idli-is-smaller-version-soft-spongy-round-shaped-steamed-regular-rice-idli-also-known-as-button-cocktail-idly_466689-80867.jpg?w=2000",
  },
  {
    id: 26,
    name: "Jalebi",
    description:
      "A popular Indian sweet made by deep-frying a wheat flour batter into a pretzel shape and soaking it in sugar syrup",
    src: "https://c8.alamy.com/comp/CE91B0/jalebi-sweet-or-dessert-india-asia-CE91B0.jpg",
  },
  {
    id: 27,
    name: "Kebab",
    description:
      "A type of meat dish made with pieces of meat that have been marinated and grilled on skewers.",
    src: "https://www.teaforturmeric.com/wp-content/uploads/2019/04/Instant-Pot-Shami-Kabab.jpg",
  },
  {
    id: 28,
    name: "Kheer",
    description:
      "A rice pudding made with milk, rice, sugar, and sometimes flavored with cardamom and saffron.",
    src: "https://www.cookshideout.com/wp-content/uploads/2011/05/Aam-ki-Kheer6S.jpg",
  },
  {
    id: 29,
    name: "Kulfi",
    description:
      "A frozen dessert similar to ice cream, but made with condensed milk, sugar, and flavored with cardamom, saffron, and nuts.",
    src: "https://akm-img-a-in.tosshub.com/sites/visualstory/stories/2022_08/story_9881/assets/15.jpeg?time=1661520074",
  },
  {
    id: 30,
    name: "Matar paneer",
    description:
      "A vegetarian dish made with paneer (Indian cottage cheese) and peas in a creamy tomato-based sauce.",
    src: "https://www.cookwithmanali.com/wp-content/uploads/2018/08/Matar-Paneer.jpg",
  },
  {
    id: 31,
    name: "Medu vada",
    description:
      "A crispy South Indian snack made from lentil batter, often served with sambar and chutneys.",
    src: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/07/medu-vada-1.jpg",
  },
  {
    id: 32,
    name: "Naan",
    description:
      "A type of Indian bread made with wheat flour, baked in a tandoor oven.",
    src: "https://www.cookwithmanali.com/wp-content/uploads/2014/11/Soft-Homemade-Naan.jpg",
  },
  {
    id: 33,
    name: "Papadum",
    description:
      "A crispy, thin Indian flatbread made from lentil or chickpea flour.",
    src: "https://5.imimg.com/data5/FO/MS/MY-1750913/plain-papadum-500x500.jpg",
  },
  {
    id: 34,
    name: "Phirni",
    description:
      "A creamy rice pudding made with ground rice, milk, and sugar, often flavored with cardamom and saffron.",
    src: "https://www.spiceupthecurry.com/wp-content/uploads/2020/08/phirni-recipe-1.jpg",
  },
  {
    id: 35,
    name: "Poori",
    description:
      "A deep-fried Indian bread made from wheat flour, often served with potato curry or chana masala.",
    src: "https://ministryofcurry.com/wp-content/uploads/2020/03/puri-7-850x1275.jpg",
  },
  {
    id: 36,
    name: "Puri bhaji",
    description:
      "A popular breakfast dish made with puri (deep-fried bread) and bhaji (spicy potato curry).",
    src: "https://media.istockphoto.com/id/952018646/photo/masala-aloo-sabzi-also-known-as-bombay-potatoes-served-with-fried-puri-or-poori-in-a-steel.jpg?s=612x612&w=0&k=20&c=FlFuUzVYSEwXWpcS3fbeb8MYraYDUwmkiUix1P7kGVE=",
  },
  {
    id: 37,
    name: "Raita",
    description:
      "A yogurt-based side dish made by mixing yogurt with chopped vegetables, herbs, and spices.",
    src: "https://www.cookwithmanali.com/wp-content/uploads/2020/10/Cucumber-Raita.jpg",
  },
  {
    id: 38,
    name: "Rajma chawal",
    description:
      "A popular North Indian dish made with kidney beans (rajma) and rice (chawal).",
    src: "https://notoutofthebox.in/wp-content/uploads/2018/07/rc9.jpg",
  },
  {
    id: 39,
    name: "Aloo paratha",
    description:
      "A popular North Indian breakfast dish made with wheat flour dough stuffed with spiced potatoes, and cooked on a griddle with butter.",
    src: "https://www.whiskaffair.com/wp-content/uploads/2020/06/Aloo-Paratha-2-1-1200x1800.jpg",
  },
  {
    id: 40,
    name: "Appam",
    description:
      "A South Indian breakfast dish made with fermented rice and coconut batter, often served with stew or curry.",
    src: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/08/appam-recipe-1.jpg",
  },
];
