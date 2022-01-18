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

var ttable = (function(){
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
    var ttable_data = {

        df1:   [ 1.000, 1.376, 1.963, 3.078, 6.314, 12.706, 31.821, 63.657],
        df2:   [ 0.816, 1.061, 1.386, 1.886, 2.920, 4.303, 6.965, 9.925],
        df3:   [ 0.765, 0.978, 1.250, 1.638, 2.353, 3.182, 4.541, 5.841],
        df4:   [ 0.741, 0.941, 1.190, 1.533, 2.132, 2.776, 3.747, 4.604],
        df5:   [ 0.727, 0.920, 1.156, 1.476, 2.015, 2.571, 3.365, 4.032],
        df6:   [ 0.718, 0.906, 1.134, 1.440, 1.943, 2.447, 3.143, 3.707],
        df7:   [ 0.711, 0.896, 1.119, 1.415, 1.895, 2.365, 2.998, 3.499],
        df8:   [ 0.706, 0.889, 1.108, 1.397, 1.860, 2.306, 2.896, 3.355],
        df9:   [ 0.703, 0.883, 1.100, 1.383, 1.833, 2.262, 2.821, 3.250],
        df10:  [ 0.700, 0.879, 1.093, 1.372, 1.812, 2.228, 2.764, 3.169],
        df11:  [ 0.697, 0.876, 1.088, 1.363, 1.796, 2.201, 2.718, 3.106],
        df12:  [ 0.695, 0.873, 1.083, 1.356, 1.782, 2.179, 2.681, 3.055],
        df13:  [ 0.694, 0.870, 1.079, 1.350, 1.771, 2.160, 2.650, 3.012],
        df14:  [ 0.692, 0.868, 1.076, 1.345, 1.761, 2.145, 2.624, 2.977],
        df15:  [ 0.691, 0.866, 1.074, 1.341, 1.753, 2.131, 2.602, 2.947],
        df16:  [ 0.690, 0.865, 1.071, 1.337, 1.746, 2.120, 2.583, 2.921],
        df17:  [ 0.689, 0.863, 1.069, 1.333, 1.740, 2.110, 2.567, 2.898],
        df18:  [ 0.688, 0.862, 1.067, 1.330, 1.734, 2.101, 2.552, 2.878],
        df19:  [ 0.688, 0.861, 1.066, 1.328, 1.729, 2.093, 2.539, 2.861],
        df20:  [ 0.687, 0.860, 1.064, 1.325, 1.725, 2.086, 2.528, 2.845],
        df21:  [ 0.686, 0.859, 1.063, 1.323, 1.721, 2.080, 2.518, 2.831],
        df22:  [ 0.686, 0.858, 1.061, 1.321, 1.717, 2.074, 2.508, 2.819],
        df23:  [ 0.685, 0.858, 1.060, 1.319, 1.714, 2.069, 2.500, 2.807],
        df24:  [ 0.685, 0.857, 1.059, 1.318, 1.711, 2.064, 2.492, 2.797],
        df25:  [ 0.684, 0.856, 1.058, 1.316, 1.708, 2.060, 2.485, 2.787],
        df26:  [ 0.684, 0.856, 1.058, 1.315, 1.706, 2.056, 2.479, 2.779],
        df27:  [ 0.684, 0.855, 1.057, 1.314, 1.703, 2.052, 2.473, 2.771],
        df28:  [ 0.683, 0.855, 1.056, 1.313, 1.701, 2.048, 2.467, 2.763],
        df29:  [ 0.683, 0.854, 1.055, 1.311, 1.699, 2.045, 2.462, 2.756],
        df30:  [ 0.683, 0.854, 1.055, 1.310, 1.697, 2.042, 2.457, 2.750],
        df40:  [ 0.681, 0.851, 1.050, 1.303, 1.684, 2.021, 2.423, 2.704],
        df60:  [ 0.679, 0.848, 1.045, 1.296, 1.671, 2.000, 2.390, 2.660],
        df80:  [ 0.678, 0.846, 1.043, 1.292, 1.664, 1.990, 2.374, 2.639],
        df100:  [ 0.677, 0.845, 1.042, 1.290, 1.660, 1.984, 2.364, 2.626],
        df1000:  [ 0.675, 0.842, 1.037, 1.282, 1.646, 1.962, 2.330, 2.581],
        dfInf:  [ 0.674, 0.842, 1.036, 1.282, 1.645, 1.962, 2.330, 2.581],

    }

    var ttablevaluecalculate = function({}){

        var $a = arguments;

        var df = $a[0].df,
            alpha = $a[0].alpha;
        
        var _df = "df" + df;
        
        if(df > 1000 || ttable_data[_df.toString()] == undefined){ _df = "dfInf"};

        var _alpha = (alpha == 0.25) ? 0 : 
                    (alpha == 0.20) ? 1 :
                    (alpha == 0.15) ? 2 :  
                    (alpha == 0.10) ? 3 : 
                    (alpha == 0.05) ? 4 : 
                    (alpha == 0.025) ? 5 : 
                    (alpha == 0.01) ? 6 :
                    (alpha == 0.005) ? 7 : -1;
        
        if(alpha == 0.50){return 0.000;}

        var t = ttable_data[_df.toString()][_alpha];

        return t;
    }

    return {

        ttable_data: ttable_data,
        ttablevaluecalculate: ttablevaluecalculate

    };

})();

var module = (module == undefined) ? {}: module;
if(module.exports !== undefined && module !== undefined){
    module.exports = ttable;
}
