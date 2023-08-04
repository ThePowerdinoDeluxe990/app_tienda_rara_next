import Image from 'next/image'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.css'
type params ={
    Id:number
}

async function getProduct(Id:number){
    const res = await fetch(`https://dummyjson.com/products/${Id}?limit=10`)
    const data =await res.json()
    console.log(data)
    return data
}

function Mystock({Stock}:{Stock:number}){
    if(Stock>0){
        return(
            <>
                <p>Stock:✅</p>
            </>
        )
    }else{
        return(
            <>
                <p>Stock:❌</p>
            </>
        )
    }
}
export default async function UsersPage({params}:{params:params}){
  
    const Products = await getProduct(params.Id)
    
return(  
   <div className=' bg-dark'>
    <div className="container " key={Products}>
                <ul className="nav justify-content-center" >
                    <Link href="/" className="nav-item"><button className='btn btn-info'>Volver atras</button></Link>
                </ul>
                <div  className='row justify-content-center'>
                       <div className='card' style={{width: "65%"}}>
                        <div className='card-body'>
                        <Image className="card-img-top" width={200} height={200}  alt={Products.title} src={Products.thumbnail}/>
                            <h4 className="card-title">{Products.title}</h4>
                            
                            <p className="card-text">{Products.description}</p>
                            <p className="card-text">Price: {Products.price}$</p>
                            <p className="card-text">Rating: {Products.rating}⭐</p>
                            <Mystock Stock={Products.stock}/>
                            <button className="btn btn-danger">Comprar</button>
                        </div>
                        </div>
                        </div>
                </div>
                </div>
            
    )
}