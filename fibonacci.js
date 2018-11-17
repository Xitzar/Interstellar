
// ** Model needs its own file
// @todo: maybe 

// fibonacci.display(8, ", ");
var nb = 0;
var fibonacci = {
    get_all : function(combien) {
        var output = [];
        for(var i=0; i<combien;i++) {
            output.push( this.suite(i) );
        }
        return output;
    },
    get : function(index) {
        nb=0;
        return this.suite(index)+ "  / "+nb +" récurrence(s).";
    },    
    display : function(combien, separateur) {
        nb=0;
        return this.get_all(combien).join(separateur)+ "  / "+nb +" récurrence(s).";
    },
    suite : function(n) {

        // etape recursive  (n-2) + (n-1)
        if( n > 1 ) {
            nb++;
            return this.suite(n-2) + this.suite(n-1);
        }         

        // etape de base  (1)     
        nb++;    
        return 1;
    }    
};