
function change_button_state(button) {
    const button_container = document.querySelectorAll('.button-container button');
    for (const x of button_container) {
        if (x.id == button) {
            x.className = '';
            x.classList.add('bg-lime-300', 'py-3', 'px-9', 'rounded-md', 'font-semibold', 'md:text-base', 'text-sm');


        }
        else {
            x.className = '';
            x.classList.add('bg-white', 'border-gray-200', 'border', 'rounded-md', 'py-3', 'px-9', 'text-gray-600', 'hover:bg-gray-300', 'transition-colors', 'duration-200', 'md:text-base', 'text-sm');
        }
    }


}

function donate(amount, location, title) {
    let wallet = document.getElementById('wallet').innerText;
    let place = document.getElementById(location).innerText;
    let log = document.getElementById('logging-station');


    let donation_amount = parseFloat(amount);

    let wallet_value = parseFloat(wallet);
    let place_value = parseFloat(place);

    let new_value = 0;


    if (typeof donation_amount !== 'number' || isNaN(donation_amount) || donation_amount < 0 || donation_amount == 0) {
        alert('Please enter a valid number.');


    }
    else {
        if (donation_amount > wallet) {
            alert('you have no money left to donate!');
        }
        else {

            wallet_value = wallet_value - donation_amount;
            new_value = place_value + donation_amount;
            document.getElementById('wallet').innerText = wallet_value;
            document.getElementById(location).innerText = new_value;
            let entry_container = document.createElement('div');
            let entry = document.createElement('h1');
            let date_container = document.createElement('p');
            entry_container.classList.add('space-y-4', 'mb-3', 'border', 'rounded-lg', 'p-6');
            entry.classList.add('font-bold', 'md:text-lg', 'text-sm');
            date_container.classList.add('font-extralight', 'text-stone-450', 'md:text-base', 'text-sm');

            let date = new Date();

            entry.innerText = `${donation_amount} Taka  is  donated  for ${title}`;
            date_container.innerText = `${date}`;

            entry_container.appendChild(entry);
            entry_container.appendChild(date_container);

            log.appendChild(entry_container);


        }


    }


}



