document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.container');
    const totalDiv = document.getElementById('total-div'); // Reference to the total price div

    // Price mapping based on the selected offer
    const priceMapping = {
        0: 18.00, // Buy 1 Get 2
        1: 24.00, // Buy 2 Get 4
        2: 36.00  // Buy 3 Get 6
    };

    for (let i = 0; i < 3; i++) {
        const offerDiv = document.createElement('div');
        offerDiv.className = 'offer';
        offerDiv.style.top = `${74 + (84 * i)}px`; // Adjust the position based on index

        // Create the inner div
        const innerDiv = document.createElement('div');
        innerDiv.className = 'inner-div';

        // Create the text div
        const textDiv = document.createElement('div');
        textDiv.className = 'inner-text';
        textDiv.innerHTML = '30% <span>off</span>';

        innerDiv.appendChild(textDiv);
        offerDiv.appendChild(innerDiv);

        // Create the additional hidden div
        const hiddenTextDiv = document.createElement('div');
        hiddenTextDiv.className = 'hidden-text';
        hiddenTextDiv.textContent = '30% Off';
        hiddenTextDiv.style.display = 'none'; // Initially hidden
        hiddenTextDiv.style.position = 'absolute';
        hiddenTextDiv.style.top = '0';
        hiddenTextDiv.style.left = '0';
        hiddenTextDiv.style.width = '100%';
        hiddenTextDiv.style.height = '100%';
        hiddenTextDiv.style.backgroundColor = '#FF6B82';
        hiddenTextDiv.style.color = '#fff';
        hiddenTextDiv.style.display = 'flex';
        hiddenTextDiv.style.alignItems = 'center';
        hiddenTextDiv.style.justifyContent = 'center';
        hiddenTextDiv.style.fontSize = '14px';

        innerDiv.appendChild(hiddenTextDiv);

        // Create and append the radio button
        const radioButton = document.createElement('input');
        radioButton.type = 'radio';
        radioButton.className = 'radio-button';
        radioButton.name = 'offer'; // All radio buttons share the same name
        offerDiv.appendChild(radioButton);

        // Create and append the additional div
        const additionalDiv = document.createElement('div');
        additionalDiv.className = 'additional-div';

        // Add price and offer details based on the index
        if (i === 0) {
            const buyGetText = document.createElement('div');
            buyGetText.className = 'additional-text description';
            buyGetText.textContent = 'Buy 1 Get 2';

            const priceText = document.createElement('div');
            priceText.className = 'additional-text price';
            priceText.textContent = '$18.00 USD';

            additionalDiv.appendChild(buyGetText);
            additionalDiv.appendChild(priceText);
        } else if (i === 1) {
            const buyGetText = document.createElement('div');
            buyGetText.className = 'additional-text description';
            buyGetText.textContent = 'Buy 2 Get 4';

            const priceText = document.createElement('div');
            priceText.className = 'additional-text price';
            priceText.textContent = '$24.00 USD';

            const mostPopularDiv = document.createElement('div');
            mostPopularDiv.className = 'additional-text popular';
            mostPopularDiv.textContent = 'Most Popular';

            additionalDiv.appendChild(buyGetText);
            additionalDiv.appendChild(priceText);
            additionalDiv.appendChild(mostPopularDiv);
        } else if (i === 2) {
            const buyGetText = document.createElement('div');
            buyGetText.className = 'additional-text description';
            buyGetText.textContent = 'Buy 3 Get 6';

            const priceText = document.createElement('div');
            priceText.className = 'additional-text price';
            priceText.textContent = '$36.00 USD';

            additionalDiv.appendChild(buyGetText);
            additionalDiv.appendChild(priceText);
        }

        offerDiv.appendChild(additionalDiv);

        // Add event listener for the radio button
        radioButton.addEventListener('change', function() {
            const allOffers = document.querySelectorAll('.offer');

            // Reset all offer divs to original properties and remove any tables
            allOffers.forEach(function(offer, index) {
                offer.style.width = '342px';
                offer.style.height = '74px';
                offer.style.backgroundColor = ''; // Reset to default or original color
                offer.style.top = `${74 + (84 * index)}px`;
                offer.style.left = '50px';

                // Remove any existing table div
                const existingTableDiv = offer.querySelector('.table-container');
                if (existingTableDiv) {
                    existingTableDiv.remove();
                }

                // Reset position of radio button, additional div, and inner div
                const radioButton = offer.querySelector('.radio-button');
                const additionalDiv = offer.querySelector('.additional-div');
                const innerDiv = offer.querySelector('.inner-div');
                const innerTextDiv = offer.querySelector('.inner-text');
                const hiddenTextDiv = offer.querySelector('.hidden-text');

                if (radioButton) {
                    radioButton.style.left = '80px'; // Reset to original position
                }
                if (additionalDiv) {
                    additionalDiv.style.left = '117.23px'; // Reset to original position
                }
                if (innerDiv) {
                    innerDiv.style.width = ''; // Reset to original width
                    innerDiv.style.height = ''; // Reset to original height
                    innerDiv.style.position = ''; // Reset to original position
                    innerDiv.style.top = ''; // Reset to original top
                    innerDiv.style.left = ''; // Reset to original left
                    innerDiv.style.borderRadius = ''; // Reset to original border-radius
                    innerDiv.style.border = ''; // Reset to original border
                }
                if (innerTextDiv) {
                    innerTextDiv.style.display = ''; // Reset to original display state (visible)
                }
                if (hiddenTextDiv) {
                    hiddenTextDiv.style.display = 'none'; // Hide the hidden text div
                }
            });

            // Change properties of the selected offer div
            if (radioButton.checked) {
                offerDiv.style.width = '342px';
                offerDiv.style.height = '172px';
                offerDiv.style.backgroundColor = '#fffafb';

                // Adjust the position of the following offer divs
                for (let j = i + 1; j < allOffers.length; j++) {
                    const followingOffer = allOffers[j];
                    followingOffer.style.top = `${74 + (84 * j) + 98}px`; 
                }

                // Create the table container div
                const tableContainerDiv = document.createElement('div');
                tableContainerDiv.className = 'table-container';

                // Create and append the table
                const table = document.createElement('table');
                table.className = 'offer-table';

                const rows = 3;
                const cols = 3;

                for (let r = 0; r < rows; r++) {
                    const tr = document.createElement('tr');

                    for (let c = 0; c < cols; c++) {
                        const td = document.createElement('td');

                        if (r === 0 && c === 0) {
                        } else if (r === 1 && c === 0) {
                            td.textContent = '#1';
                        } else if (r === 2 && c === 0) {
                            td.textContent = '#2';
                        } else if (r === 0 && c === 1) {
                            td.textContent = 'Size';
                        } else if ((r === 1 || r === 2) && c === 1) {
                            const selectSize = document.createElement('select');
                            const sizes = ['S', 'M', 'L'];
                            sizes.forEach(size => {
                                const option = document.createElement('option');
                                option.value = size;
                                option.textContent = size;
                                selectSize.appendChild(option);

                                // Add event listener to update total price when a size is selected
                                selectSize.addEventListener('change', updateTotalPrice);
                            });
                            td.appendChild(selectSize);
                        } else if (r === 0 && c === 2) {
                            td.textContent = 'Color';
                        } else if ((r === 1 || r === 2) && c === 2) {
                            const selectColor = document.createElement('select');
                            const colors = ['Red', 'Black', 'White', 'Green'];
                            colors.forEach(color => {
                                const option = document.createElement('option');
                                option.value = color;
                                option.textContent = color;
                                selectColor.appendChild(option);

                                // Add event listener to update total price when a color is selected
                                selectColor.addEventListener('change', updateTotalPrice);
                            });
                            td.appendChild(selectColor);
                        }

                        tr.appendChild(td);
                    }

                    table.appendChild(tr);
                }

                tableContainerDiv.appendChild(table);
                offerDiv.appendChild(tableContainerDiv);

                // Move the radio button and additional div of the selected offer
                const selectedRadioButton = offerDiv.querySelector('.radio-button');
                if (selectedRadioButton) {
                    selectedRadioButton.style.left = '20px'; 
                }

                const selectedAdditionalDiv = offerDiv.querySelector('.additional-div');
                if (selectedAdditionalDiv) {
                    selectedAdditionalDiv.style.left = '55.23px'; 
                }

                // Update the inner div styles
                const selectedInnerDiv = offerDiv.querySelector('.inner-div');
                if (selectedInnerDiv) {
                    selectedInnerDiv.style.width = '52px';
                    selectedInnerDiv.style.height = '17px';
                    selectedInnerDiv.style.position = 'absolute';
                    selectedInnerDiv.style.top = '15px';
                    selectedInnerDiv.style.left = '135px';
                    selectedInnerDiv.style.borderRadius = '0px';
                    selectedInnerDiv.style.border = '0.9px '; 
                }

                // Display the hidden text div
                const selectedHiddenTextDiv = offerDiv.querySelector('.hidden-text');
                if (selectedHiddenTextDiv) {
                    selectedHiddenTextDiv.style.display = 'block'; // Show the hidden text div
                }

                // Update the total price based on the selected offer
                updateTotalPrice();
            }
        });

        container.appendChild(offerDiv);
    }

    // Set the first offer as selected by default
    const firstRadioButton = document.querySelector('.offer .radio-button');
    if (firstRadioButton) {
        firstRadioButton.checked = true;
        firstRadioButton.dispatchEvent(new Event('change'));
    }

    // Function to update the total price
    function updateTotalPrice() {
        const selectedOffer = document.querySelector('.offer .radio-button:checked');
        if (selectedOffer) {
            const selectedIndex = Array.from(document.querySelectorAll('.radio-button')).indexOf(selectedOffer);
            const basePrice = priceMapping[selectedIndex];
            totalDiv.textContent = `Total: $${basePrice.toFixed(2)} USD`;

            // Make the total price visible
            totalDiv.style.opacity = 1;
        }
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Get the button element by its ID
    const addToCartButton = document.getElementById('add-to-cart-button');

    // Add a click event listener to the button
    addToCartButton.addEventListener('click', function() {
        // Action to perform when the button is clicked
        alert('Item added to cart!');
        
        // Example of toggling the button's opacity (for demonstration)
        // This will toggle between visible and hidden when clicked
        if (addToCartButton.style.opacity === '1') {
            addToCartButton.style.opacity = '0.5'; // Example opacity change
        } else {
            addToCartButton.style.opacity = '1';
        }
    });
});