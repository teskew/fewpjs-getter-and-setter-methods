// Add your Circle class here
class Circle{
    constructor(radius){
        this.radius = radius
    }
   get diameter(){
       return this.radius * 2
   }
   get circumference(){
       return this.radius * 2 * 3.14
   }
   get area(){
       return this.radius * this.radius * 3.14
   }
    set diameter(dia){
        this.radius = dia/2
    }
    set circumference(num) {
      this.radius = num/(2 * 3.14)
}
     set area(area){
     this.radius = Math.sqrt(area/Math.PI)
     }
}    