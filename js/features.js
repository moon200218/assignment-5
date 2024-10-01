// change section handler
document.getElementById('history').addEventListener('click', function(){
    const button_id = this.id;
    const donation_container = document.getElementById('donation-section');
    const history_container = document.getElementById('history-section');

    change_button_state(button_id);
    donation_container.classList.add('hidden');
    history_container.classList.remove('hidden');


})
document.getElementById('donation').addEventListener('click', function(){
    const donation_container = document.getElementById('donation-section');
    const history_container = document.getElementById('history-section');
    const button_id = this.id;

    change_button_state(button_id);
    donation_container.classList.remove('hidden');
    history_container.classList.add('hidden');

})

// noakhali donation box handler
document.getElementById('noakhali-button').addEventListener('click', function(event){
    event.preventDefault();
    let amount = document.getElementById('n-amount').value;
    let title = document.getElementById('noakhali-title').innerText;

    donate(amount, 'noakhali-amount', title);
    document.getElementById('n-amount').value = '';
    


})
// feni donation handler
document.getElementById('feni-button').addEventListener('click', function(event){
    event.preventDefault();
    let amount = document.getElementById('f-amount').value;
    let title = document.getElementById('feni-title').innerText;

    donate(amount, 'feni-amount', title);
    document.getElementById('f-amount').value = '';
    


})

// Quota-protest
document.getElementById('quota-button').addEventListener('click', function(event){
    event.preventDefault();
    let amount = document.getElementById('q-amount').value;
    let title = document.getElementById('quota-title').innerText;

    donate(amount, 'quota-amount', title);
    document.getElementById('q-amount').value = '';
    


})