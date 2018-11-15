
// ** Model needs its own file
// @todo: maybe 

// fibonacci.display(8, ", ");

var fibonacci = {
    get_all : function(combien) {
        var output = [];
        for(var i=0; i<combien;i++) {
            output.push( this.suite(i) );
        }
        return output;
    },
    get : function(index) {
        return this.suite(index);
    },    
    display : function(combien, separateur) {
        return this.get_all(combien).join(separateur);
    },
    suite : function(n) {

        // etape recursive  (n-2) + (n-1)
        if( n > 1 ) {
            return this.suite(n-2) + this.suite(n-1);
        }         

        // etape de base  (1)            
        return 1;
    }    
};