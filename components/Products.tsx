
"use client"

import {useRouter} from "next/navigation"
import Image from 'next/image'
interface Props{
    products:Array<string>
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

export default function Products({products}:Props){

    const router = useRouter()

    return(
    <div className="container">
        <div className=" row justify-content-center">
            
                {products.map((product:any) =>(
                    <div className="card "   style={{width: "30rem"}} key={product.id}>
                        <div className="card-body">
                        <Image className="card-img-top" width={200} height={200} alt={product.title} src={product.thumbnail}/>
                            <h4 className="card-title">{product.title}</h4>
                            
                            <p className="card-text">Price: {product.price}$</p>
                            <Mystock  Stock={product.stock}/>
                            <button className="btn btn-danger" onClick={()=>{
                        router.push(`/products/${product.id}`)
                      }}>Comprar</button>
                        </div>
                    </div>
                ))}
            
        </div>
    </div>
    )
}