        // Select all canvas elements
        const canvases = document.querySelectorAll('canvas');
        const messages = document.querySelectorAll('.message');

        canvases.forEach((canvas, index) => {
            const ctx = canvas.getContext('2d');
            let isDrawing = false;

            // Adjust canvas size
            function resizeCanvas() {
                canvas.width = canvas.offsetWidth;
                canvas.height = canvas.offsetHeight;
            }

            // Initialize canvas size
            resizeCanvas();

            // Resize canvas when window is resized
            window.addEventListener('resize', resizeCanvas);

            canvas.addEventListener('mousedown', () => {
                isDrawing = true;
                messages[index].style.display = 'none'; // Hide the message when drawing starts
            });

            canvas.addEventListener('mouseup', () => {
                isDrawing = false;
                ctx.beginPath();
            });

            canvas.addEventListener('mousemove', (event) => {
                if (!isDrawing) return;

                ctx.lineWidth = 2;
                ctx.lineCap = 'round';
                ctx.strokeStyle = 'black';

                const rect = canvas.getBoundingClientRect();
                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;

                ctx.lineTo(x, y);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(x, y);
            });
        });
        function formatPhoneInput(input) {
            input.addEventListener('input', function (e) {
                // Remove all non-numeric characters
                let inputValue = e.target.value.replace(/\D/g, '');
                
                // Limit input to 10 digits
                inputValue = inputValue.substring(0, 10);
    
                // Format the input as (###) ### - ####
                const formattedInput = inputValue.replace(/^(\d{0,3})(\d{0,3})(\d{0,4})$/, function (match, p1, p2, p3) {
                    let result = '';
                    if (p1) result += `(${p1}`;
                    if (p1.length === 3) result += ') ';
                    if (p2) result += p2;
                    if (p2.length === 3) result += ' - ';
                    if (p3) result += p3;
                    return result;
                });
    
                e.target.value = formattedInput;
            });
        }
    
        // Apply the function to all elements with the class "phone-input"
        const phoneInputs = document.querySelectorAll('.phone-input');
        phoneInputs.forEach(function(input) {
            formatPhoneInput(input);
        });

// Set the current date for date inputs
const today = new Date().toISOString().split('T')[0];
document.getElementById('current-date').value = today;
document.querySelector('.organizationdate').value = today;
document.getElementById('advanced-payment-checkbox').addEventListener("change", (event) => {
    var input1 = document.getElementById('advanced-payment-selector');
    var input2 = document.getElementById('advanced-payment');

    if (event.target.checked) {
        input1.value = 1;
        input2.value = `$300.00`;
        initial();
    } else {

        input1.value = 1;
        input2.value = `$0.00`;
        initial();
    }
});
document.getElementById("last-month-checkbox").addEventListener('change',function(){
    var input = document.getElementById('last-month');
    if(this.checked){
input.removeAttribute('readonly');
    }else{
        input.setAttribute('readonly', true);
        input.value=0;
        initial();
    }
})

document.addEventListener('DOMContentLoaded', function() {
    const yesCheckbox = document.getElementById('property-management-yes');
    const noCheckbox = document.getElementById('property-management-no');
    const hideContentElements = document.querySelectorAll('.hide-content');

    function toggleContent() {
        if (yesCheckbox.checked) {
            hideContentElements.forEach(element => {
                element.style.display = 'none';
            });
        } else {
            hideContentElements.forEach(element => {
                if (element.tagName.toLowerCase() === 'li') {
                    element.style.display = 'list-item'; // Apply list-style to <li>
                } else {
                    element.style.display = 'block'; // Apply block style to <p>
                }
            });
        }
    }

    yesCheckbox.addEventListener('change', function() {
        noCheckbox.checked = !this.checked;
        toggleContent();
    });

    noCheckbox.addEventListener('change', function() {
        yesCheckbox.checked = !this.checked;
        toggleContent();
    });

    // Initialize the content display based on the default checked checkbox
    toggleContent();
});

        function hamburger(){
            var a = document.querySelector('.respo-header');
            if(a.classList.contains('active')){
                a.classList.remove("active");
            }else{
                a.classList.add("active")
            }
        }
        document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
});
document.getElementById("setup-fee-checkbox").addEventListener("change", function() {
    const input = document.getElementById('setup-fee');
    if (this.checked) {
     input.value=`$1.00`
        input.style.border = "1px solid var(--main)";
    } else {
        input.value=`$0.00`
        input.style.border = "none";
    }
});
document.getElementById("re-13-checkbox").addEventListener("change", function() {
    const input = document.getElementById('re-13');
    if (this.checked) {
        input.setAttribute('readonly', true);
        input.value=`$72.00`;
        setup();
        
    } else {
        input.setAttribute('readonly', true);
     
        input.value=0;
        setup();
    }
});
document.getElementById("re-7-checkbox").addEventListener("change", function() {
    const input = document.getElementById('re-7');
    if (this.checked) {
       
        input.value=`$72.00`;
        setup();
        
    } else {
        
     
        input.value=0;
        setup();
    }
});
// Function to update the total fee based on selected checkboxes
function updateTotal() {
    // Extract values from input fields, remove currency symbol and convert to number
    function getValue(id) {
        let value = document.getElementById(id).value;
        return parseFloat(value.replace('$', '')) || 0;
    }

    // Initialize variables with values from input fields if checkboxes are checked
    let re7 = 0;
    let re13 = 0;
    let setupFee = 0;

    if (document.getElementById('re-7-checkbox').checked) {
        re7 = getValue('re-7');
    }

    if (document.getElementById('re-13-checkbox').checked) {
        re13 = getValue('re-13');
    }

    if (document.getElementById('setup-fee-checkbox').checked) {
        setupFee = getValue('setup-fee');
    }

    // Calculate total setup fee
    let totalSetupFee = re7 + re13 + setupFee;

    // Update the text content of the TotalSetupFee element
    document.getElementById('total-setup-fee').textContent = `$${totalSetupFee.toFixed(2)}`;
}

// Attach the updateTotal function to the change event of checkboxes
document.getElementById('re-7-checkbox').addEventListener('change', updateTotal);
document.getElementById('re-13-checkbox').addEventListener('change', updateTotal);
document.getElementById('setup-fee-checkbox').addEventListener('change', updateTotal);

// Call updateTotal initially to set the correct total
updateTotal();


function initial() {
    var totalInitialCost = document.getElementById('total-initial-cost');
    var selector = parseInt(document.getElementById('advanced-payment-selector').value) || 0;
    var advanced = parseInt(document.getElementById('advanced-payment').value) || 0;
    
    var lastMonth = parseInt(document.getElementById('last-month').value) || 0;
    
    
   
    if(selector == 1){
        additionalCost =300
    }else{
        var additionalCost = selector * 300;
    }
    var totalCost = additionalCost  + lastMonth;
    
    totalInitialCost.textContent = `$${totalCost.toFixed(2)}`;
}

initial();
document.getElementById('"Monthly-fee-checkbox').addEventListener('change',()=>{
    var a = document.getElementById('Monthly-fee');
    if(this.checked){
        input.value = 300;
    }
    else{
        input.value=0;
        initial();
    }
});
