require('dotenv').config();
require('./config/database');

const Yarn = require('./models/yarn');



(async function() {
  
  await Yarn.deleteMany({});
  const yarn = await Yarn.create([
    {title: 'Cascade Noble Cotton', composition:"Cotton 100%", parameters:"100g 400m", img:"https://cdn.shoplightspeed.com/shops/612340/files/56465572/1652x1652x2/cascade-noble-cotton.jpg", price:"5.95", inStock:true},
    {title: 'Queensland Dungarees Fine', composition:"Cotton 90% Elastane 10%", parameters:"100g 350m", img:"https://cdn.shoplightspeed.com/shops/612340/files/56465572/1652x1652x2/cascade-noble-cotton.jpg", price:"7.95", inStock:true},
    {title: 'Dandelion Wine', composition:"Merino Wool 70% Acryl 30%", parameters:"50g 300m", img:"https://cdn.shoplightspeed.com/shops/612340/files/56465572/1652x1652x2/cascade-noble-cotton.jpg", price:"4.95", inStock:true},
    {title: 'S Wetki Na Wetku', composition:"Wool 40% Acryl 55% Elastane 5%", parameters:"100g 400m", img:"https://cdn.shoplightspeed.com/shops/612340/files/56465572/1652x1652x2/cascade-noble-cotton.jpg", price:"5.95", inStock:false},
  ]);

  console.log(yarn)

  process.exit();

})();
