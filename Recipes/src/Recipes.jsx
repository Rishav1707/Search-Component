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
    src: "https://norecipes.com/wp-content/uploads/2017/05/chicken-biryani-11.jpg",
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
  },
  {
    id: 5,
    name: "Samosas",
    description:
      "Triangular pastry filled with spiced vegetables or meat, usually deep-fried and served with chutney.",
  },
  {
    id: 6,
    name: "Vada Pav",
    description:
      "A popular street food from Mumbai, consisting of a potato patty (vada) served in a bread roll (pav) with chutneys and spices.",
  },
  {
    id: 7,
    name: "Palak Paneer",
    description:
      "A vegetarian dish made with paneer (Indian cheese) and spinach, cooked in a creamy tomato-based sauce.",
  },
  {
    id: 8,
    name: "Lassi",
    description:
      "A refreshing yogurt-based drink, often sweetened and flavored with fruit or spices.",
  },
  {
    id: 9,
    name: "Gulab Jamun",
    description:
      "A dessert made with deep-fried milk solids, soaked in a sugar syrup and flavored with cardamom and saffron.",
  },
  {
    id: 10,
    name: "Rogan Josh",
    description:
      "A popular Kashmiri dish made with lamb or mutton, cooked in a spicy tomato-based sauce.",
  },
  {
    id: 11,
    name: "Chicken Tikka Masala",
    description:
      "A spicy and creamy chicken dish cooked in a tomato-based sauce, often served with rice or naan bread.",
  },
  {
    id: 12,
    name: "Aloo Gobi",
    description:
      "A vegetarian dish made with potatoes (aloo) and cauliflower (gobi), cooked with spices and served with rice or naan bread.",
  },
  {
    id: 13,
    name: "Malai Kofta",
    description:
      "A vegetarian dish made with vegetable balls (kofta) in a creamy tomato-based sauce, often served with rice or naan bread.",
  },
  {
    id: 14,
    name: "Chicken Korma",
    description:
      "A mild and creamy chicken dish made with yogurt and cashew nut paste, often served with rice or naan bread.",
  },
];
