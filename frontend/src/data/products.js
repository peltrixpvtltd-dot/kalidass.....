export const WHATSAPP_NUMBER = "916230327133";
export const WHATSAPP_DISPLAY = "+91 62303 27133";
export const FACEBOOK_URL = "https://www.facebook.com/share/1CEfTHjgyC/";
export const INSTAGRAM_URL = "https://www.instagram.com/kalidasssweets?utm_source=qr&igsi=NTFwOHgwZXdtbGxw";

export const WEIGHTS = [
  { id: "250g", label: "250 g", factor: 0.25 },
  { id: "500g", label: "500 g", factor: 0.5 },
  { id: "1kg", label: "1 kg", factor: 1 },
];

export const SWEETS = [
  { id: "milkcake", name: "Milk Cake", price: 560, unit: "kg", img: "/images/milkcake.png", desc: "Slow-cooked for hours, caramel-kissed & made with pure milk", cat: "milk", tag: "Signature" },
  { id: "khoya-barfi", name: "Khoya Barfi", price: 500, unit: "kg", img: "/images/khoya_barfi.png", desc: "Traditional & rich khoya delight with silver varq", cat: "milk" },
  { id: "khoya-peda", name: "Khoya Peda", price: 500, unit: "kg", img: "/images/khoya_peda.png", desc: "Soft saffron-cardamom discs of slow-reduced khoya", cat: "milk" },
  { id: "kalakand", name: "Kalakand", price: 600, unit: "kg", img: "/images/kalakand.png", desc: "Moist, delicate & crowned with pistachio slivers", cat: "milk", tag: "Premium" },
  { id: "mix-mithai", name: "Mix Mithai", price: 460, unit: "kg", img: "/images/mix_mithai.png", desc: "A curated assortment of our signature classics", cat: "festive" },
  { id: "besan-barfi", name: "Besan Barfi", price: 280, unit: "kg", img: "/images/besan_barfi.png", desc: "Gram flour roasted in desi ghee with cardamom", cat: "festive" },
  { id: "cham-cham", name: "Cham Cham", price: 460, unit: "kg", img: "/images/cham_cham.png", desc: "Coconut-dusted rolls with a khoya heart", cat: "milk" },
  { id: "rasmalai", name: "Rasmalai", price: 50, unit: "piece", img: "/images/rasmalai.png", desc: "Cloud-soft discs in saffron-cardamom milk", cat: "syrup" },
  { id: "gulab-jamun", name: "Gulab Jamun", price: 360, unit: "kg", img: "/images/gulab_jamun.png", desc: "Deep-fried khoya pearls in saffron syrup", cat: "syrup", tag: "Bestseller" },
  { id: "rasgulla", name: "Rasgulla", price: 360, unit: "kg", img: "/images/rasgulla.png", desc: "Feather-light sponges in delicate syrup", cat: "syrup" },
  { id: "jalebi", name: "Jalebi", price: 240, unit: "kg", img: "/images/jalebi.png", desc: "Crisp saffron spirals, glazed & served warm", cat: "syrup" },
  { id: "amriti", name: "Amriti", price: 420, unit: "kg", img: "/images/amriti.png", desc: "Syrup-soaked swirls, a rare old-world delicacy", cat: "syrup" },
  { id: "besan-ladoo", name: "Besan Ladoo", price: 280, unit: "kg", img: "/images/besan_ladoo.png", desc: "Gram flour, almonds & desi ghee, hand-rolled", cat: "festive" },
  { id: "boondi-ladoo", name: "Boondi Ladoo", price: 280, unit: "kg", img: "/images/boondi_ladoo.png", desc: "Golden pearls bound in fragrant syrup", cat: "festive" },
  { id: "gujiya", name: "Gujiya", price: 440, unit: "kg", img: "/images/gujiya.png", desc: "Crisp crescents with coconut-khoya filling", cat: "festive" },
  { id: "patisha", name: "Patisha", price: 300, unit: "kg", img: "/images/patisha.png", desc: "Flaky, melt-in-mouth layers made with desi ghee", cat: "festive" },
  { id: "shakarpare", name: "Shakarpare", price: 280, unit: "kg", img: "/images/shakarpare.png", desc: "Crispy, golden & mildly sweet tea-time bites", cat: "festive" },
  { id: "gudpare", name: "Gudpare", price: 280, unit: "kg", img: "/images/gudpare.png", desc: "Traditional jaggery-glazed crunchy bites", cat: "festive" },
  { id: "mithi-boondi", name: "Mithi Boondi", price: 300, unit: "kg", img: "/images/boondi.png", desc: "Tiny syrup-kissed pearls with almond slivers", cat: "syrup" },
  { id: "feeka-badana", name: "Feeka Badana", price: 350, unit: "kg", img: "/images/boondi.png", desc: "Classic unsweetened boondi, light & versatile", cat: "festive" },
];

export const SAVORY = [
  { id: "paneer-pakoda", name: "Paneer Pakoda", price: 440, unit: "kg", img: "/images/paneer_pakoda.png", desc: "Crisp golden fritters with a soft paneer heart" },
  { id: "mix-pakora", name: "Mix Pakora", price: 300, unit: "kg", img: "/images/mix_pakora.png", desc: "Garden vegetables in spiced gram-flour crust" },
  { id: "namkeen", name: "All Namkeen Items", price: 280, unit: "kg", img: "/images/namkeen.png", desc: "Sev, bhujia, mathri & spiced peanuts" },
  { id: "chana-samosa", name: "Chana Samosa", price: 40, unit: "plate", img: "/images/chana_samosa.png", desc: "Crisp samosas crowned with spiced chana" },
  { id: "chana-bhatura", name: "Chana Bhatura", price: 70, unit: "plate", img: "/images/chana_bhatura.png", desc: "Fluffy bhature with rich, slow-cooked chana" },
  { id: "hot-gulab-jamun", name: "Hot Gulab Jamun", price: 40, unit: "plate", img: "/images/gulab_jamun.png", desc: "Served warm from the kadhai, drenched in syrup" },
];

export const priceLabel = (p) =>
  p.unit === "kg" ? `₹${p.price} / KG` : p.unit === "piece" ? `₹${p.price} / PIECE` : `₹${p.price} / PLATE`;
