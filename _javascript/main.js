const productData = [{title: "Sand Sea I", brand: "Brooke Holm", cost: "$2600", tags: "\nArt\nPhotography\nMinimal\n", image: "img/product_art-brookeholm.jpg"}, {title: "High Side Table", brand: "Nara Design", cost: "$280", tags: "\nTable\nScandi\n", image: "img/product_table-nara.jpg"}, {title: "Last Chance Mirror", brand: "Blue Dot", cost: "$599", tags: "\nMirror\nMinimal\n", image: "img/product_mirror-bluedot.jpg"}, {title: "Dang Console", brand: "Blu Dot", cost: "$2699", tags: "\nStorage\nSteel\nContemporary\n", image: "img/product_console-bluedot.jpg"}, {title: "Periscope Vase", brand: "Georgina Proud", cost: "$550", tags: "\nContemporary\nCeramics\nSculptural\n", image: "img/product_art-proud.jpg"}, {title: "Wonk Vase Collection", brand: "Blu Dot", cost: "from $149", tags: "\nColour\nCeramics\nVase\n", image: "img/product_vase-bluedot.jpg"}, {title: "Attalos Table Lamp", brand: "Marz Designs", cost: "$675", tags: "\nLamp\nSculptural\nMinimal\n", image: "img/product_lighting-marz.jpg"}, {title: "Prague Ottoman", brand: "Life Interiors", cost: "$795", tags: "\nOttoman\n", image: "img/product_ottoman-life.jpg"}, {title: "Birch Planter", brand: "Life Interiors", cost: "$45", tags: "\nPlanter\nTextural\nGardening\n", image: "img/product_planter-life.jpg"}, {title: "Ipanema TV Unit", brand: "Life Interiors", cost: "$1490", tags: "\nStorage\nRustic\n", image: "img/product_console-life.jpg"}, {title: "Yutta Dugitj Pendant", brand: "Koskela", cost: "$1200", tags: "\nLighting\nNatural Materials\n", image: "img/product_lighting-koskela.png"}, {title: "Nurkka Sofa", brand: "Koskela", cost: "$4420", tags: "\nMinimal\nGeometric\nSeating\n", image: "img/product_sofa-koskela.jpg"}, {title: "Zulta Tribal Cushion", brand: "Fenton & Fenton", cost: "$170", tags: "\nSoft furnishings\nTribal\n", image: "img/product_cushion-fenton.jpg"}, {title: "Unspoken Words", brand: "Angus Martin", cost: "$150", tags: "\nArt\nPainting\nMinimal\n", image: "img/product_art-angusmartin.jpg"}, {title: "Tanner Armchair", brand: "Barnaby Lane", cost: "$990", tags: "\nSeating\nFurniture\nLeather\n", image: "img/product_armchair-barnaby.jpg"}, {title: "Candy Forrest", brand: "Megan Grant", cost: "$560", tags: "\nArt\nPainting\n", image: "img/product_art-megangrant.jpg"}, {title: "Tripod Side Table", brand: "Fenton & Fenton", cost: "$290", tags: "\nTable\nFurniture\n", image: "img/product_table-fenton.jpg"}, {title: "Frank Bar Cabinet", brand: "Brosa", cost: "$1100", tags: "\nStorage\nMid-Century\n", image: "img/product_cabinet-brosa.png"}, {title: "Coco Pendant", brand: "Coco Flip", cost: "$1580", tags: "\nLighting\nMinimal\n", image: "img/product_lighting-coco.jpg"}, {title: "Brando Sideboard", brand: "Fenton & Fenton", cost: "$3900", tags: "\nStorage\nFurniture\nSideboard\n", image: "img/product_sideboard-fenton.jpg"}, {title: "Terrazzo Tooth Stool", brand: "Fenton & Fenton", cost: "$360", tags: "\nSeating\nStool\n", image: "img/product_stool-fenton.jpg"}, {title: "Asymmetrical Black", brand: "Katarina Wells", cost: "$550", tags: "\nSculptural\nCeramics\nMinimal\n", image: "img/product_art-wells.jpg"}];

document.getElementById("featuredProdNum").innerHTML = `
(${productData.length}) Products
`
// Display product QTY

function productTemplate(product) {
  return `
  <div class="column is-one-third-tablet is-one-quarter-widescreen">
    <div class="card">
      <div class="card-image">
      <figure class="image is-1by1">
        <img src="http://jasminevout.com/web-projects/furnish/${product.image}" alt="${product.title}">
      </figure>
      </div>
      <div class="card-content">
        <div class="is-pulled-left">
          <h2 class="title is-5">${product.title}</h2>
          <p class="subtitle is-size-6">${product.brand}</p>
        </div>
        <div class="is-pulled-right">
          <p>${product.cost}</p>
        </div>
      </div>
    </div>
  </div>
  `
}
document.getElementById("products-container").innerHTML = `${productData.map(productTemplate).join('')}`
// Populate Featured Products page with items