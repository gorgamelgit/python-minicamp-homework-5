//Form validation

function validateForm() {
  var name = document.getElementById('nameInput').value;
  var species = document.getElementById('speciesInput').value;
  var age = document.getElementById('ageInput').value;

  if (!name.length || !species.length || !age.length) {
    alert('Form fields must not be blank!');
    return false;
  }

  if (isNaN(parseInt(age)) || typeof parseInt(age) !== 'number') {
    alert('Age field must take a number');
    return false;
  }

  //console.log(name, species, age);

  return true;
}

//Change text color button

document.getElementById('changeColor').addEventListener('click', function() {
  var color = document.getElementById('textColor').value;
  document.body.style.color = color;
  //console.log('body', body);
  console.log('You clicked the button');
});

//Hide content button

document.getElementById('hideContent').addEventListener('click', function() {
  document.body.style.display = "none";
})
