<?xml version="1.0" encoding="UTF-8"?>
<html xsl:version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <body style="font-family:Arial;font-size:12pt;background-color:#EEEEEE">
        <table>
            <caption>Grandma White's Cookies</caption>
            <thead>
                <tr>
                    <th>servingsize</th>
                    <th>calories</th>
                    <th>caloriesfromfat</th>
                    <th>gfat</th>
                    <th>gsaturatedfat</th>
                    <th>mgcholesterol</th>
                    <th>mgsodium</th>
                </tr>
            </thead>
            <xsl:for-each select="cookies">
                <tr>
                    <td>
                        <xsl:value-of select="servingsize" />
                    </td>
                    <td>
                        <xsl:value-of select="calories" />
                    </td>
                    <td>
                        <xsl:value-of select="caloriesfromfat" />
                    </td>
                    <td>
                        <xsl:value-of select="gfat" />
                    </td>
                    <td>
                        <xsl:value-of select="gsaturatedfat" />
                    </td>
                    <td>
                        <xsl:value-of select="mgcholesterol" />
                    </td>
                    <td>
                        <xsl:value-of select="mgsodium" />
                    </td>
                </tr>
            </xsl:for-each>
        </table>
    </body>
</html>
