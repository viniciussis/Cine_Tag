import { useContext } from "react"
import { FavoriteContext } from "@/contexts/FavoriteContext.jsx"

export const useFavoriteContext = () => {
  const { favorites, setFavorites } = useContext(FavoriteContext)

  function addFavorite(newFavorite) {
    const isNew = !favorites.some(favorite => favorite.id === newFavorite.id)

    const newFavorites = [...favorites]

    if (isNew) {
      newFavorites.push(newFavorite)
      return setFavorites(newFavorites)
    }

    newFavorites.filter(favorite => favorite.id !== newFavorite.id)
    return setFavorites(newFavorites)
  }

  return {
    favorites,
    addFavorite
  }
}
