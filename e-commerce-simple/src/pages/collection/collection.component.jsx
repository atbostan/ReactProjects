import React from 'react'
import { selectCollection } from '../../redux/shop/shop.selector'
import "./collection.stlye.scss"


const CollectionPage = ({match}) => {
  return (
    <div className='collection-page'><h2>CATEGORY</h2></div>
  )
}

const mapStateToProps = (state,ownProps)=>({
  collection:selectCollection(ownProps)
})

export default CollectionPage