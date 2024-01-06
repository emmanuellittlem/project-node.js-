const express = require("express");
const router = express.Router();

const db = require("../data/db");

router.use("/products/:id", async function(req, res) {
    try {
        const [product, ] = await db.execute("select * from products where id=?", [req.params.id]);
        res.render("urun-details", {
            urun : product[0]
        });
    }
    catch(err) {
        console.log(err);
    }
});

router.use("/products", async function(req, res) {
    try {
        const [products, ] = await db.execute("select * from products");
        res.render("urunler", {
            urunler : products
        });
    }
    catch(err) {
        console.log(err);
    }
})

router.use("/", async function(req, res) {

    try {
        const [products, ] = await db.execute("select * from products where isHome=1");
        res.render("index", {
            urunler : products
        });
    }
    catch(err) {
        console.log(err);
    }

});

module.exports = router;