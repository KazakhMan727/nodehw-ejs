const express = require("express");
const app = express();

app.set("view engine", "ejs");

let laptopsArray = [
    {
        id: 1,
        model: "Lenovo IdeaPad Gaming 3 15IHU6 15.6",
        price: 368990,
        categoryName: "gaming-laptop"
    },

    {
        id: 2,
        model: "Lenovo IdeaPad 5 14ARE05",
        price: 239990,
        categoryName: "notebook"
    },

    {
        id: 3,
        model: "Asus X415EA-EB533",
        price: 329990,
        categoryName: "notebook"
    },

    {
        id: 4,
        model: "HP ENVY 13-ba1017ur",
        price: 419990,
        categoryName: "ultrabook"
    },

    {
        id: 5,
        model: "Acer Nitro 5 AN515-57",
        price: 376990,
        categoryName: "gaming-laptop"
    }
];

app.get("/laptops/:categoryName", (request, response) => {
    let category = request.params.categoryName;
    response.render("laptops", {
        laptopsByCategory: laptopsArray.filter(item => item.categoryName == category)
    });
});

app.listen(8080);