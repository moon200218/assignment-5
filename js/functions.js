// "bg-lime-300 py-3 px-7 rounded-md font-semibold
// "border-gray-200 border rounded-md py-3 px-8 text-gray-600 hover:bg-gray-300 transition-colors duration-200

// function change_button_state(button){
//     const button_container = document.getElementById('button-container');
//     for (const x of button_container){
//         if ()
//         x.className = '';
//         x.classList.add('border-gray-200', 'border', 'rounded-md', 'py-3', 'px-8', 'text-gray-600', 'hover:bg-gray-300', 'transition-colors', 'duration-200');

//     }
//     const nominated_button = document.getElementById(button);
//     nominated_button.classList.add('bg-lime-300', 'py-3', 'px-7', 'rounded-md', 'font-semibold');

function change_button_state(button){
    const button_container = document.querySelectorAll('.button-container button');
    for (const x of button_container){
        if (x.id == button){
            x.className = '';
            x.classList.add('bg-lime-300', 'py-3', 'px-9', 'rounded-md', 'font-semibold');


        }
        else {
            x.className = '';
            x.classList.add('border-gray-200', 'border', 'rounded-md', 'py-3', 'px-9', 'text-gray-600', 'hover:bg-gray-300', 'transition-colors', 'duration-200');
        }
    }


}



    


