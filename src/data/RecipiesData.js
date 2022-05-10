import PaellaImg from '../assets/paella.jpg'
import SopaImg from '../assets/sopa.jpg'
import MilaImg from '../assets/mila.jpg'
import TartaImg from '../assets/tarta.png'
import CarneImg from '../assets/carne.jpg'
import EnsaladaImg from '../assets/ensalada.jpg'
import PolloImg from '../assets/pollo.jpg'

const recipies = [
    {
        id: "0",
        recipieName: "Paella", 
        dificulty: 1,
        imageUrl: PaellaImg,
        rate: 4.5, 
        userId: "1",
        ingredients:[{label:'Arroz'},{label:'Queso'},{label:'Salsa de tomate'},{label:''}],
        steps:[{label:'Cocinar Arroz'},{label:'Agregar queso'}, {label:'Agregar Salsa de tomate'},{label:''}],
        description: "Una paella...", 
    },
    {
        id: "1",
        recipieName: "Sopa de Zapallo",
        dificulty: 4,
        imageUrl: SopaImg,
        rate: 2,
        userId: "1",
        ingredients:[{label:'1 litro de Agua'}, {label:'Arroz'}, {label:'Un zapallo'},{label:'Verduras'},{label:''}],
        steps:[{label:'Hervir agua'},{label:'Hervir el zapallo'}, {label:'Cocinar las verduras'}, {label:'Mezclar'}, {label:''}],
        description: "Una sopa de zapallo ...", 
    },
    {
        id: 2,
        recipieName: "Milanesa Napolitana",
        ingredients:[{label:'Milanesa'},{label:'Queso'},{label:'Jamon'},{label:''}],
        steps:[{label:'Freir Milanesa'},{label:'Agregar queso'}, {label:'Agregar Jamon'},{label:''}],
        description: "Una milanesa napolitana", 
        dificulty: 1, 
        imageUrl: MilaImg, 
        rate: 2.9, 
        userId: "0"
    },
    {
        id: '3',
        recipieName: "Tarta de Jamon y queso",
        dificulty: 3,
        imageUrl: TartaImg,
        rate: 4.5,
        userId: "1",
        ingredients:[{label:'Jamon'},{label:'Queso'},{label:'Tapas'},{label:''}],
        steps:[{label:'Colocar tapas'},{label:'Agregar queso'}, {label:'Agregar Jamon'}, {label:'Cocinar'}, {label:''}],
        description: "Una tarta de Jamon y queso", 
    },
    {
        id: '3',
        recipieName: "Carne al horno",
        dificulty: 5,
        imageUrl: CarneImg,
        rate: 2,
        userId: '1',
        ingredients:[{label:'Carne'},{label:'Papas'},{label:'Cebolla'},{label:''}],
        steps:[{label:'Desgrasar la carne'},{label:'Pelar papas'}, {label:'Saltear cebolla'}, {label:'Cocinar'}, {label:''}],
        description: "Carne al horno con papas y cebolla", 
        
    },
    {
        id: '4',
        recipieName: "Ensalada Cesar", 
        dificulty: 1,
        imageUrl: EnsaladaImg,
        rate: 2.9,
        userId: '0',
        ingredients:[{label:'Lechuga'},{label:'Pollo'},{label:'Salsa Cesar'}, {label:'Pan'}, {label:''}],
        steps:[{label:'Cortar lechuga'},{label:'Cortar pollo'}, {label:'Tostar pan'}, {label:'Agregar salsa'}, {label:''}],
        description: "Ensalada cesar...", 
    },
    {
        id: '5',
        recipieName: "Pollo al disco", 
        dificulty: 1,
        imageUrl: PolloImg,
        rate: 2,
        userId: '1',
        ingredients:[{label:'Pollo'},{label:'Cebolla'},{label:'Morron'}, {label:''}],
        steps:[{label:'Cortar Morron'},{label:'Cortar cebolla'}, {label:'Cortar pollo'}, {label:'Cocinar'}, {label:''}],
        description: "Pollo al disco...", 
    }
]

export default recipies