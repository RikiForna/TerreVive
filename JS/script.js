"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const languageSelect = document.getElementById("language-select");
  const texts = {
    it: {
      home: "Home",
      features: "Caratteristiche",
      pricing: "Prezzi",
      contact: "Contatti",
      selectLang: "Seleziona la lingua:",
      wineTitle: "Vino Rosso",
      alcoholContent: "V32",
      ingredients: "Ingredienti",
      ingredient: "Ingrediente",
      quantity: "Quantità",
      grapes: "Uva",
      must: "MOSTO DI UVE CONCENTRATO",
      preservatives: "CONSERVANTI E ANTIOSSIDANTI",
      rawMaterial: "<strong>MATERIA PRIMA</strong>",
      additives: "<strong>CONSERVANTI</strong>",
      stabilizers: "<strong>STABILIZZANTI</strong>",
      // technologicalAids: "<strong>COADIUVANTI TECNOLOGICI</strong>",
      // lieviti: "Lieviti per vinificazione",
      nutrition: "Valori Nutrizionali (per 100ml)",
      component: "Componente",
      value: "Valore",
      energy: "Energia",
      fats: "Grassi",
      saturatedFats: "Acidi grassi insaturi",
      carbohydrates: "Carboidrati",
      sugars: "Zuccheri",
      proteins: "Proteine",
      fibers: "Fibre",
      salt: "Sale",
      recycling: "Raccolta Differenziata",
      material: "Materiale",
      code: "Codice",
      disposal: "Raccolta Differenziata",
      bottiglia: "Bottiglia",
      cap: "Tappo",
      capsule: "Capsula",
      tagliandino: "Tagliandino",
      woodenCage: "Gabbia di legno",
      plasticCage: "Gabbia di plastica",
      disclaimer: "VERIFICARE LE DISPOSIZIONI DEL PROPRIO COMUNE",
      plastica: "Plastica",
      carta: "Carta",
      disposal_dedicated: "Raccolta Differenziata Dedicata",
      glass: "Vetro",
      aluminum: "Alluminio",
      aluminumALU41: "ALU41 (ALLUMINIO)",
      glassGL71: "GL71 vetro a rendere",
      plasticLDPE4: "LDPE4 (PLASTICA)",
      paperPAP20: "PAP20 (CARTA)",
      woodFOR50: "FOR50 (LEGNO)",
      metals: "FOR 51 (sughero)",
      metal: "Organico",
      caps: "capsula",
      pvc: "PVC C90 (Plastica)",
      instructionText: "Separa le componenti e conferiscile nel modo corretto",
    },
    en: {
      home: "Home",
      features: "Features",
      pricing: "Pricing",
      contact: "Contact",
      selectLang: "Select Language:",
      wineTitle: "Red Wine",
      alcoholContent: "V32",
      ingredients: "Ingredients",
      ingredient: "Ingredient",
      quantity: "Quantity",
      grapes: "Grapes",
      must: "CONCENTRATED GRAPE MUST",
      preservatives: "PRESERVATIVES AND ANTIOXIDANTS",
      rawMaterial: "<strong>RAW MATERIAL</strong>",
      additives: "<strong>PRESERVATIVES</strong>",
      stabilizers: "<strong>STABILIZERS</strong>",
      //technologicalAids: "<strong>TECHNOLOGICAL AIDS</strong>",
      //lieviti: "Yeasts for winemaking",
      nutrition: "Nutritional Values (per 100ml)",
      component: "Component",
      value: "Value",
      energy: "Energy",
      fats: "Fats",
      saturatedFats: "unsaturated fatty acids",
      carbohydrates: "Carbohydrates",
      sugars: "Sugars",
      proteins: "Proteins",
      fibers: "Fibers",
      salt: "Salt",
      recycling: "Recycling",
      material: "Material",
      code: "Code",
      disposal: "Recycling",
      bottiglia: "Bottle",
      cap: "Cap",
      capsule: "Capsule",
      tagliandino: "Tag",
      woodenCage: "Wooden Cage",
      plasticCage: "Plastic Cage",
      disclaimer: "CHECK YOUR LOCAL REGULATIONS",
      plastica: "Plastic",
      carta: "Paper",
      disposal_dedicated: "Dedicated Recycling",
      glass: "Glass",
      aluminum: "Aluminum",
      aluminumALU41: "ALU41 (ALUMINUM)",
      glassGL71: "GL71 glass to return",
      plasticLDPE4: "LDPE4 (PLASTIC)",
      paperPAP20: "PAP20 (PAPER)",
      woodFOR50: "FOR50 (WOOD)",
      metals: " CFE91 Metals",
      metal: " Metal",
      pvc: "PVC C90 (Plastic)",
      caps: "capsule",
      instructionText: "Separate the components and dispose of them correctly",
    },
  };

  function changeLanguage(lang) {
    document.querySelectorAll("[data-lang]").forEach((element) => {
      const key = element.getAttribute("data-lang");
      if (texts[lang][key]) {
        element.innerHTML = texts[lang][key];
      }
    });
    localStorage.setItem("selectedLanguage", lang);
  }

  // Imposta sempre l'italiano quando la pagina viene caricata
  const savedLang = "it";
  languageSelect.value = savedLang;
  changeLanguage(savedLang);

  languageSelect.addEventListener("change", function () {
    changeLanguage(this.value);
  });
});
