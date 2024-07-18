import { Product } from "./product"

export interface Cart {
  id: string
  cartItems: CartItem[]
}

export interface CartItem {
  productId: string
  product: Product
}

