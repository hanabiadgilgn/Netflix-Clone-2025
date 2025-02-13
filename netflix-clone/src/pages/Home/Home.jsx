import React from 'react'
import '../../App.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Banner from '../../components/banner/Banner'
import RowList from '../../components/rowList/RowList'


function Home() {
  return (
    <>
        <Header />
        <Banner />
        <RowList />
        <Footer />

    </>
  )
}

export default Home