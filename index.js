const inputBtn = document.querySelector('#input-btn');
const deleteBtn = document.querySelector('#delete-btn');
const tabBtn = document.querySelector('#tab-btn');
const inputEl = document.querySelector('#input-el');
const ulEl = document.querySelector('#ul-el');

// Falsy values -> false, 0, "", null, undefined, NaN
// null -> how developers can set a variable to nothing
// undefined -> how JavaScript sets a variable to nothing

let myLeads = [];

// localStorage.clear();
const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'));

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
};

function render(leads) {
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
        // document.createElement("li");
        // li.textContent = myLeads[i];
        // ulEl.append(li);
        listItems += `
        <li>
            <a target='_blank' href='${leads[i]}'>
                ${leads[i]}
            </a>
         </li>
         `;
    };

    ulEl.innerHTML = listItems;
};

inputBtn.addEventListener('click', function() {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    // myLeads = JSON.parse(myLeads); // Turns it to previous type e.g array

    // myLeads = JSON.stringify(myLeads); // Turns it to string

    localStorage.setItem('myLeads', JSON.stringify(myLeads));

    // localStorage.setItem('myLeads', 'www.waltertayarg.tech');
    render(myLeads);
    console.log(localStorage.getItem('myLeads'));
});

deleteBtn.addEventListener('dblclick', function() {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
});

tabBtn.addEventListener('click', function() {

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url);
        localStorage.setItem('myLeads', JSON.stringify(myLeads));
        render(myLeads);
    });
    // myLeads.push(inputEl.value);
    // localStorage.setItem('myLeads', JSON.stringify(myLeads));
    // render(myLeads);
});
