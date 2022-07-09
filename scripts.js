const menuItems = document.querySelector('.menu-items')
// const menuUrl = 'http://localhost:5501'
const menuUrl = 'https://justin-test-menu.web.app/database.json'

fetch(menuUrl)
.then(response => response.json())
.then(menuItemsData => {
    let html = ''
    menuItemsData.forEach(eachItem => {
        let htmlItem = `
        <div class="menu-items__item">
          <img src="${eachItem.image}"/>
            <h3>${eachItem.id} ${eachItem.title}</h3>
            <p>${eachItem.description}</p>
            <p>${eachItem.ingredients}</p>
        </div>
      `
    html += htmlItem
    })
    menuItems.innerHTML = html
})

.catch(err => console.error(err))
