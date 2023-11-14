var xmlDoc = ""; //Global variable to store the XML text
var infoProduct = document.getElementById("infoProduct");  
document.addEventListener('DOMContentLoaded', function(){
    infoProduct.style.visibility = "hidden"; //Hide the info of the product on load

    //Load XML from Ajax request
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '../xml/products.xml');
    xhr.timeout = 2000; // time in milliseconds
    xhr.onload = function () {
        // Request completed, it stores now the XML in the variable
        xmlDoc = this.responseXML;
    };
    xhr.ontimeout = function (e) {
        //The request exceeded the time limit so it is considered failed. Set error message
        let message = "The request to xml has failed!";
        document.getElementById("message").innerHTML = message;
    };
    xhr.send(null);
});

function getProductFromXML(productCode){
    var evaluation = xmlDoc.evaluate( //XPath evaluation
        "/products/product[@code='" + productCode + "']", 
        xmlDoc,
        null,
        XPathResult.ANY_TYPE,
        null,
    );
    return evaluation;
}

/* Previous method to get xml from plain string

function getProductFromXML(productCode){
    //XML file
    xmlText = `<?xml version="1.0" encoding="UTF-8"?>
    <products xmlns:xs="http://www.w3.org/2001/XMLSchema-instance"
     xs:noNamespaceSchemaLocation="productsSchema.xsd">
        <product code="000-01">
            <category>Motorcycles</category>
            <name>1969 Harley Davidson Ultimate Chopper</name>
            <description>This replica features working kicakstand, front suspension, gear-shift lever, footbrake lever, drive chain, wheels and steering. All parts are particularly delicate due to their precise scale and require special care and attention.</description>
            <quantity>7900</quantity>
            <unitPrice>48.81</unitPrice>
        </product>
        <product code="000-02">
            <category>Classic Cars</category>
            <name>1952 Alpine Renault 1300</name>
            <description>Turnable front wheels; steering function; detailed interior; detailed engine; opening hood; opening trunk; opening doors; and detailed chassis.</description>
            <quantity>7305</quantity>
            <unitPrice>98.58</unitPrice>
        </product>
        <product code="000-03">
            <category>Motorcycles</category>
            <name>1996 Moto Guzzi 1100i</name>
            <description>Official Moto Guzzi logos and insignias, saddle bags located on side of motorcycle, detailed engine, working steering, working suspension, two leather seats, luggage rack, dual exhaust pipes, small saddle bag located on handle bars.</description>
            <quantity>6625</quantity>
            <unitPrice>68.99</unitPrice>
        </product>
        <product code="000-04">
            <category>Motorcycles</category>
            <name>2003 Harley-Davidson Eagle Drag Bike</name>
            <description>Model features, official Harley Davidson logos and insignias, detachable rear wheelie bar, heavy diecast metal with resin parts, authentic multi-color tampo-printed graphics, separate engine drive belts, free-turning front fork and rotating tires.</description>
            <quantity>5582</quantity>
            <unitPrice>91.02</unitPrice>
        </product>
        <product code="000-05">
            <category>Classic Cars</category>
            <name>1972 Alfa Romeo GTA</name>
            <description>Features include: Turnable front wheels; steering function; detailed interior; detailed engine; opening hood; opening trunk; opening doors; and detailed chassis.</description>
            <quantity>3252</quantity>
            <unitPrice>85.68</unitPrice>
        </product>
        <product code="000-06">
            <category>Classic Cars</category>
            <name>1962 LanciaA Delta 16V</name>
            <description>Features include: Turnable front wheels; steering function; detailed interior; detailed engine; opening hood; opening trunk; opening doors; and detailed chassis.</description>
            <quantity>6791</quantity>
            <unitPrice>103.42</unitPrice>
        </product>
        <product code="000-07">
            <category>Classic Cars</category>
            <name>1968 Ford Mustang</name>
            <description>Hood, doors and trunk all open to reveal highly detailed interior features. Steering wheel actually turns the front wheels. Color dark green.</description>
            <quantity>68</quantity>
            <unitPrice>95.34</unitPrice>
        </product>
        <product code="000-08">
            <category>Classic Cars</category>
            <name>2001 Ferrari Enzo</name>
            <description>Turnable front wheels; steering function; detailed interior; detailed engine; opening hood; opening trunk; opening doors; and detailed chassis.</description>
            <quantity>3619</quantity>
            <unitPrice>95.59</unitPrice>
        </product>
        <product code="000-09">
            <category>Trucks and Buses</category>
            <name>1958 Setra Bus</name>
            <description>Model features 30 windows, skylights &amp; glare resistant glass, working steering system, original logos</description>
            <quantity>1579</quantity>
            <unitPrice>77.90</unitPrice>
        </product>
        <product code="000-10">
            <category>Motorcycles</category>
            <name>2002 Suzuki XREO</name>
            <description>Official logos and insignias, saddle bags located on side of motorcycle, detailed engine, working steering, working suspension, two leather seats, luggage rack, dual exhaust pipes, small saddle bag located on handle bars.</description>
            <quantity>9997</quantity>
            <unitPrice>66.27</unitPrice>
        </product>
        <product code="100-01">
            <category>Classic Cars</category>
            <name>1995 Honda Civic</name>
            <description> This model features, opening hood, opening doors, detailed engine, rear spoiler, opening trunk, working steering, tinted windows, baked enamel finish. Color yellow.</description>
            <quantity>9772</quantity>
            <unitPrice>93.89</unitPrice>
        </product>
        <product code="100-02">
            <category>Classic Cars</category>
            <name>1998 Chrysler Plymouth Prowler</name>
            <description>Turnable front wheels; steering function; detailed interior; detailed engine; opening hood; opening trunk; opening doors; and detailed chassis.</description>
            <quantity>4724</quantity>
            <unitPrice>101.51</unitPrice>
        </product>
        <product code="100-03">
            <category>Vintage Cars</category>
            <name>1911 Ford Town Car</name>
            <description>Features opening hood, opening doors, opening trunk, wide white wall tires, front door arm rests, working steering system.</description>
            <quantity>540</quantity>
            <unitPrice>33.30</unitPrice>
        </product>
        <product code="100-04">
            <category>Trucks and Buses</category>
            <name>1964 Mercedes Tour Bus</name>
            <description>Exact replica. 100+ parts. working steering system, original logos</description>
            <quantity>8258</quantity>
            <unitPrice>74.86</unitPrice>
        </product>
        <product code="100-05">
            <category>Vintage Cars</category>
            <name>1932 Model A Ford J-Coupe</name>
            <description>This model features grille-mounted chrome horn, lift-up louvered hood, fold-down rumble seat, working steering system, chrome-covered spare, opening doors, detailed and wired engine</description>
            <quantity>9354</quantity>
            <unitPrice>58.48</unitPrice>
        </product>
        <product code="100-06">
            <category>Trucks and Buses</category>
            <name>1926 Ford Fire Engine</name>
            <description>Gleaming red handsome appearance. Everything is here the fire hoses, ladder, axes, bells, lanterns, ready to fight any inferno.</description>
            <quantity>2018</quantity>
            <unitPrice>24.92</unitPrice>
        </product>
        <product code="100-07">
            <category>Planes</category>
            <name>P-51-D Mustang</name>
            <description>Has retractable wheels and comes with a stand</description>
            <quantity>992</quantity>
            <unitPrice>49.00</unitPrice>
        </product>
        <product code="100-08">
            <category>Motorcycles</category>
            <name>1936 Harley Davidson El Knucklehead</name>
            <description>Intricately detailed with chrome accents and trim, official die-struck logos and baked enamel finish.</description>
            <quantity>4357</quantity>
            <unitPrice>24.23</unitPrice>
        </product>
        <product code="100-09">
            <category>Vintage Cars</category>
            <name>1928 Mercedes-Benz SSK</name>
            <description>This 1:18 replica features grille-mounted chrome horn, lift-up louvered hood, fold-down rumble seat, working steering system, chrome-covered spare, opening doors, detailed and wired engine. Color black.</description>
            <quantity>548</quantity>
            <unitPrice>72.56</unitPrice>
        </product>
        <product code="100-10">
            <category>Classic Cars</category>
            <name>1999 Indy 500 Monte Carlo SS</name>
            <description>Features include opening and closing doors. Color: Red</description>
            <quantity>8164</quantity>
            <unitPrice>56.76</unitPrice>
        </product>
    </products>`;
    parser = new DOMParser();
    xmlDoc = parser.parseFromString(xmlText,"text/xml"); //Parse XML file

    console.log(xmlDoc);
    var evaluation = xmlDoc.evaluate( //XPath evaluation
        "/products/product[@code='" + productCode + "']", 
        xmlDoc,
        null,
        XPathResult.ANY_TYPE,
        null,
    );
    return evaluation;
}
*/

var button = document.getElementById("btnCode"); 
button.addEventListener("click", function(){ //Add click event for button
    var productCode = document.getElementById("queryInput").value; //Get value of the input (Code)
    var product = getProductFromXML(productCode); //Use the method to retrieve a product
    console.log(product);
    try {
        let iterate = product.iterateNext(); 
        if(iterate != null)
        {
            infoProduct.style.visibility = "visible";
            document.getElementById("message").innerHTML = ""; //Clear error message
            while (iterate) { //while there is any element next
                var productNode = iterate; //every iterate is a product Node
                //Set text for element in DOM
                document.getElementById("category").innerHTML = productNode.getElementsByTagName("category")[0].innerHTML; 
                //Set source of category image
                switch(productNode.getElementsByTagName("category")[0].innerHTML){
                    case "Motorcycles":
                        document.getElementById("imgCategory").src = "../img/Categories/motorcycle.png";
                        break;
                    case "Classic Cars":
                        document.getElementById("imgCategory").src = "../img/Categories/car_clasic.png";
                        break;
                    case "Trucks and Buses":
                        document.getElementById("imgCategory").src = "../img/Categories/bus_truck.png";
                        break;
                    case "Vintage Cars":
                        document.getElementById("imgCategory").src = "../img/Categories/car_vintage.png";
                        break;
                    case "Planes":
                        document.getElementById("imgCategory").src = "../img/Categories/plane.png";
                        break;
                }
                //Set the values on each html element
                document.getElementById("name").innerHTML = productNode.getElementsByTagName("name")[0].innerHTML;
                document.getElementById("description").innerHTML = productNode.getElementsByTagName("description")[0].innerHTML;
                document.getElementById("quantity").innerHTML = productNode.getElementsByTagName("quantity")[0].innerHTML;
                document.getElementById("unitPrice").innerHTML = productNode.getElementsByTagName("unitPrice")[0].innerHTML + "€";
                iterate = product.iterateNext(); //go to next element
            }
        }else{
            //Send error message to the html
            let message = "The code introduced is not in the database!";
            document.getElementById("message").innerHTML = message;
        }
        
      } catch (e) {
        console.error(`Error: ` + e);
      }
});