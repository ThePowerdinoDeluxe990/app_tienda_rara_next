import Image from 'next/image'
import styles from './page.module.scss'
import 'bootstrap/dist/css/bootstrap.css'
import Products from '@/components/Products'

async function fetchProducts(){
  const res = await fetch("https://dummyjson.com/products?limit=10")
  const data = await res.json()
  return data.products
}

export default async function Home() {
  const productos = await fetchProducts()
  console.log(Products)

  return (
   <div className='bg-dark'>
   
      <div>
        <Products products={productos}/>
      </div>
   </div>
  )
}
