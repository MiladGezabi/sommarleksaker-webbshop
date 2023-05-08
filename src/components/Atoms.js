import { atom } from "recoil";


export const loginState = atom({
  key: "login",
  default: false
})

export const NameState = atom({
  key: "username",
  default: ""
})

export const PasswordState = atom({
  key: "password",
  default: ""
})

export const UsersList = atom({
  key: "userlist",
  default: [{
    name: "admin",
    password: "password"
  }]
})

export const CurrentAdmin = atom({
  key: "currentadmin",
  default:""
})

export const Products = atom({
  key: "addproducts",
  default: [
    {
      name: "Super Soaker",
      price: 96,
      discription: "Gör någon genomblöt med Super Soaker Piranha-vattenblastern. Fyll tanken och tryck på avfyraren för att göra motståndarna genomblöta. Tanken kan fyllas med upp till 177 milliliter. Från 6 år",
      picture: "https://m.media-amazon.com/images/I/51IE9eqWPGL._AC_SX522_.jpg"
    },
    {
      name: "Super Soaker Splash",
      price: 131,
      discription: "2 lägen Växla mellan att skjuta vattenstrålar eller tömma hela tanken. Vattenstrålar eller tanktömning Skjut iväg vattenstrålar eller töm hela tanken. En rejäl tank Tanken rymmer upp till 591 milliliter. Doppa för att fylla på Sänk ned tanken i vatten för att fylla på",
      picture: "https://m.media-amazon.com/images/I/81Rr-jrid8L._AC_SX522_.jpg"
    },
    {
      name: "Elektronisk Vattenpistol",
      price: 240,
      discription: "Denna elektriska vattenpistol skjuter vattnet genom att helt enkelt dra i avtryckaren och kan skjuta 4 gånger per sekund och säga adjö till den traditionella utdragbara vattenpistolen",
      picture: "https://m.media-amazon.com/images/I/71yqBRlVAqL._AC_SX522_.jpg"
    },
    {
      name: "Elektronisk Vattenpistol 2pack",
      price: 358,
      discription: "2-pack vattenpistoler för barn sprutpistoler. Lätt att bära och leka, det coola vattenpistolerna kommer att ge oändligt kul för barn och vuxna. Kan användas i simbassäng, trädgård, strand, poolfest, förälder-barn-interaktion, dagisspel etc. dela sommarens lycka tillsammans!",
      picture: "https://m.media-amazon.com/images/I/71iOea0rclL._AC_SX522_.jpg"
    },
    {
      name: "Automatisk VattenPistol",
      price: 240,
      discription: "Super soaker vattenpistolen har kraftfull kraft och kan spruta upp till 22 fot räckvidd, och något uppåt kommer nospartiet att få ett längre paraboliskt skott.",
      picture: "https://m.media-amazon.com/images/I/71yqBRlVAqL.__AC_SX300_SY300_QL70_ML2_.jpg"
    },
    {
      name: "Super Soaker Nerf",
      price: 266,
      discription: "Nerf Super Soaker Soakzooka Water Gun låter dig starta en vattenkamp när som helst med dina vänner eller familj! Kapacitet Nerf Super Soaker Soakzooka vattenpistol: 1,6 liter. Tryck bara på handtaget upprepade gånger för att blötlägga alla dess mål. Inga batterier behövs",
      picture: "https://m.media-amazon.com/images/I/814nZTJ84KL._AC_SX522_.jpg"
    },
    {
      name: "SuperSoaker Nerf Hydro",
      price: 149,
      discription: "VILDA VATTENLEKAR MED 3-I-1: Nerf Super Soaker Hydro Frenzy-vattenblastern har 2 rör och ett justerbart munstycke så att du kan skjuta vatten på olika sätt, för vilda vattenlekar med 3-i-1",
      picture: "https://m.media-amazon.com/images/I/41KMATeQq+L._AC_SX522_.jpg"
    },
    {
      name: "Mc Fizz",
      price: 95,
      discription: "Sprutfunktion, vattenspruta med cool brandkårdesign. Kan bäras på ryggen som en ryggsäck, axelremmarna är justerbara. Med ca. 2,5 liter vattentank, slang ca. 72 cm lång. Spruträckvidd upp till 7 m. Vattenspruta med cool brandkårsdesign",
      picture: "https://m.media-amazon.com/images/I/51oC5vE0czL._AC_SX679_.jpg"
    },
    {
      name: "Simple Vattenpistol 4pack",
      price: 69,
      discription: "4 st. plastvattenpistoler. Vatten sprutar ut varje mått 8,9 cm och finns i olika färger. Mycket kul för en sommar- eller poolfest. Ge allt som krävs för en kamp i vatten eller pop i födelsedagspåse Meddelande för barn att ta med sig hemma. Kombinera med andra barn födelsedagsfest tillbehör från unik",
      picture: "https://m.media-amazon.com/images/I/61p7Hbe9ylL._AC_SX522_.jpg"
    },
    {
      name: "Spyra Blue",
      price: 3116,
      discription: "Spyra Blast-teknik: Med varje manövrering av avtryckaren avges en kraftfull, individuell vattenkälla med massor av kraft. Icke-stopp åtgärd: För att ladda om, sänk helt enkelt framsidan av SpyraTwo i en vattenkälla med rent vatten, fortsätt efter 10 sekunder! Enastående räckvidd: Håll avtryckaren i 3 sekunder och släpp loss för maximal effekt och räckvidd (15 m). Maximal eldkraft: En helt fylld SpyraTwo skjuter 22 SpyraBlasts innan du behöver en vattenkälla för omladdning. Det integrerade batteriet varar hela dagen (2000 skott)",
      picture: "https://m.media-amazon.com/images/I/61U3ct-xXzL._AC_SX522_.jpg"
    },
    {
      name: "Nerf Eaglepoint",
      price: 306,
      discription: "ANPASSA BLASTERN FÖR ALLA MÖJLIGA UPPDRAG MED KIKARSIKTE OCH PIPA: Nerf Elite 2.0 Eaglepoint RD-8-blastern har ett avtagbart kikarsikte och en avtagbar pipa så att du kan skapa olika blasterstilar beroende på uppdraget. TRUMMA FÖR 8 PILAR, BULTFUNKTION, SKJUTER IVÄG PILAR UPP TILL 27 METER: med den här blastern med bultladdning kan du avfyra 8 pilar i rad upp till 27 meter från den roterande trumman",
      picture: "https://m.media-amazon.com/images/I/51L8CkxSvHL._AC_SX679_.jpg"
    },
    {
      name: "Nerf Shockwave",
      price: 384,
      discription: "Dra primingrutan och tryck på avtryckaren för att lösa upp 1 pil, eller håll avtryckaren nedåt och fortsätt flytta glida för att slå alla 15 pilar. Inkluderar 30 officiella nerf-dartar 15 för trumman och 15 för laddningar. Eldpilar upp till 27 m. Tunnförlängning, lager och glasögon ingår inte",
      picture: "https://m.media-amazon.com/images/I/61vPW766kxL._AC_SX679_.jpg"
    },
    {
      name: "Nerf Commander",
      price: 144,
      discription: "BLASTER SOM ÄR REDO ATT UPPGRADERAS: Anpassa blastern inför varje strid eller uppdrag och dra nytta av de 3 taktiska formplattorna och punkterna för montering av kolv och pipa (kolv och pipa medföljer inte). 12 NERF-PILAR MEDFÖLJER: 12 officiella Nerf-pilar medföljer, så att du kan fylla trumman med 6 pilar och ändå ha 6 pilar nära till hands för att ladda om Avfyra, ladda om och avfyra igen",
      picture: "https://m.media-amazon.com/images/I/51a9rLzat4L._AC_SX679_.jpg"
    },
    {
      name: "Nerf Echo",
      price: 412,
      discription: "Upgrade-Ready Blaster: Customise The Blaster For Every Battle Or Mission By Taking Advantage Of The Removable Stock, Removable Barrel Extension And The Four Tactical Rails. Includes 20 Nerf Darts: Comes With 24 Official Nerf Darts To Fully Load The 10-Dart Clip And 14 More Darts For Reloads",
      picture: "https://m.media-amazon.com/images/I/51Yg1Cr47gL._AC_SX679_.jpg"
    },
    {
      name: "Nerf Turbine",
      price: 570,
      discription: "BLASTER SOM KAN UPPGRADERAS: Anpassa blastern inför varje strid eller uppdrag genom att använda de 4 taktiska skenorna och monteringspunkten för pipa (pipförlängning medföljer inte). 36 NERF-PILAR MEDFÖLJER: Levereras med 36 officiella Nerf-pilar så att du kan ladda magasinet för 18 pilar fullt och ändå ha 18 pilar att ladda om med. Skjut, ladda om och skjut igen!",
      picture: "https://m.media-amazon.com/images/I/81gmtQlxEOL._AC_SX679_.jpg"
    },
    {
      name: "Nerf Phoenix",
      price: 247,
      discription: "BLASTER SOM KAN UPPGRADERAS: Anpassa blastern inför varje strid eller uppdrag genom att använda de 5 taktiska skenorna och monteringspunkterna för pipa och kolv (kolv- och pipförlängning medföljer inte). 12 NERF-PILAR MEDFÖLJER: Levereras med 12 officiella Nerf-pilar och ett magasin för 6 pilar, så att du kan ha 6 pilar i magasinet och 6 till att snabbt ladda om med. Skjut, ladda om och skjut igen!",
      picture: "https://m.media-amazon.com/images/I/61j2xTZq2+L._AC_SX522_.jpg"
    },
    {
      name: "Nerf Prospect",
      price: 198,
      discription: "AVFYRA 4 PILAR: Nerf Elite 2.0 Prospect QS-4-blastern har 4 pipor så att du kan avfyra 4 pilar i rad i dina Nerf-strider. INKLUDERAR 8 NERF-PILAR: Med 8 officiella Nerf Elite-skumpilar kan du ladda blastern och sedan snabbt ladda om med 4 extra pilar",
      picture: "https://m.media-amazon.com/images/I/61XvqPRerAL._AC_SX522_.jpg"
    },
    {
      name: "Nerf Pilblaster",
      price: 299,
      discription: "FORTNITE-BLASTER MED PILAR: Nerf Fortnite 6-SH-blastern har inspirerats av utrustningen i Fortnite och levereras med ett Camo Pulse-omslag från det populära spelet. HANLADDNING: Med hanladdning dra ner hanen för att ladda blastern och tryck på avtryckaren för att skjuta iväg en pil",
      picture: "https://m.media-amazon.com/images/I/412TQMuJAdL._AC_SX679_.jpg"
    },
    {
      name: "Nerf BASR L Bolt",
      price: 411,
      discription: "FORTNITE-BLASTER MED PILAR: Nerf Fortnite BASR-L-blastern är inspirerad av den blaster som används i Fortnite, med samma utseende som i det populära tv-spelet. MAGASINMATADE PILAR: För in magasinet i blastern, för slutstycket bakåt och framåt och tryck sedan på avtryckaren för att skjuta iväg 1 pil",
      picture: "https://m.media-amazon.com/images/I/51oWjGpQ9jL._AC_SX679_.jpg"
    },
    {
      name: "Nerf SR Blaster",
      price: 149,
      discription: "FORTNITE-BLASTER MED PILAR: Nerf Fortnite SR-blastern har samma utseende och färger som blastern i det populära tv-spelet Fortnite. HAMMARMEKANISM MED 4 PILAR: Denna Nerf Fortnite-blaster har hammarmekanism. Ladda den med 4 pilar, dra tillbaka hammaren för att göra den skjutklar och tryck sedan in avtryckaren för att skjuta iväg 1 pil",
      picture: "https://m.media-amazon.com/images/I/71XqV96XVWL._AC_SX679_.jpg"
    }
  ]
})