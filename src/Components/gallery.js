import React from "react";
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
function Gallery()
{
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return(
        <>
        <div className="mt-5 d-block d-md-none" style={{alignItems: 'center', justifyContent: 'center',textAlign:"center" }}>
       <LightGallery
                onInit={onInit}
                plugins={[lgThumbnail, lgZoom]}
            >
              <a href="./beach-camping-balapitiya1.jpg">
                    <img className=" m-1"  alt="beach-wild-camping-gallery" src="./beach-camping-balapitiya1.jpg" style={{height:"100px",width:"100px"}} />
                </a>
                <a href="./beach-camping-balapitiya2.jpg">
                    <img className=" m-1"  alt="beach-wild-camping-gallery" src="./beach-camping-balapitiya2.jpg" style={{height:"100px",width:"100px"}} />
                </a>
                
                <a href="./madu-river-safari1.jpg">
                    <img className=" m-1"  alt="beach-wild-camping-gallery" src="./madu-river-safari1.jpg" style={{height:"100px",width:"100px"}} />
                </a>
                
                <a href="./madu-river-safari2.jpg">
                    <img className=" m-1"  alt="beach-wild-camping-gallery" src="./madu-river-safari2.jpg" style={{height:"100px",width:"100px"}} />
                </a>
                <a href="./wild-camping-madoowa1.jpg">
                    <img className=" m-1"  alt="beach-wild-camping-gallery" src="./wild-camping-madoowa1.jpg" style={{height:"100px",width:"100px"}} />
                </a>
                <a href="./wild-camping-madoowa2.jpg">
                    <img className=" m-1"  alt="beach-wild-camping-gallery" src="./wild-camping-madoowa2.jpg" style={{height:"100px",width:"100px"}} />
                </a>
                <a href="./madu-river-safari2.jpg">
                    <img className=" m-1"  alt="beach-wild-camping-gallery" src="./madu-river-safari3.jpg" style={{height:"100px",width:"100px"}} />
                </a>
                <a href="./beach-camping-balapitiya3.jpg">
                    <img className="m-1"  alt="beach-wild-camping-gallery" src="./beach-camping-balapitiya3.jpg" style={{height:"100px",width:"100px"}} />
                </a>
                <a href="./madu-river-safari4.jpg">
                    <img className="m-1"  alt="beach-wild-camping-gallery" src="./madu-river-safari4.jpg" style={{height:"100px",width:"100px"}} />
                </a>
               </LightGallery>
            </div>

            < div className=" mt-5 d-none d-md-block" style={{alignItems: 'center', justifyContent: 'center',textAlign:"center" }}>
               <LightGallery
                onInit={onInit}
                plugins={[lgThumbnail, lgZoom]}
            >
                <a href="./beach-camping-balapitiya1.jpg">
                    <img className=" m-1"  alt="beach-wild-camping-gallery" src="./beach-camping-balapitiya1.jpg" style={{height:"220px",width:"220px"}} />
                </a>
                <a href="./beach-camping-balapitiya2.jpg">
                    <img className=" m-1"  alt="beach-wild-camping-gallery" src="./beach-camping-balapitiya2.jpg" style={{height:"220px",width:"220px"}} />
                </a>
                
                <a href="./madu-river-safari1.jpg">
                    <img className=" m-1"  alt="beach-wild-camping-gallery" src="./madu-river-safari1.jpg" style={{height:"220px",width:"220px"}} />
                </a>
                
                <a href="./madu-river-safari2.jpg">
                    <img className=" m-1"  alt="beach-wild-camping-gallery" src="./madu-river-safari2.jpg" style={{height:"220px",width:"220px"}} />
                </a>
                <a href="./wild-camping-madoowa1.jpg">
                    <img className=" m-1"  alt="beach-wild-camping-gallery" src="./wild-camping-madoowa1.jpg" style={{height:"220px",width:"220px"}} />
                </a>
                <a href="./wild-camping-madoowa2.jpg">
                    <img className=" m-1"  alt="beach-wild-camping-gallery" src="./wild-camping-madoowa2.jpg" style={{height:"220px",width:"220px"}} />
                </a>
        </LightGallery>
            </div>
           
        </>
    )
}

export default Gallery;