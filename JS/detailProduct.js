$(document).ready(function() {
    var name = localStorage.getItem('name');
    var img = localStorage.getItem('img');
    var price = localStorage.getItem('price');
    var state = localStorage.getItem('state');
    var brand = localStorage.getItem('brand');

    $('#name').text(name);
    $('#img').attr('src', img);
    $('#price').text(price);
    $('#state').text(state);
    $('#brand').text(brand);

    $('#option1').on('click', function() {
        $('#option2').attr('style', 'background-color: white; color: black;');
        $('#option3').attr('style', 'background-color: white; color: black;');
        $('#option4').attr('style', 'background-color: white; color: black;');
        $('#option1').attr('style', 'background-color: black; color: white;');
    });

    $('#option2').on('click', function() {
        $('#option1').attr('style', 'background-color: white; color: black;');
        $('#option3').attr('style', 'background-color: white; color: black;');
        $('#option4').attr('style', 'background-color: white; color: black;');
        $('#option2').attr('style', 'background-color: black; color: white;');
    });

    $('#option3').on('click', function() {
        $('#option1').attr('style', 'background-color: white; color: black;');
        $('#option2').attr('style', 'background-color: white; color: black;');
        $('#option4').attr('style', 'background-color: white; color: black;');
        $('#option3').attr('style', 'background-color: black; color: white;');
    });

    $('#option4').on('click', function() {
        $('#option1').attr('style', 'background-color: white; color: black;');
        $('#option2').attr('style', 'background-color: white; color: black;');
        $('#option3').attr('style', 'background-color: white; color: black;');
        $('#option4').attr('style', 'background-color: black; color: white;');
    });

    // $('#removeAmount').on('click', function() {
    //     var amount = document.getElementById('amount').value;
    //     if (amount > 1) {
    //         amount--;
    //         $('#amount').text(amount);
    //     }
    //     console.log(amount);
    // });

    // $('#addAmount').on('click', function() {
    //     var amount = document.getElementById('amount').value;
    //     amount++;
    //     $('#amount').text(amount);
    // });
    
  // Get the input element and buttons
  const amountInput = $('#amountNum');
  const addButton = $('#addAmount');
  const removeButton = $('#removeAmount');

  // Initial value
  let currentValue = parseInt(amountInput.val());

  // Input field value change event handler
  amountInput.on('change', function() {
    // Update currentValue based on the new input value
    currentValue = parseInt($(this).val());
  });

  // Add button click event handler
  addButton.on('click', function() {
    // Increment currentValue and update input value
    currentValue++;
    amountInput.val(currentValue);
  });

  // Remove button click event handler
  removeButton.on('click', function() {
    if (currentValue > 0) {
      // Decrement currentValue and update input value
      currentValue--;
      amountInput.val(currentValue);
    }
  });
    
});