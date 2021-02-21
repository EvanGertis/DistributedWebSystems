<?xml version="1.0" ?>
<xsl-sylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" doctype-system="about:legacy-compat"/>
    <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
        <head>
            <meta charset="utf-8"/>
            <link rel="stylesheet" type="text/css" href="style.css"/>
        </head>
        <body>
            <table>
                <caption>Information about various sports</caption>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Sport</th>
                        <th>Information</th>
                    </tr>
                </thead>

                <xsl:for-each select="/sports/game">
                    <tr>
                        <td><xsl:value-of select="@id"/></td>
                        <td><xsl:value-of select="name"/></td>
                        <td><xsl:value-of select="paragraph"/></td>
                    </tr>
                </xsl:for-each>
            </table>
        </body>
    </html>
    </xsl:template>
</xsl-sylesheet>