// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130


// I was getting an error that Cuboidmaker was already defined 
//(from the prototype file) so I added "Class" to this class name.

class CuboidMakerClass {
    constructor(dimensions) {
    this.length = dimensions.length;
    this.width = dimensions.width;
    this.height = dimensions.height;
    }
    
    volume () {
    return this.length*this.width*this.height;
  }
  
  surfaceArea () {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}
  /* == Step 2: Volume Method ==
    Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
    
    Formula for cuboid volume: length * width * height
  */
  
  
  
  /* == Step 3: Surface Area Method ==
    Create another method using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 
  
    Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
  */
  
  
  
  
  /* == Step 4: Create a new object that uses CuboidMaker ==
    Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
    Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
  */
  
  const cuboid2 = new CuboidMakerClass ({length: 4,width: 5,height: 5})
  
  // Test your volume and surfaceArea methods by uncommenting the logs below:
  
  console.log(cuboid2);
  console.log(cuboid2.volume()); // 100
  console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMakerClass {
    constructor(cubeWidth) {
        super(cubeWidth)
        this.length = cubeWidth.width;
        this.height = cubeWidth.width;
    }
    
    cubeVolume () {
        return Math.pow(this.width,3);
    }

    cubeSurfaceArea() {
        return 6 * Math.pow(this.width,2);
    }
}

const myCube = new CubeMaker({width: 5});

console.log(myCube);

console.log(myCube.cubeVolume());

console.log(myCube.cubeSurfaceArea());