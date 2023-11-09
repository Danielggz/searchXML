<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
    <html>
        <head><link rel="stylesheet" type="text/css" href="../css/styles.css"/></head>
        <body>
            <div id="navBar">
                <ul id="navBar">
                    <!-- Use of absolute paths assumes that localhost is going to be used -->
                    <li><a href="http://localhost/Assignment1/html/displayInfo.html">Home</a></li>
                    <li><a href="http://localhost/Assignment1/xml/products.xml">XML</a></li>
                </ul>
            </div>
            <xsl:for-each select="products/product">
                <!-- Loop each product  -->
                <div id="infoProductXML">
                    <div id="product">
                        <div>
                            <span class="title">Category</span>
                            <span id="category"><xsl:value-of select="category"/></span>
                        </div>
                        <div>
                            <span class="title">Name</span>
                            <span id="name"><xsl:value-of select="name"/></span>
                        </div>
                        <div>
                            <span class="title">Description</span>
                            <span id="description"><xsl:value-of select="description"/></span>
                        </div>
                        <div>
                            <span class="title">Quantity</span>
                            <span id="quantity"><xsl:value-of select="quantity"/></span>
                        </div>
                        <div>
                            <span class="title">Price per unit</span>
                            <span id="unitPrice"><xsl:value-of select="unitPrice"/></span>
                        </div>
                    </div>
                </div>
            </xsl:for-each>
        </body>
    </html>
    </xsl:template>
</xsl:stylesheet>