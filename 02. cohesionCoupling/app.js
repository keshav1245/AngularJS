var student = {
  name: "",
  type: "student"
};

document.addEventListener('DOMContentLoaded', contentLoaded);

function contentLoaded(event){
  document.getElementById('name').addEventListener('keyup',keyUp);
}

function keyUp(event){
  calculateNumericOutput();
}

function calculateNumericOutput(){
  //input to be separated
  student.name = document.getElementById('name').value; //Low Cohesion

  //computation to be separated
  var totalNameValue = 0;
  for (var i =0;i<student.name.length;i++){
    totalNameValue += student.name.charCodeAt(i);
  }

  //output to be separated
  var output = "Total Numeric Value of the Name is : " + totalNameValue;//low cohesion
  document.getElementById('output').innerText = output; // low cohesion

}
