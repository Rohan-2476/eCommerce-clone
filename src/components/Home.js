import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">

            <div className="home_container">
                <img className='homeBanner' src="https://m.media-amazon.com/images/G/31/prime/detail_page/2018/Feb/MusicLaunch/IN-PR-Mob-Slash-Prime-Main-Banner-Feb18-Music-1400x538._CB610779711_.jpg" alt="" />

                <div className="home_row">

                    <Product
                        id={123545}
                        title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                        price={29.99}
                        rating={4}
                        image='https://books.google.co.in/books/content?id=19forYX7NLQC&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U2tSLRMY_UIIcdx8YBezIlpoYgFBw&w=200'
                    />

                    <Product
                        id={654652}
                        title='Acer Predator Helios 300 11Th Gen Intel Core I9-11900H 15.6 Inches (39.62Cms) Fhd Ips Gaming Laptop (16 Gb/1Tb Ssd/Windows 11 Home/6 Gb Graphics/Nvidia Geforce Rtx 3060/360 Hz, Black, 2.3 Kg) Ph315-54'
                        price={199.99}
                        rating={5}
                        image='https://m.media-amazon.com/images/I/71Xk9qt6IwL._SX350_.jpg'
                    />

                </div>

                <div className="home_row">

                    <Product
                        id={798735}
                        title='Amazon Echo (3rd generation) |
                    Smart speaker with Alexa, Charcoal
                    Fabric'
                        price={98.99}
                        rating={4}
                        image='https://m.media-amazon.com/images/I/61WUqJd4dfS._SX279_.jpg'
                    />

                    <Product
                        id={872164}
                        title='New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB)- Silver (4th Gene ration)'
                        price={599.99}
                        rating={5}
                        image='https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-13-select-wifi-silver-202210?wid=370&hei=306&fmt=p-jpg&qlt=95&.v=1664411207174'
                    />

                    <Product
                        id={456871}
                        title='boAt Xtend Smartwatch with Alexa Built-in, 1.69” HD Display, Multiple Watch Faces, Stress Monitor, Heart & SpO2 Monitoring, 14 Sports Modes, Sleep Monitor, 5 ATM & 7 Days Battery(Pitch Black)'
                        price={39.99}
                        rating={4}
                        image='https://m.media-amazon.com/images/I/61IMRs+o0iL._SX272_.jpg'
                    />

                </div>

                <div className="home_row">

                    <Product
                        id={789321}
                        title='Samsung LC49RG90SSUXEN 49 Curved
                    LED Gaming Monitor'
                        price={1099.99}
                        rating={5}
                        image='https://m.media-amazon.com/images/I/81rus0UFhsL._AC_SX679_.jpg'
                    />

                </div>


            </div>

        </div>
    )
}

export default Home