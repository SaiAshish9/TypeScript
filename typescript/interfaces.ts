interface Point {
    x:number,
    y:number,
    draw:()=>void
}

let drawPoint=(point:Point)=>{
console.log(point.x)
}

// cohesion
let distance=(A:Point,B:Point)=>{

}

drawPoint({x:2,y:4})