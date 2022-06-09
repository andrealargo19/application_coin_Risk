import Dashboard from './pages/Dashboard';
import DetailsProjects from './pages/DetailsProjects';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

//principal Function

function App() {
  const [dashboardRender, setDashboardRender] = useState([]);
  const [detailRender, setDetailRender] = useState([]);
  
  const call_API = async (URL) => {
    const response_data = await fetch(URL);
    if(!response_data.ok) {
      throw new Error('Something went wrong!');
    }

    const responseData = await response_data.json();
    return(responseData);
  }

  const getData = async () => {
    const info_endpoints_dashboard = [];
    const info_endpoints_details = [];
    const url_list_endpoints = [
      'https://api.coingecko.com/api/v3/coins/ethereum?localization=false&tickers=false&market_data=false&community_data=false&sparkline=false',
      'https://api.coingecko.com/api/v3/coins/frax?localization=false&tickers=false&market_data=false&community_data=false&sparkline=false',
      'https://api.coingecko.com/api/v3/coins/uniswap?localization=false&tickers=false&market_data=false&community_data=false&sparkline=false',
      'https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=false&community_data=false&sparkline=false'
    ];

    for (const endpoint of url_list_endpoints) {
      const response_endpoint = await call_API(endpoint);
      const info_data_dashboard = {
        "name":response_endpoint.name,
        "id":response_endpoint.id,
        "symbol":response_endpoint.symbol,
        "image":response_endpoint.image.large,
        "alexa_rank":response_endpoint.public_interest_stats.alexa_rank,
        "last_updated":response_endpoint.last_updated
      }
      info_endpoints_dashboard.push(info_data_dashboard);
      
      const info_detail = {...info_data_dashboard }
      info_detail["description"] = response_endpoint.description.en;
      info_detail["categories"] = response_endpoint.categories;
      info_detail["forks"]= response_endpoint.developer_data.forks;
      info_detail["stars"]= response_endpoint.developer_data.stars;
      info_detail["subscribers"]= response_endpoint.developer_data.subscribers;
      info_detail["total_issues"]= response_endpoint.developer_data.total_issues;
      info_detail["pull_requests_merged"]= response_endpoint.developer_data.pull_requests_merged;
      info_detail["pull_request_contributors"]= response_endpoint.developer_data.pull_request_contributors;
      info_detail["closed_issues"]= response_endpoint.developer_data.closed_issues;
      info_detail["market_cap_rank"] = response_endpoint.market_cap_rank;
      info_detail["coingecko_rank"] = response_endpoint.coingecko_rank;
      info_detail["coingecko_score"] = response_endpoint.coingecko_score;
      info_detail["developer_score"] = response_endpoint.developer_score;
      info_detail["community_score"] = response_endpoint.community_score;
      info_detail["liquidity_score"] = response_endpoint.liquidity_score;
      info_detail["public_interest_score"] = response_endpoint.public_interest_score;
      info_detail["links"] = response_endpoint.links.homepage;
      info_endpoints_details.push(info_detail);
    }
    setDashboardRender(info_endpoints_dashboard);
    setDetailRender(info_endpoints_details);
  }

  useEffect(() => {
    getData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Router>
      <Routes>
          <Route exact path="/" element={<Dashboard info_dashboard={dashboardRender}/>}/>
          <Route exact path="/details/:cripto" element={<DetailsProjects info_detail={detailRender}/>} />
      </Routes>
    </Router>
  );
}

export default App;
