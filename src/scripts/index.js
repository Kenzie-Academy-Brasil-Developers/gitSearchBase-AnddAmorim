async function searchUser(){
    const input = document.querySelector(".index__input")
    const button = document.querySelector(".index__button")

    button.addEventListener("click", async (e)=>{
        e.preventDefault()
        const value = input.value

        
        const response = await fetch (`https://api.github.com/users/${value}`,{
            method: "GET"
        })
        
        if(!response.ok){
            location.replace("./src/pages/error.html")
        }else{
            const data = await response.json()
            localStorage.setItem("usuario", JSON.stringify(data))
            location.replace("./src/pages/profile.html")
        }
        }
    )
}
searchUser()