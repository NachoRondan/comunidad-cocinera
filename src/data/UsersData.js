import UserImg from '../assets/userPicture.jpg'
import ChefImg from '../assets/MelGibson.jpg'

const users = [
    {
        id: "0",
        name: "Ignacio", 
        lastname: "Rondan",
        mail:"nacho.rondan@gmail.com",
        nickname: "Nacho",
        password: "passNacho",
        age: 24,
        avatarUrl: UserImg,
        recipiesId:["1","2","3"],
    },
    {
        id: "1",
        name: "Mel", 
        lastname:"Gibson", 
        nickname:"MG",
        password: "passMG",
        age: 66,
        avatarUrl: ChefImg,
        recipiesId:["0","4","5"],
    }
]
export default users