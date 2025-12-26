import React from "react";
import Articals from "./articals";

function Component6()
{
    return(
        <>
        <div className="container mt-5">
        <h3 style={{textAlign:"center",fontFamily:"cursive"}}>Read News & Articals</h3>
          <div className="row mt-3">
          <div className="col-12 col-md-6 mb-2">
          <Articals heading="Balapitiya Beach" para1="Balapitiya Beach is situated in Ambalangoda in Sri Lanka. Simply put this is a very stunning beach that could swipe your feet away. This is a not to miss traveler’s destination and even a quiet
           famous one among the tourists and the locals." para2="Balapitiya Beach is situated in the Southern Province in Sri Lanka. It is 90 kilometers away from Colombo and 18 kilometers away from the Bentota beach. There are many accommodations in the area in which
            you may stay for the day and also remind the beach is so soothing that you 
           want to stay here the whole day." path="./image18.jpg"/>
          </div>
          <div className="col-12 col-md-6">
          <Articals heading="Madu River & Maduwa Island" para1="The river names Madu is an exciting place that is full of ultimate biodiversity. This fascinating river belongs to the district of Galle. And it flows between the two villages named
           Balapitiya and Karandeniya." para2="This river is famous not only among the Sri Lankan tourists but also among foreigners too. People come here for various purposes. Some people visit and look around while a large number of travelers visit this 
           place to see the birds and butterflies. Some people like to ride a boat or searching for fish. 
           Students supposed to explore the botanical and zoological system. Whatever people meant to be, everyone will go back with satisfaction." path="./image19.jpg"/>
          </div>
          </div>
        </div>
        </>
    )
}
export default Component6