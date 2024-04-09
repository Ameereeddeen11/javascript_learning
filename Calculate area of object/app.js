function select(){
    switch (document.getElementById("objects").value){
      case "circle":
        document.getElementById("circle-par").style.display = 'block'
        break;
      case "square":
        document.getElementById("square-par").style.display = 'block'
        break;
      case "rectangle":
        document.getElementById("rectangle-par").style.display = 'block'
        break;
      case "triangle":
        document.getElementById("triangle-par").style.display = 'block'
        break;
    }
  }
  
  circleBtn.onclick = function(){
    const radius = Number(document.getElementById("radius").value);
    let area = Math.PI * radius**2;
    document.getElementById("result").style.display = 'block';
    document.getElementById("result").textContent = `Area of the circle is ${area}`;
  }
  
  squareBtn.onclick = function(){
    const side = Number(document.getElementById("side-a").value)
    let area = side**2;
    document.getElementById("result").style.display = 'block';
    document.getElementById("result").textContent = `Area of the square is ${area}`;
  }
  
  rectangleBtn.onclick = function(){
    const sideA = Number(document.getElementById("rectangle-side-a").value);
    const sideB = Number(document.getElementById("side-b").value);
    let area = sideA * sideB;
    document.getElementById("result").style.display = 'block';
    document.getElementById("result").textContent = `Area of the rectangle is ${area}`;
  }
  
  triangleBtn.onclick = function(){
    const sideA = Number(document.getElementById("side-a").value);
    const height = Number(document.getElementById("height").value);
    let area = (sideA * height) / 2;
    document.getElementById("result").style.display = 'block';
    document.getElementById("result").textContent = `Area of the triangle is ${area}`;
  }