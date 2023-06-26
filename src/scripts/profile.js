function creatHeader(){
    const userPhoto = document.querySelector(".profile__img")
    const profileName = document.querySelector(".profile__name")
    const button = document.querySelector(".otherUser__button")
    
    const user = JSON.parse(localStorage.getItem("usuario"))

    userPhoto.src = user.avatar_url
    
    profileName.innerText = user.name
    
    button.addEventListener("click", ()=>{
        location.replace("../../")
        localStorage.clear()
    })
}

async function renderRepositories(){
    const user =  JSON.parse(localStorage.getItem("usuario"))
    
    const response = await fetch(`https://api.github.com/users/${user.login}/repos`)
    const repos = await response.json()

    const ulContainer = document.querySelector(".profile__ul")
    repos.forEach(repo =>{
        const card = document.createElement("li")
        const title = document.createElement("h4")
        const parag = document.createElement("p")
        const anchor = document.createElement("a")

        title.innerText = repo.name

        if(repo.description !== null){
            parag.innerText = repo.description
        }else{
            parag.innerText = "Repositório sem descrição"
        }
        
        anchor.innerText = "Repositório"
        anchor.href = repo.html_url
        anchor.target = "_blank"

        card.append(title, parag, anchor)
        ulContainer.appendChild(card)
    })
}
creatHeader()
renderRepositories()