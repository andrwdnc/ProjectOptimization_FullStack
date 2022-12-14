const mongoose = require("mongoose");

const Products = require("./models/products.model.js");

mongoose
  .connect("mongodb://127.0.0.1:27017/products_ASJ")
  .then(() => {
    console.log("Connection established");
  })
  .catch((err) => {
    console.log(err);
  });

const preProducts = [
    {
        name: "Logitech mx keys mini",
        price: 89,
        img: "",
        type: "Keyboard",
        specifications: {
            type: "60%",
            switch: "Membrane"
        }
    },
    {
        name: "Razer BlackWidow V3",
        price: 149,
        img: "",
        type: "Keyboard",
        specifications: {
            type: "65%",
            switch: "Yellow"
        }
    },
    {
        name: "Tempest Diablo",
        price: 59,
        img: "",
        type: "Keyboard",
        specifications: {
            type: "100%",
            switch: "Red"
        }
    },
    {
        name: "Logitech K270",
        price: 89,
        img: "",
        type: "Keyboard",
        specifications: {
            type: "100%",
            switch: "Membrane"
        },
    },
    {
        name: "Logitech mx master",
        price: 79,
        img: "",
        type: "Mouse",
        specifications: {
            dpi: "8000",
            color: "Black / Grey"
        },
    },
    {
        name: "Razer viper ultimate",
        price: 120,
        img: "",
        type: "Mouse",
        specifications: {
            dpi: "20000",
            color: "Black / Green"
        },
    },
    {
        name: "Logitech G502 Lightspeed",
        price: 99,
        img: "",
        type: "Mouse",
        specifications: {
            dpi: "25600",
            color: "Black / Blue"
        },
    },
    {
        name: "Logitech M185",
        price: 12,
        img: "",
        type: "Mouse",
        specifications: {
            dpi: "1000",
            color: "Black / Grey"
        },
    },
    {
        name: "AOC 24G2SAE/BK",
        price: 139,
        img: "",
        type: "Monitor",
        specifications: {
            resolution: "1080p",
            inches: "23.9"
        },
    },
    {
        name: "Asus TUF VG249Q1A",
        price: 199,
        img: "",
        type: "Monitor",
        specifications: {
            resolution: "1080p",
            inches: "23.8"
        },
    },
    {
        name: "Samsung Odyssey G3",
        price: 249,
        img: "",
        type: "Monitor",
        specifications: {
            resolution: "1080p",
            inches: "27"
        },
    },
    {
        name: "Lenovo L273e-30",
        price: 149,
        img: "",
        type: "Monitor",
        specifications: {
            resolution: "1080p",
            inches: "27"
        },
    }
]

Products.insertMany(preProducts)
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })