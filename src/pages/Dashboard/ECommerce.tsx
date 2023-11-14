import CardFour from '../../components/CardFour.tsx';
import CardOne from '../../components/CardOne.tsx';
import CardThree from '../../components/CardThree.tsx';
import CardTwo from '../../components/CardTwo.tsx';
import ChartOne from '../../components/ChartOne.tsx';
import ChartThree from '../../components/ChartThree.tsx';
import ChartTwo from '../../components/ChartTwo.tsx';
import ChatCard from '../../components/ChatCard.tsx';
import MapOne from '../../components/MapOne.tsx';
import TableOne from '../../components/TableOne.tsx';
import React, { useEffect, useState } from 'react';

  const apiUrl = localStorage.getItem('apiUrl');
  const bearerToken = localStorage.getItem('bearerToken');
  async function getData() {
    const response = await fetch(`${apiUrl}getusers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${bearerToken}`
      },
    });
    if (!response.ok)
      console.log("Can't get users.");
      
    else {
      console.log("Got some users.");
      
    }
  }

  interface ApiResponse {
    userId: number;
    username: string;
    // Add more properties as needed
  }

const ECommerce = () => {
  
    const [data, setData] = useState<ApiResponse | null>(null);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const bearerToken = localStorage.getItem('apiUrl');
      const apiUrl = localStorage.getItem('apiUrl');
  
      fetch(`${apiUrl}users`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${bearerToken}`,
          'Content-Type': 'application/json',
        },
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((apiData: ApiResponse) => {
          setData(apiData);
        })
        .catch(error => {
          setError(`Fetch error: ${error.message}`);
        });
    }, []);
  

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour />
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
        <MapOne />
        <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
        <ChatCard />
      </div>
    </>
  );
};

export default ECommerce;
