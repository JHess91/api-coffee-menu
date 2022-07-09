const menuItems = document.querySelector('.menu-items')

fetch('http://localhost:5501')
.then(response => response.json())
.then(menuItemsData => {
    let html = ''
    menuItemsData.forEach(eachItem => {
        let htmlItem = `
        <div class="menu-items__item">
          <img src="${eachItem.image}"/>
        <div>
            <h3>${eachItem.id} ${eachItem.title}</h3>
            <p>${eachItem.description}</p>
            <p>${eachItem.ingredients}</p>
        </div>
        </div>
      </div>
    `
    html += htmlItem
    })
    menuItems.innerHTML = html
})

.catch(err => console.error(err))
