import React from "react";
import { Bounce } from "react-reveal";
function Location()
{
    return(
        <>
        <div className="container col-12 d-block d-md-none">
        <h3 style={{textAlign:"center",fontFamily:"cursive"}}>Find our Locations</h3>
            <div className="row">
            <div className="col-12">
                  <h4 style={{textAlign:"center",fontFamily:"cursive"}}>Beach Camping Balapitiya</h4> 
                  <p style={{textAlign:"justify"}}>Nestled in the serene coastal town of Balapitiya, Beach Camping offers a tranquil escape with golden sands and rhythmic waves. 
                    Experience nature's embrace under the stars at this idyllic retreat.</p> 
                </div>
                <div className="col-12 mb-2">
                <Bounce top duration={4000}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d507338.6329286433!2d79.67035648292084!3d6.574185331597775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d6.2829383!2d80.03618999999999!5e0!3m2!1sen!2slk!4v1702456962584!5m2!1sen!2slk" 
                width="100%" height="300" style={{boder:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </Bounce>
                </div>
                <div className="col-12 ">
                  <h4 style={{textAlign:"center",fontFamily:"cursive"}}>Wild Camping Maduwa</h4>  
                  <p style={{textAlign:"justify"}}>Maduwa offers an enchanting wild camping experience. Nestled amidst nature's embrace, it invites adventure seekers to immerse themselves in serene landscapes 
                    and embrace the thrill of outdoor living.</p>
                </div>
                <div className="col-12 ">
                <Bounce top duration={4000}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d126901.85416340639!2d79.97531435293165!3d6.305322331623931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3ae181b8e2dc26b7%3A0xfb8391afcd818892!2sPanangama%2C%20Madhuwa%2C%20Madhuwa%20Rd%2C%20Balapitiya%2080550!3m2!1d6.3053288!2d80.0577163!5e0!3m2!1sen!2slk!4v1702456826035!5m2!1sen!2slk" 
                width="100%" height="300" style={{boder:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> 
                 </Bounce> 
                </div>
            </div>
        </div>

        <div className="container col-12 d-none d-md-block" style={{transform:"translateY(-10%)"}} >
            <h3 style={{textAlign:"center",fontFamily:"cursive"}}>Find our Locations</h3>
            <div className="row mt-4">
                <div className="col-md-3">
                <Bounce top duration={4000}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d507338.6329286433!2d79.67035648292084!3d6.574185331597775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d6.2829383!2d80.03618999999999!5e0!3m2!1sen!2slk!4v1702456962584!5m2!1sen!2slk" 
                width="100%" height="300" style={{boder:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                 </Bounce>
                </div>
                <div className="col-md-3">
                  <h4 style={{fontFamily:"cursive"}}>Beach Camping Balapitiya</h4> 
                  <p style={{textAlign:"justify"}}>Nestled in the serene coastal town of Balapitiya, Beach Camping offers a tranquil escape with golden sands and rhythmic waves. 
                    Experience nature's embrace under the stars at this idyllic retreat.</p> 
                </div>
                <div className="col-md-3">
                <Bounce top duration={4000}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d126901.85416340639!2d79.97531435293165!3d6.305322331623931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3ae181b8e2dc26b7%3A0xfb8391afcd818892!2sPanangama%2C%20Madhuwa%2C%20Madhuwa%20Rd%2C%20Balapitiya%2080550!3m2!1d6.3053288!2d80.0577163!5e0!3m2!1sen!2slk!4v1702456826035!5m2!1sen!2slk" 
                width="100%" height="300" style={{boder:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>  
                 </Bounce>
                </div>
                <div className="col-md-3">
                  <h4 style={{fontFamily:"cursive"}}>Wild Camping Maduwa</h4>  
                  <p style={{textAlign:"justify"}}>Maduwa offers an enchanting wild camping experience. Nestled amidst nature's embrace, it invites adventure seekers to immerse themselves in serene landscapes 
                    and embrace the thrill of outdoor living.</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default Location;