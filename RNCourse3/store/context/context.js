import { useState, createContext } from "react";

export const FavouriteContext = createContext({
    ids: [],
    addFavourite: (id) => {},
    removeFavourite: (id) => {},
    isFavourite: (id) => {}
})


function FavouriteProvider({children}) {
  const [favouritesIds, setFavouritesIds] = useState([])

  function addFavourite(id){
    // console.log('Adding favourite', id)
    setFavouritesIds((currentFavourites) => [...currentFavourites, id])
  }

    function removeFavourite(id){
        setFavouritesIds((currentFavourites) => currentFavourites.filter(favId => favId !== id))
    }

    function isFavourite(id){
        return favouritesIds.includes(id)
    }

    const value = {
        ids: favouritesIds,
        addFavourite: addFavourite,
        removeFavourite: removeFavourite,
        isFavourite: isFavourite
    }

    return(
        <FavouriteContext.Provider value={value}>
            {children}
        </FavouriteContext.Provider>
    )


}

export default FavouriteProvider
