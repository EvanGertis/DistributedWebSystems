<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" doctype-system="about:legaxy-compat"/>
    <xsl:template match="/">
        <html>
            <xsl:apply-templates>
            </xsl:apply-templates>
        </html>
    </xsl:template>
    <xsl:template match="book">
        <head>
            <meta charset="utf-8"/>
            <title>ISBN<xsl:value-of select="@isbn" /> -
                <xsl:value-of select="title"/></title>
        </head>
        <!-- <body>
            <h1><xsl:value-of select="title"/></h1>
            <h2>by
                <xsl:value-of select="author/lastName"/>
                <xsl:value-of select="author/firstName"/></h2>
            <table>
                <xsl:for-each select="chapters/frontMatter/*">
                    <tr>
                        <td>
                            <xsl:value-of select="name()"/>
                        </td>
                        <td>
                            (<xsl:value-of select="@pages"/> pages)
                        </td>
                    </tr>
                </xsl:for-each>

                <xsl:for-each select="chapter">
                    <xsl:sort select="@number" data-type="number" order="ascending"/>
                    <tr>
                        <td>
                            Chapter <xsl:value-of select="@number"/>
                        </td>
                        <td>
                            <xsl:value-of select="text()"/>
                            (<xsl:value-of select="@pages"/> pages)
                        </td>
                    </tr>
                </xsl:for-each>
                <xsl:for-each select="chapters/appendix">
                    <xsl:sort select="@number" data-type="text" order="ascending"/>
                    <tr>
                        <td>
                            Appendix <xsl:value-of select="@number"/>
                        </td>
                        <td>
                            <xsl:value-of select="text()"/>
                            (<xsl:value-of select="@pages"/> pages)
                        </td>
                    </tr>
                </xsl:for-each>
            </table>
            <p>Pages:
                <xsl:variable name="pagecount" select="sum(chapters//*/@pages)"/>
                <xsl:value-of select="$pagecount"/>
            </p>
            <p>Media Type:<xsl:value-of select="media/@type"/></p>
        </body> -->
    </xsl:template>
</xsl:stylesheet>