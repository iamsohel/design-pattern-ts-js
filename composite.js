class Shape {
  render() {
    console.log("Render shape");
  }

  move() {
    console.log("move");
  }
}

class Group {
  shapes = [];
  addShape(shape) {
    this.shapes.push(shape);
  }

  render() {
    this.shapes.forEach((shape) => {
      shape.render();
    });
  }

  move() {
    this.shapes.forEach((shape) => {
      shape.move();
    });
  }
}

const group1 = new Group();
group1.addShape(new Shape()); //square
group1.addShape(new Shape()); //square

const group2 = new Group();
group2.addShape(new Shape()); //circle
group2.addShape(new Shape()); //circle

const group = new Group();
group.addShape(group1);
group.addShape(group2);
group.render();
group.move();
