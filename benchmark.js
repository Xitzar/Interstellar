

var benchmark = {

    start_time : 0,
    end_time : 0,

    test : function(test_function) {
        this.start();
        test_function();
        this.end();       
        this.display();
    },
    start : function() {
        var d = new Date();
        var n = d.getMilliseconds();
        this.start_time = n;
    },
    end : function() {
        var d = new Date();
        var n = d.getMilliseconds();
        this.end_time = n;
    },
    display : function() {        
        var timer = this.end_time - this.start_time;
        console.log("Benchmark results: " + timer + " milliseconds");
    } 
}