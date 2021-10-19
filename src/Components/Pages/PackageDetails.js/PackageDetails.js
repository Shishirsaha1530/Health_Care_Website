import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const PackageDetails = () => {
    let {id} = useParams();
    const [packageDetails, setPackageDetails] = useState([]);

  const [singlePackage, setSinglePackage] = useState({});

  useEffect(() => {
    fetch("/serviceDetails.json")
      .then((res) => res.json())
      .then((data) => setPackageDetails(data.packages));
  }, []);

    useEffect(() => {
    const foundPackage = packageDetails.find(
      (packages) => packages.id === id);
      setSinglePackage(foundPackage)
  }, [packageDetails]);
    return (
        <div>
            <h3> Item is Booked {id}  </h3>
            {/* <h4> {singlePackage.packageName} </h4> */}

           
        </div>
    );
};

export default PackageDetails;