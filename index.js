const inputBtn = document.querySelector('#input-btn');
const deleteBtn = document.querySelector('#delete-btn');
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
    renderLeads();
};

inputBtn.addEventListener('click', function() {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    // myLeads = JSON.parse(myLeads); // Turns it to previous type e.g array

    // myLeads = JSON.stringify(myLeads); // Turns it to string

    localStorage.setItem('myLeads', JSON.stringify(myLeads));

    // localStorage.setItem('myLeads', 'www.waltertayarg.tech');
    renderLeads();
    console.log(localStorage.getItem('myLeads'));
});

deleteBtn.addEventListener('dblclick', function() {
    localStorage.clear();
    myLeads = [];
    renderLeads();
});

function renderLeads() {
    let listItems = "";
    for (let i = 0; i < myLeads.length; i++) {
        // document.createElement("li");
        // li.textContent = myLeads[i];
        // ulEl.append(li);
        listItems += `
        <li>
            <a target='_blank' href='${myLeads[i]}'>
                ${myLeads[i]}
            </a>
         </li>
         `;
    };

    ulEl.innerHTML = listItems;
};
