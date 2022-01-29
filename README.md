# ttable.js
T distribution table calculations / T dağılımı tablosu hesaplamaları

## English: ttable.js

  ```javascript
  /**
     * 
     * -> ttable_data["df{X}"][0] -> alpha 0,25    X = 1...30 40 60 80 100 1000 Inf  **for X = 1 --result -> 1.000
     * -> ttable_data["df{X}"][1] -> alpha 0,20    X = 1...30 40 60 80 100 1000 Inf  **for X = 1 --result -> 1.376
     * -> ttable_data["df{X}"][1] -> alpha 0,15    X = 1...30 40 60 80 100 1000 Inf  **for X = 1 --result -> 1.963
     * -> ttable_data["df{X}"][1] -> alpha 0,10    X = 1...30 40 60 80 100 1000 Inf  **for X = 1 --result -> 3.078
     * -> ttable_data["df{X}"][2] -> alpha 0,05    X = 1...30 40 60 80 100 1000 Inf  **for X = 1 --result -> 6.314
     * -> ttable_data["df{X}"][3] -> alpha 0,025   X = 1...30 40 60 80 100 1000 Inf  **for X = 1 --result -> 12.706
     * -> ttable_data["df{X}"][4] -> alpha 0,01    X = 1...30 40 60 80 100 1000 Inf  **for X = 1 --result -> 31.821
     * -> ttable_data["df{X}"][5] -> alpha 0,005   X = 1...30 40 60 80 100 1000 Inf  **for X = 1 --result -> 63.657
     * 
     * ONE-TALL
     * 
     */ 
     
     // -----------------------------------------------------------------------------------------------

   /**
     * 
     * @author: Kazım Anıl AYDIN @kazimanilaydin
     * 
     * Usage: 
     * 
     * on Node.js 
     *      
     *      var ttable = require("ttable.js");    // <- edit: ttable.js path
     *      var tvalue = ttable.ttablevaluecalculate({df: 1, alpha: 0.05});     // df = 1
     *      console.log(tvalue);    // -> 6.314
     * 
     * on salt Js < Html >
     *
     *      <script type="text/javascript" src="ttable.js"></script>   // <- edit: ttable.js path
     *      
     *      <script type="text/javascript">
     *          var tvalue = ttable.ttablevaluecalculate({df: 1, alpha: 0.05});
     *          console.log(tvalue);    // -> 6.314
     *      </script>
     * 
     */
     
  ```

## Türkçe: ttablosu.js

  ```javascript
  /**
     * 
     * -> tablo["df{X}"][0] -> alfa 0,25    X = 1...30 40 60 80 100 1000 Inf  **for X = 1 --sonuc -> 1.000
     * -> tablo["df{X}"][1] -> alfa 0,20    X = 1...30 40 60 80 100 1000 Inf  **for X = 1 --sonuc -> 1.376
     * -> tablo["df{X}"][1] -> alfa 0,15    X = 1...30 40 60 80 100 1000 Inf  **for X = 1 --sonuc -> 1.963
     * -> tablo["df{X}"][1] -> alfa 0,10    X = 1...30 40 60 80 100 1000 Inf  **for X = 1 --sonuc -> 3.078
     * -> tablo["df{X}"][2] -> alfa 0,05    X = 1...30 40 60 80 100 1000 Inf  **for X = 1 --sonuc -> 6.314
     * -> tablo["df{X}"][3] -> alfa 0,025   X = 1...30 40 60 80 100 1000 Inf  **for X = 1 --sonuc -> 12.706
     * -> tablo["df{X}"][4] -> alfa 0,01    X = 1...30 40 60 80 100 1000 Inf  **for X = 1 --sonuc -> 31.821
     * -> tablo["df{X}"][5] -> alfa 0,005   X = 1...30 40 60 80 100 1000 Inf  **for X = 1 --sonuc -> 63.657
     * 
     * ONE-TALL
     * 
     */ 
     
     // -----------------------------------------------------------------------------------------------
     
   /**
     * 
     * @author: Kazım Anıl AYDIN @kazimanilaydin
     * 
     * Kullanımı: 
     * 
     * Node.js icin 
     *      
     *      var ttablosu = require("ttablosu.js");    // <- duzenle: ttablosu.js dosyasinin yolu
     *      var tdegeri = ttablosu.tablodegerihesapla({df: 1, alfa: 0.05});     // df = 1
     *      console.log(tdegeri);    // -> 6.314
     * 
     * Js < Html > icin
     *
     *      <script type="text/javascript" src="ttablosu.js"></script>   // <- duzenle: ttablosu.js dosyasinin yolu
     *      
     *      <script type="text/javascript">
     *          var tdegeri = ttablosu.tablodegerihesapla({df: 1, alfa: 0.05});
     *          console.log(tdegeri);    // -> 6.314
     *      </script>
     * 
     */
  ```
