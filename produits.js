
console.log ("tp2:catalogue des produits");
    const produits=[
        {id:1,nom:"clavier",catédorie:"Accessoires",prix:120,stock:5},
        {id:2,nom:"souris",catédorie:"Accessoires",prix:80,stock:8},
        {id:3,nom:"écran",catédorie:"Informatique",prix:900,stock:0},
        {id:4,nom:"casque",catédorie:"Accessoires",prix:240,stock:3},
    ]
    console.log(produits);
    for(const  produit of produits){
    console.log(`Nom: ${produit.nom},Prix: ${produit .prix} MAD`);
}
const produitDisponible =produits.filter(
  produitDisponible => produitDisponible .stock>0
);
console.log(`nombre:${ produitDisponible.length}`);
const sommeTotal = produits.reduce( (somme, p) => somme + (p.prix * p.stock), 0);
console.log(` ${sommeTotal} MAD`);

if (produitDisponible.length === 0) {
  console.log("Aucun produit disponible.");
} else {
  const produitMoinsCher = produitDisponible.reduce((min, p) => p.prix < min.prix ? p : min);
  console.log(`Nom: ${produitMoinsCher.nom} , Prix: ${produitMoinsCher.prix} MAD`);
}

function estValide(produit) {
   return (
     typeof produit.prix === 'number' && Number.isFinite(produit.prix) && produit.prix >= 0 &&
     typeof produit.stock === 'number' && Number.isFinite(produit.stock) && produit.stock >= 0
   );
  
}console.log(("Est-ce que le produit est valide ?", estValide(produits[0])));

 
 const { nom, prix,  } = produitMoinsCher;

console.log("nom:" +nom);
console.log("prix:" +prix);