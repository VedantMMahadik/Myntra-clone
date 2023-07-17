import MEN from "./data/MEN.js";
import WOMEN from "./data/WOMEN.js";
import Kids from "./data/Kids.js";
import HomeLiving from "./data/HomeLiving.js";
import Beauty from "./data/Beauty.js";

/*function reuble for modals data*****/
function renderSubMenu(id, data) {
    let temp = document.getElementById(id)
    function TempFunc() {
        return data.map(el => {
            let list = "";
            list = el.data.map(element => `<p>${element}</p>`).join(" ")
            return `
        <div class="column">
            <h6>${el.heading}</h6>
            ${list}
        </div>
       `
        }).join("")
    }
    temp.innerHTML = TempFunc()
}


/****Men*/
renderSubMenu("men", MEN)
/*Women*/
renderSubMenu("women", WOMEN)
// kids
renderSubMenu("kids", Kids)
// HomeLiving
renderSubMenu("homeliving", HomeLiving)
// Beauty
renderSubMenu("beauty", Beauty)


/**********product section***************/
import ProductData from "./myntra/data.js"


const category = [...new Set(ProductData.map(el => el.category))]
console.log(category)

const name = [...new Set(ProductData.map(el => el.name))]
console.log(name)
 

let filterData = []

document.addEventListener("click", (e) => {


    const bluetoothEl = document.getElementById("bluetooth").checked
    const ChainsEl = document.getElementById("chains").checked
    const KurtasEl = document.getElementById("kurtas").checked
    const AccessoriesEl = document.getElementById("accessories").checked
    const sareesEl = document.getElementById("sarees").checked
    const watchEl = document.getElementById("watch").checked
    const mentshirtEl = document.getElementById("mentshirt").checked
    const menshirtEl = document.getElementById("menshirt").checked
    const shoesEl = document.getElementById("shoes").checked
    const wwatchEl = document.getElementById("wwatch").checked
    const wkurtaEl = document.getElementById("wkurta").checked
    const jwelleryEl = document.getElementById("jwellery").checked
    const dressesEl = document.getElementById("dresses").checked
    const wtshirtEl = document.getElementById("wtshirt").checked

// for brands
    const RoadsterEl = document.getElementById("roadster").checked 
    const AnoukEl = document.getElementById("anouk").checked
    const PhilipsEl = document.getElementById("philips").checked 
    const boAtEl = document.getElementById("boat").checked 
    const HAMMER = document.getElementById("hammer").checked
    const miviEl = document.getElementById("mivi").checked
    const PUMAMotorsportEl = document.getElementById("puma").checked
    const PortronicsEl = document.getElementById("portonics").checked 
    const CellecorEl = document.getElementById("cellecor").checked
    const HIGHLANDEREl = document.getElementById("highlander").checked
    const MEENAZEl = document.getElementById("meenaz").checked
    const NOISEEl = document.getElementById("noise").checked




    console.log(bluetoothEl)
    filterData = ProductData.filter(el => (
        bluetoothEl && el.category == "bluetooth Headset" ||
        ChainsEl && el.category == "Men Chains" ||
        KurtasEl && el.category == "Kurtas" ||
        AccessoriesEl && el.category == "Mobile Accessories" ||
        sareesEl && el.category == "sarees" ||
        watchEl && el.category == "watch" ||
        mentshirtEl && el.category == "mentshirt" ||
        menshirtEl && el.category == "menshirt" ||
       shoesEl && el.category == "shoes" ||
       wwatchEl && el.category == "wwatch" ||
       wkurtaEl && el.category == "wkurta" ||
       jwelleryEl && el.category == "jwellery"|| 
       dressesEl && el.category == "dresses" ||
       wtshirtEl&& el.category == "wtshirt" ||

// filter for brands
       RoadsterEl && el.name == "Roadster" ||
        AnoukEl && el.name == "Anouk" || 
        PhilipsEl&& el.name == "Philips" ||
        boAtEl&& el.name == "boAt" ||
        HAMMER&& el.name == "HAMMER" ||
        miviEl&& el.name == "mivi" ||
        PUMAMotorsportEl&& el.name == "PUMA Motorsport" ||
        PortronicsEl&& el.name == "Portronics"|| 
        CellecorEl&& el.name == "Cellecor" ||
        HIGHLANDEREl&& el.name == "HIGHLANDER" ||
        MEENAZEl&& el.name == "MEENAZ" ||
        NOISEEl&& el.name == "NOISE" 
         
    ))

    renderProductData()

})

// function for render product

function renderProductData(){
    let filterDataHTML = "";

    if(filterData[0]){
        filterData.forEach(el => {
            filterDataHTML += `
            <div class="productCard" onclick="ClickProduct(${el.id})">
                <div class="product_image">
                    <img src="${el.img}"/>
                </div>
                <h5 class="product_name">${el.name}</h5>
                <p>${el.desc}</p>
                <p class="product_price">
                    <span>Rs.</span>
                    <span>${el.price}</span>
                    <s style="color:#FFD39F">${el.oprice}</s>
                    <span>${el.rating}</span>
                </p>
                
             </div>
            `
        })
    }
    else{
        ProductData.forEach(el => {
            filterDataHTML += `
            <div class="productCard" onclick="ClickProduct(${el.id})">
                <div class="product_image">
                    <img src="${el.img}"/>
                </div>
                <h5 class="product_name">${el.name}</h5>
                <p>${el.desc}</p>
                <p class="product_price">
                    <span>Rs.</span>
                    <span>${el.price}</span>
                    <s style="color:#FFD39F">${el.oprice}</s>
                    <span>${el.rating}</span>
                </p>
                
             </div>
            `
        }) 
    }
    
    document.getElementById("product_category_displayId").innerHTML = filterDataHTML
} 
renderProductData()








