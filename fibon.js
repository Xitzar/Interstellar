

var fibon = {

    tests : [],

    test : function(actual, expected) {

        var css = "color:Green";
        var result = actual == expected;
        var line = "Is this a success ? " + (result ? 'Yes' : 'No');
        line += " (Expected: " + expected;
        if( !result ) {
            line += "   --> Actual: " + actual; 
            css = "color:Red;"              
        }
        line += ")";

        console.log("%c%s", css, line);
    },
    run_tests : function() {
        
        var result = fibon.test( fibonacci.display(11, ", "), "1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89");
        var result = fibon.test( fibonacci.get(0), "1");
        var result = fibon.test( fibonacci.get(1), "1");     
        var result = fibon.test( fibonacci.get(2), "2");     
        var result = fibon.test( fibonacci.get(4), "5");    
        var result = fibon.test( fibonacci.get(6), "13");  
        var result = fibon.test( fibonacci.get(6), "130 haha");   
        var result = fibon.test( fibonacci.get(8), "34");        
        var result = fibon.test( fibonacci.get(25), "121393");
    } 
}