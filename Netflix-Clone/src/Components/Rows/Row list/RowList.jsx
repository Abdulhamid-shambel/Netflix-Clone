import React from 'react'
import './rowList.css'
import Row from '../Row/Row'
import requests from '../../../utils/requests'

function RowList() {
  return (
    <div>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOrginals}
        isLargRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="TV Shows" fetchUrl={requests.fetchTvShow} />
      <Row title="Documentary" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default RowList