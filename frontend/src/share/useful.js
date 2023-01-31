/* 
 * function to alter CSS var defined in root 
 * both parms should be string, or matchable string arrays 
 example: setCSSVar('--w', '#aabbbb')
 example: setCSSVar(['--w','--b'],['#fff','blue'])
*/
const tool= {
setCSS: function (cVar, val) {
    const r = document.querySelector(':root');
    if (typeof cVar == "string")
        r.style.setProperty(cVar, val);
    else if (typeof cVar == "object")
    {
        cVar.forEach((value, index) => {
         r.style.setProperty(value, val[ index ]);   
        });
    }
},

/* 
* method to limit lenght of a given string
*/
limit: function (str, n) {
    return str.length > n ? str.substr(0, n-1) + '...' : str;
},



/*
    * function to make a menu from an array of items
*/
/*
function makeMenu(items, hidePosition, linePosition) {
    let menuName = '';
    let menuItems = '';


    if (items.title) {
        menuName = items.title;
        items = items.items;
    }

    items.forEach((item, index) => {
        if (item == 'line') {
            menuItems += `<div class="menu-line"></div>`;
        } else {
            menuItems += `<div class="menu-item" onclick="${item.onclick}">${item.text}</div>`;
        }   
    });

    let menu = `<div class="menu" id="${menuName}">

    <div class="menu-items">
        ${menuItems}
    </div>
</div>`;
    document.body.insertAdjacentHTML('beforeend', menu);

    if (hidePosition) {
        document.getElementById(menuName).style.left = hidePosition;
    }

    if (linePosition) {
        document.getElementById(menuName).style.top = linePosition;

    }

    return menuName;
}
*/
// usage:
// items = [
//     {text: 'item1', onclick: 'alert("item1")'},

//     {text: 'item2', onclick: 'alert("item2")'},
//     'line',
//     {text: 'item3', onclick: 'alert("item3")'},
//     {text: 'item4', onclick: 'alert("item4")'},
//     {text: 'item5', onclick: 'alert("item5")'},
//     {text: 'item6', onclick: 'alert("item6")'},
//     {text: 'item7', onclick: 'alert("item7")'},
//     {text: 'item8', onclick: 'alert("item8")'},
//     {text: 'item9', onclick: 'alert("item9")'},
//     {text: 'item10', onclick: 'alert("item10")'},

// ]
// opt = {hidePosition: '100%', linePosition: '100px'}



// menuName = makeMenu( [items], opt [hidePosition], opt[linePosition])
// if there is a title key in items, that would set as the title
// 
}

export default tool;