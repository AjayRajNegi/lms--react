const Product = require("../models/Product");

const insertSampleProducts = async (req, res) => {
  try {
    sampleProducts = [
      {
        name: "Apple iPhone 13",
        category: "Electronics",
        price: 999.99,
        inStock: true,
        tags: ["smartphone", "electronics"],
      },
      {
        name: "Nike Air Max 270",
        category: "Fashion",
        price: 129.99,
        inStock: false,
        tags: ["shoes", "fashion"],
      },
      {
        name: "Canon EOS 80D Camera",
        category: "Electronics",
        price: 799.99,
        inStock: true,
        tags: ["camera", "electronics"],
      },
      {
        name: "Samsung 4K Smart TV",
        category: "Home Entertainment",
        price: 1299.99,
        inStock: false,
        tags: ["tv", "home entertainment"],
      },
      {
        name: "Sony PlayStation 5 Console",
        category: "Gaming",
        price: 499.99,
        inStock: true,
        tags: ["gaming console", "electronics"],
      },
    ];

    const result = await Product.insertMany(sampleProducts);
    res.status(201).json({
      success: true,
      data: `Inserted ${result.length} sample products.`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error ocuured.",
    });
  }
};
const getProductStats = async (req, res) => {
  try {
    const result = await Product.aggregate([
      {
        $match: {
          inStock: true,
          price: {
            $gte: 500,
          },
        },
      },
      {
        $group: {
          _id: "category",
          avgPrice: {
            $avg: "$price",
          },
          count: {
            $sum: 1,
          },
        },
      },
    ]);

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error ocuured.",
    });
  }
};
const getProductAnalysis = async (req, res) => {
  try {
    const result = await Product.aggregate([
      {
        $match: {
          category: "Electronics",
        },
      },
      {
        $group: {
          _id: null,
          totalRevenue: {
            $sum: "$price",
          },
          avgPrice: {
            $avg: "$price",
          },
          maxProductPrice: {
            $max: "$price",
          },
          minProductPrice: {
            $min: "$price",
          },
        },
      },
      {
        $project: {
          _id: 0,
          totalRevenue: 1,
          avgPrice: 1,
          maxProductPrice: 1,
          minProductPrice: 1,
          priceRange: {
            $subtract: ["$maxProductPrice", "$minProductPrice"],
          },
        },
      },
    ]);
    res.status(201).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error ocuured.",
    });
  }
};
module.exports = { insertSampleProducts, getProductStats, getProductAnalysis };
