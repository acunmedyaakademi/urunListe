let productAdd = document.querySelector(".product");
let clearStorage = document.querySelector(".clearStorage");
let electronic = document.querySelector(".electronic");
let clothes = document.querySelector(".clothes");
let technology = document.querySelector(".technology");
let homeAndKitchen = document.querySelector(".HomeAndKitchen");
let accessories = document.querySelector(".Accessories");

let productsArray = [];

if (typeof localStorage.productsArray !== "undefined") {
  productsArray = JSON.parse(localStorage.productsArray);
  addData.disabled = true;
} else {
  addData.disabled = false;
}

render();

addData.addEventListener("click", function () {
  productsArray = [
    {
      name: "iPhone 14 Pro Max",
      price: 28999,
      category: "Elektronik",
      description:
        "128 GB, Uzay Grisi, A16 Bionic çip, 6.7 inç Super Retina XDR ekran",
      image: "https://www.jebinde.com/Content/ProductImage/Original/638249567761700914-iPhone-14-Pro-Max-128-Gb-Ak%C4%B1ll%C4%B1-Telefon-G%C3%BCm%C3%BC%C5%9F-1.png?width=1000&height=1000&bgcolor=white",
    },
    {
      name: "Samsung Galaxy S23",
      price: 19499,
      category: "Elektronik",
      description:
        "256 GB, Siyah, Exynos 2200, 6.1 inç Dynamic AMOLED 2X ekran",
      image:
        "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/samsung/thumb/137192-1_large.jpg",
    },
    {
      name: "MacBook Air M2",
      price: 32999,
      category: "Elektronik",
      description: "Apple M2 çip, 8 GB RAM, 256 GB SSD, 13.3 inç Retina ekran",
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba13-midnight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1708367688034",
    },
    {
      name: "Sony WH-1000XM4",
      price: 2999,
      category: "Elektronik",
      description:
        "Kablosuz Gürültü Engelleyici Kulaklık, 30 saat pil ömrü, Siyah",
      image:
        "https://productimages.hepsiburada.net/s/122/375-375/110000071870627.jpg",
    },
    {
      name: "Apple Watch Series 8",
      price: 5499,
      category: "Elektronik",
      description: "GPS, 45mm, Gümüş, Spor Kordon",
      image:
        "https://cms.vodafone.com.tr/static/img/content/23-03/21/apple-watch-series-8-gps-41mm-midnight-1_400x400.png",
    },
    {
      name: "Dell XPS 13",
      price: 18999,
      category: "Elektronik",
      description: "Intel Core i7, 16 GB RAM, 512 GB SSD, 13.4 inç FHD ekran",
      image:
        "https://www.notebookcheck-tr.com/uploads/tx_nbc2/xps_13_plus_9320.jpg",
    },
    {
      name: "Canon EOS R5",
      price: 49999,
      category: "Elektronik",
      description: "45 MP, 8K Video, RF Lens Mount, Gövde",
      image:
        "https://www.kiralikkameracim.com/resources/products/details/touched/canon_eos_r5_3.jpg",
    },
    {
      name: "Samsung QLED 8K TV",
      price: 69999,
      category: "Elektronik",
      description: "75 inç, Quantum HDR, Smart TV",
      image: "https://images.samsung.com/is/image/samsung/p6pim/tr/qe98qn990ctxtk/gallery/tr-qled-98qn990c-qe98qn990ctxtk-538759006?$650_519_PNG$",
    },
    {
      name: "Nintendo Switch",
      price: 5999,
      category: "Elektronik",
      description: "Taşınabilir Oyun Konsolu, Neon Mavi/Neon Kırmızı",
      image: "https://m.media-amazon.com/images/I/61-PblYntsL._SX679_.jpg",
    },
    {
      name: "JBL Charge 5",
      price: 1499,
      category: "Elektronik",
      description: "Taşınabilir Bluetooth Hoparlör, Su Geçirmez, Siyah",
      image: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/jbl/thumb/142956-2_large.jpg",
    },
    {
      name: "Nike Air Max 270",
      price: 1999,
      category: "Giyim",
      description: "Siyah/Beyaz, 42 Numara, Günlük Spor Ayakkabı",
      image: "https://akn-barcin.a-cdn.akinoncloud.com/products/2022/09/23/640668/50462966-4955-4267-be66-20d1df3a787e_size900x900_cropCenter.jpg",
    },
    {
      name: "Adidas Ultraboost 21",
      price: 2399,
      category: "Giyim",
      description: "Beyaz, 43 Numara, Koşu Ayakkabısı",
      image: "https://cdn.akakce.com/adidas/adidas-ultraboost-21-erkek-kosu-ayakkabi-z.jpg",
    },
    {
      name: "Levi's 501 Original Fit Jean",
      price: 799,
      category: "Giyim",
      description: "Mavi, 32/32, Erkek Kot Pantolon",
      image: "https://st-levis.mncdn.com/mnresize/3000/1075/Content/media/ProductImg/original/636897113113446858.jpg",
    },
    {
      name: "The North Face Nuptse Jacket",
      price: 3299,
      category: "Giyim",
      description: "Siyah, L Beden, Şişme Mont",
      image: "https://cdn03.ciceksepeti.com/cicek/kcm68711674-1/L/the-north-face-m-1996-retro-nuptse-jacket-erkek-ceket-nf0a3c8dle41-kcm68711674-1-585ef5ff392f464f800c9727c9c267d1.jpg",
    },
    {
      name: "Patagonia Better Sweater",
      price: 1599,
      category: "Giyim",
      description: "Gri, M Beden, Polar Ceket",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6142866WGlIRR7UqXrpj_dJsvXpePijnhhQ&s",
    },
    {
      name: "Ray-Ban Aviator Güneş Gözlüğü",
      price: 1499,
      category: "Giyim",
      description: "Altın Çerçeve, Yeşil Cam, Unisex",
      image: "https://productimages.hepsiburada.net/s/20/375-375/9882454261810.jpg",
    },
    {
      name: "Tommy Hilfiger Polo Tişört",
      price: 599,
      category: "Giyim",
      description: "Lacivert, L Beden, Kısa Kollu",
      image: "https://st-tommy.mncdn.com/mnpadding/1000/1335/FFFFFF/Content/media/ProductImg/original/637588540435823427.webp",
    },
    {
      name: "Gucci Marmont Çanta",
      price: 12999,
      category: "Giyim",
      description: "Siyah, Deri, Omuz Çantası",
      image: "https://www.maslakoutlet.com/u/gucci/canta/gucci-el-cantasi-gg-marmont-small-matelasse-shoulder-bag-siyah.jpg",
    },
    {
      name: "H&M Basic Tişört",
      price: 99,
      category: "Giyim",
      description: "Beyaz, M Beden, %100 Pamuk",
      image: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fda%2Fbb%2Fdabbd74dff4def9aeaf6a8588852bdc7d441fa09.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
    },
    {
      name: "Columbia Bugaboo Pantolon",
      price: 1099,
      category: "Giyim",
      description: "Siyah, L Beden, Su Geçirmez Kışlık Pantolon",
      image: "https://img-phantomcolumbia.mncdn.com/mnresize/1536/-/img/assets/base/originals/SM8360_053-2-231223070450875.jpg",
    },
    {
      name: "Apple iPad Pro",
      price: 13999,
      category: "Teknoloji",
      description: "128 GB, 12.9 inç, Wi-Fi, Gümüş",
      image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-finish-unselect-gallery-1-202405_GEO_EMEA_FMT_WHH?wid=1280&hei=720&fmt=p-jpg&qlt=95&.v=1714199177315",
    },
    {
      name: "Samsung Galaxy Tab S8",
      price: 10499,
      category: "Teknoloji",
      description: "128 GB, 11 inç, Wi-Fi, Gri",
      image: "https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/125045816/125045816_0_MC/d3d1ae26.jpg",
    },
    {
      name: "Amazon Kindle Paperwhite",
      price: 1499,
      category: "Teknoloji",
      description: "8 GB, 6.8 inç, Wi-Fi, Reklamsız",
      image: "https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/786240194/786240194_4_MC/ba7efc6718844c2c939257804b989cee.jpg",
    },
    {
      name: "Sony PlayStation 5",
      price: 16999,
      category: "Teknoloji",
      description: "825 GB SSD, DualSense Kontrolcü",
      image: "https://productimages.hepsiburada.net/s/523/375-375/110000580193101.jpg",
    },
    {
      name: "Microsoft Xbox Series X",
      price: 15999,
      category: "Teknoloji",
      description: "1 TB SSD, Kablosuz Kontrolcü",
      image: "https://i0.shbdn.com/photos/20/80/63/x5_1155208063b0r.jpg",
    },
    {
      name: "DJI Mavic Air 2",
      price: 12999,
      category: "Teknoloji",
      description: "4K Kamera, 34 Dakika Uçuş Süresi",
      image: "https://m.media-amazon.com/images/I/71C2W+bBW6L.jpg",
    },
    {
      name: "GoPro HERO10",
      price: 7999,
      category: "Teknoloji",
      description: "5.3K Video, 23 MP Fotoğraf",
      image: "https://m.media-amazon.com/images/I/71sinY0qhTL._AC_SL1500_.jpg",
    },
    {
      name: "Fitbit Charge 5",
      price: 1999,
      category: "Teknoloji",
      description: "Fitness ve Sağlık Takip Cihazı, Siyah",
      image: "https://resim.epey.com/757983/m_fitbit-charge-5-1.jpg",
    },
    {
      name: "Razer Blade 15",
      price: 27999,
      category: "Teknoloji",
      description: "Intel Core i7, 16 GB RAM, 1 TB SSD, 15.6 inç FHD, RTX 3070",
      image: "https://www.notebookcheck-tr.com/uploads/tx_nbc2/4zu3_Razer_Blade_15_Advanced_Model_2020.jpg",
    },
    {
      name: "Logitech MX Master 3",
      price: 999,
      category: "Teknoloji",
      description: "Kablosuz Lazer Mouse, Siyah",
      image: "https://m.media-amazon.com/images/I/61ni3t1ryQL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      name: "KitchenAid Stand Mikser",
      price: 5999,
      category: "Ev ve Mutfak",
      description: "4.8 Litre, Paslanmaz Çelik Kase, Kırmızı",
      image: "https://example.com/kitchenaid.jpg",
    },
    {
      name: "Dyson V11 Kablosuz Süpürge",
      price: 8999,
      category: "Ev ve Mutfak",
      description: "60 Dakika Kullanım, LCD Ekran",
      image: "https://example.com/dysonv11.jpg",
    },
    {
      name: "Philips Hue Akıllı Ampul",
      price: 499,
      category: "Ev ve Mutfak",
      description: "Renkli ve Beyaz Işık, Bluetooth, 1 Adet",
      image: "https://example.com/philips-hue.jpg",
    },
    {
      name: "Nespresso Lattissima Touch",
      price: 3999,
      category: "Ev ve Mutfak",
      description: "Kapsül Kahve Makinesi, Beyaz",
      image: "https://example.com/nespresso.jpg",
    },
    {
      name: "Bosch Buzdolabı",
      price: 12999,
      category: "Ev ve Mutfak",
      description: "505 Litre, NoFrost, A++ Enerji Sınıfı",
      image: "https://example.com/boschfridge.jpg",
    },
    {
      name: "Tefal Ingenio Tava Seti",
      price: 1599,
      category: "Ev ve Mutfak",
      description: "6 Parça, Yapışmaz Yüzey, Siyah",
      image: "https://example.com/tefalset.jpg",
    },
    {
      name: "IKEA Billy Kitaplık",
      price: 599,
      category: "Ev ve Mutfak",
      description: "80x28x202 cm, Beyaz",
      image: "https://example.com/ikeabilly.jpg",
    },
    {
      name: "Dyson Pure Cool Hava Temizleyici",
      price: 4999,
      category: "Ev ve Mutfak",
      description: "Hava Temizleme ve Soğutma, WiFi",
      image: "https://example.com/dysonpurecool.jpg",
    },
    {
      name: "Rowenta Silence Force Elektrikli Süpürge",
      price: 3299,
      category: "Ev ve Mutfak",
      description: "750W, Torbasız, Sessiz",
      image: "https://example.com/rowenta.jpg",
    },
    {
      name: "Fakir Kaave Türk Kahve Makinesi",
      price: 899,
      category: "Ev ve Mutfak",
      description: "4 Fincan Kapasitesi, Beyaz",
      image: "https://example.com/fakir.jpg",
    },
    {
      name: "Samsung Galaxy Watch 5",
      price: 3499,
      category: "Aksesuarlar",
      description: "44mm, Siyah, GPS, Kalp Atış Hızı Monitörü",
      image: "https://example.com/galaxywatch5.jpg",
    },
    {
      name: "Apple AirPods Pro 2",
      price: 4999,
      category: "Aksesuarlar",
      description: "Gürültü Engelleyici, Kablosuz Şarj Kutusu",
      image: "https://example.com/airpodspro2.jpg",
    },
    {
      name: "Garmin Fenix 6 Pro",
      price: 8999,
      category: "Aksesuarlar",
      description: "GPS Multisport Saat, Siyah",
      image: "https://example.com/garminfenix6.jpg",
    },
    {
      name: "Sony WF-1000XM4",
      price: 2499,
      category: "Aksesuarlar",
      description: "Kablosuz Gürültü Engelleyici Kulaklık, Siyah",
      image: "https://example.com/sonywf1000xm4.jpg",
    },
    {
      name: "Fitbit Versa 3",
      price: 2999,
      category: "Aksesuarlar",
      description: "Fitness ve Sağlık Akıllı Saat, Siyah",
      image: "https://example.com/fitbitversa3.jpg",
    },
    {
      name: "Bose QuietComfort 45",
      price: 4499,
      category: "Aksesuarlar",
      description: "Kablosuz Gürültü Engelleyici Kulaklık, Beyaz",
      image: "https://example.com/boseqc45.jpg",
    },
    {
      name: "Anker PowerCore 20000",
      price: 699,
      category: "Aksesuarlar",
      description: "20000mAh Taşınabilir Şarj Cihazı, Siyah",
      image: "https://example.com/ankerpowercore.jpg",
    },
    {
      name: "Sandisk Extreme Pro SSD",
      price: 1999,
      category: "Aksesuarlar",
      description: "1 TB, Taşınabilir, USB-C",
      image: "https://example.com/sandiskextremepro.jpg",
    },
    {
      name: "Belkin Boost Up Kablosuz Şarj Cihazı",
      price: 499,
      category: "Aksesuarlar",
      description: "10W, Qi Sertifikalı, Beyaz",
      image: "https://example.com/belkinboostup.jpg",
    },
    {
      name: "Logitech C920s HD Pro Webcam",
      price: 999,
      category: "Aksesuarlar",
      description: "1080p HD Video, Entegre Mikrofon",
      image: "https://example.com/logitechc920s.jpg",
    },
    {
      name: "Wacom Intuos Grafik Tablet",
      price: 1999,
      category: "Aksesuarlar",
      description: "Bluetooth, 10 inç, Siyah",
      image: "https://example.com/wacomintuos.jpg",
    },
  ];
  save();
  render();
  addData.disabled = true;
});

function handleAddProduct(e) {
  e.preventDefault();
  let formData = new FormData(productAdd);
  let formObj = Object.fromEntries(formData);

  productsArray.push({
    name: formObj.name,
    price: Number(formObj.price),
    category: formObj.category,
    description: formObj.description,
    image: formObj.image,
  });

  save();
  render();
  productAdd.reset();
}

productAdd.addEventListener("submit", handleAddProduct);

function render() {
  electronic.innerHTML = "";
  clothes.innerHTML = "";
  technology.innerHTML = "";
  homeAndKitchen.innerHTML = "";
  accessories.innerHTML = "";

  for (let i = 0; i < productsArray.length; i++) {
    if (productsArray[i].category === "Elektronik") {
      electronic.innerHTML += `<div class="productBox">
     <div class = "tittle">
      <h2>${productsArray[i].name}</h2>
      <p>${productsArray[i].price} TL</p>
      </div>
      <div class = "text">
      <p>${productsArray[i].description}</p>
      <img src="${productsArray[i].image}" alt="" />
      </div>
      </div>
  `;
    } else if (productsArray[i].category === "Giyim") {
      clothes.innerHTML += `<div class="productBox">
     <div class = "tittle">
      <h2>${productsArray[i].name}</h2>
      <p>${productsArray[i].price} TL</p>
      </div>
      <div class = "text">
      <p>${productsArray[i].description}</p>
      <img src="${productsArray[i].image}" alt="" />
      </div>
      </div>
  `;
    } else if (productsArray[i].category === "Teknoloji") {
      technology.innerHTML += `<div class="productBox">
     <div class = "tittle">
      <h2>${productsArray[i].name}</h2>
      <p>${productsArray[i].price} TL</p>
      </div>
      <div class = "text">
      <p>${productsArray[i].description}</p>
      <img src="${productsArray[i].image}" alt="" />
      </div>
      </div>
  `;
    } else if (productsArray[i].category === "Ev ve Mutfak") {
      homeAndKitchen.innerHTML += `<div class="productBox">
     <div class = "tittle">
      <h2>${productsArray[i].name}</h2>
      <p>${productsArray[i].price} TL</p>
      </div>
      <div class = "text">
      <p>${productsArray[i].description}</p>
      <img src="${productsArray[i].image}" alt="" />
      </div>
      </div>
  `;
    } else if (productsArray[i].category === "Aksesuarlar") {
      accessories.innerHTML += `<div class="productBox">
     <div class = "tittle">
      <h2>${productsArray[i].name}</h2>
      <p>${productsArray[i].price} TL</p>
      </div>
      <div class = "text">
      <p>${productsArray[i].description}</p>
      <img src="${productsArray[i].image}" alt="" />
      </div>
      </div>
  `;
    } else {
      null;
    }
  }
}

function save() {
  localStorage.productsArray = JSON.stringify(productsArray);
}

function handleClear() {
  localStorage.clear();
  electronic.innerHTML = "";
  clothes.innerHTML = "";
  technology.innerHTML = "";
  homeAndKitchen.innerHTML = "";
  accessories.innerHTML = "";
  productsArray = [];
  render();
  productAdd.reset();
  addData.disabled = false;
}

clearStorage.addEventListener("click", handleClear);
