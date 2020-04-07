export class Point {
    //   private  x:number;
    //     y:number;
    
    
    constructor(private x?:number, private y?:number){
    // this.x = x;
    // this.y = y;
    }
    
        draw(){
    
    console.log(this.x, this.y)
        }
    
        get(){
    return this.x;
        }
     
        set(x){
            if(x<0)
            throw new Error('Invalid Value')
            
            this.x = x
            
                }
    
        // properties tsc -t es5 classes.ts

// tsc *.ts --target ES5

    get X() {
    return this.x
    }
    
    set X(a) {
            if(a<0)
            throw new Error('Invalid Value')
            
            this.x = a
            
    }
    }



