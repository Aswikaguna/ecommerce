import React from 'react'
import HomeCollectionItem from '../HomeCollectionItem/HomeCollectionItem'

const HomeCollection = () => {
    return (
        <div className="home-collection">
            <div className="page-container">
                <HomeCollectionItem
                    image='https://as1.ftcdn.net/v2/jpg/05/96/05/86/1000_F_596058657_SXgEnRnQsM3KMonf1HEFoGSrxpg3wSSt.jpg'
                    title='Seeds  Collection'
                    // comment='Launch Offer 15% Off!'
                    reverse={false}
                />
                <HomeCollectionItem
                    image='https://as2.ftcdn.net/v2/jpg/04/22/43/93/1000_F_422439388_3cywNFtwG0njAz7aF3NZ1AFo52ICp9bj.jpg'
                    title='Fertilizers collections'
                    // comment='New Season Stock'
                    reverse={true}
                />
            </div>
        </div>
    )
}

export default HomeCollection