let input = document.querySelector("input")
let form = document.querySelector("form")
let img = document.querySelector("img")
let h3 = document.querySelector("h3")
let udata = document.querySelector(".udata")
let repodata = document.querySelector(".repodata")
let followdata = document.querySelector(".followdata")
let followingdata = document.querySelector(".followingdata")
let profilepic = document.querySelector(".profilepic")


form.addEventListener("submit" , searchName)
 


async function searchName(e){
    e.preventDefault()
    let git = await fetch(`https://api.github.com/users/${input.value}`)
    let data = await git.json()

    
    const {avatar_url} = data
    console.log(avatar_url)

    let error = data.error
    if(error){
        window.alert("Please Enter Correct User Name")
    }else{
        let username = data.login
        let repono = data.public_repos
        let follower = data.followers
        let followings = data.following
        let img = data.avatar_url

        udata.innerText = username
        repodata.innerText =  repono
        followdata.innerText = follower
        followingdata.innerText = followings
        profilepic.setAttribute("src" , avatar_url)
        


    }


    


    form.reset()
}