# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Bowtie.destroy_all

  bowties = Bowtie.create([
    {material: "silk",
      pattern: "houndstooth",
      style: "slim",
      wholesale_price: "14.98",
      retail_price: "24.95",
      image_url: "http://www.thetiebar.com/database/products/BS178_l.jpg"
    },
    {material: "silk",
      pattern: "floral",
      style: "slim",
      wholesale_price: "14.45",
      retail_price: "23.95",
      image_url: "http://www.thetiebar.com/database/products/BS184_l.jpg"
    },
    {material: "silk",
      pattern: "paisley",
      style: "traditional",
      wholesale_price: "15.65",
      retail_price: "26.95",
      image_url: "http://www.thetiebar.com/database/products/B1735_l.jpg"
    },
    {material: "wool",
      pattern: "plaid",
      style: "diamond tip",
      wholesale_price: "16.48",
      retail_price: "29.95",
      image_url: "http://www.thetiebar.com/database/products/BD325_l.jpg"
    },
    {material: "cotton",
      pattern: "gingham",
      style: "traditional",
      wholesale_price: "14.35",
      retail_price: "22.95",
      image_url: "http://www.thetiebar.com/database/products/BC570_l.jpg"
    },
    {material: "wool",
      pattern: "plaid",
      style: "traditional",
      wholesale_price: "16.48",
      retail_price: "29.95",
      image_url: "http://www.thetiebar.com/database/products/BW147_l.jpg"
    },
    {material: "cotton",
      pattern: "plaid",
      style: "slim",
      wholesale_price: "14.45",
      retail_price: "22.95",
      image_url: "http://www.thetiebar.com/database/products/BS202_l.jpg"
    },
    {material: "cotton",
      pattern: "striped",
      style: "diamond tip",
      wholesale_price: "14.48",
      retail_price: "23.95",
      image_url: "http://www.thetiebar.com/database/products/BD335_l.jpg"
    },
    {material: "silk",
      pattern: "geometric",
      style: "slim",
      wholesale_price: "15.95",
      retail_price: "28.95",
      image_url: "http://www.thetiebar.com/database/products/BT122_l.png"
    },
    {material: "silk",
      pattern: "plaid",
      style: "diamond tip",
      wholesale_price: "18.95",
      retail_price: "34.95",
      image_url: "http://www.thetiebar.com/database/products/BD324_l.jpg"
    }
  ])
