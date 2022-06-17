import React from 'react'
import styled from "./Listofitems.module.css"
import {RiArrowDropDownLine} from "react-icons/ri"

const Listofitems = () => {
  return (
    <div>
    <div className={styled.main}>
       <div className={styled.container}>
       <div className={`${styled.divs}`}>
        <div className={`${styled.eachdiv} ${styled.component1}`}>Health Resource Center</div>
        <div className={styled.healthresourcecenter}>
        <div>All Deseases</div>
        <div>All Medicines</div>
        <div>Medicines by Therapeutic Clas</div>
      </div>
        <div className={styled.eachdiv}><RiArrowDropDownLine size="20"/></div>
       </div>
       <div className={`${styled.divs} ${styled.component2}`}>
        <div className={styled.eachdiv}>Covid Essentials</div>
        <div className={styled.eachdiv}><RiArrowDropDownLine size="20"/></div>
       </div>
       <div className={styled.covidessentials}>
        <div>Covid-19 Self test kits</div>
        <div>Oxygen Cans & Concentrators</div>
        <div>Masks</div>
        <div>Sanitizers & Handwash Products</div>
        <div>Support Your Immunity</div>
        <div>Thermometer</div>
        <div>Chyawanprash</div>
      </div>
       <div className={`${styled.divs} ${styled.component3}`}>
        <div className={styled.eachdiv}>Featured</div>
        <div className={styled.eachdiv}><RiArrowDropDownLine size="20"/></div>
       </div>
       <div className={styled.mainfeatured}>
       <div  className={styled.featured} >
        <div className={styled.featuredlineheight}>
          <div>Tata 1mg Health Products</div>
          <div>Summer Essentials</div>
          <div>Trending now</div>
          <div>New Arrivals on Tata 1MG</div>
          <div>Buy More, Save More</div>
          <div>Minimum 33% Off</div>
          <div>Popular Combo Deals</div>
        </div>
        <div className={styled.verticleline}></div>
        <div className={styled.featured2}>
          <div>Deals of the Day</div>
          <div>Top Brands</div>
          <div className={styled.changecolor}>Accu-Chek</div>
          <div className={styled.changecolor}>Ensure</div>
          <div className={styled.changecolor}>Revital</div>
          <div className={styled.changecolor}>Optimum Nutrition (ON)</div>
          <div className={styled.changecolor}>Dr. Morepen</div>
          <div className={styled.changecolor}>Pediasure</div>
          <div >Top Discounts</div>
        </div>
        
      </div>
       </div>
       

{/* Vitamins Componet*/}



       <div className={`${styled.divs} `}>
        <div style={{display:"flex"}} className={styled.component4}>
        <div className={styled.eachdiv}>Vitamins & Nutrition</div>
        <div className={styled.eachdiv}><RiArrowDropDownLine size="20"/></div>
        </div>

        <div className={styled.mainvitamins}>
        <div className={styled.vitamins}>
          <div>
              <div>Vitamins & Supplements</div>
              <div className={styled.changecolor}>Multivitamins</div>
              <div className={styled.changecolor}>Vitamins A-Z</div>
              <div className={styled.changecolor}>Mineral Suplements</div>
              <div className={styled.changecolor}>Vitamin B12 & B Complex</div>
              <div>Nutritional Drinks</div>
              <div className={styled.changecolor}>Audult Daily Nutrition</div>
              <div className={styled.changecolor}>Kids Nutrition (2-15 Yrs)</div>
              <div className={styled.changecolor}>For Women</div>
              <div>Health Food & Drinks</div>
              <div className={styled.changecolor}>Green Tea & Herbal Tea</div>
              <div className={styled.changecolor}>Apple Cider Vinegar</div>
              <div className={styled.changecolor}>Healthy Snacks</div>
          </div>
          <div className={styled.vitaminsline1}></div>
          <div className={`${styled.vitamins1}`}>
              <div>Protein Supplements</div>
              <div className={styled.changecolor}>Whey Proteins</div>
              <div className={styled.changecolor}>Amino Acids</div>
              <div className={styled.changecolor}>Mass Gainers</div>
              <div className={styled.changecolor}>Workout Essentials</div>
              <div className={styled.changecolor}>Fat Burners</div>
              <div>Omega & Fish Oil</div>
              <div className={styled.changecolor}>Fish Oil</div>
              <div className={styled.changecolor}>Cod Liver Oil</div>
              <div className={styled.changecolor}>Flax Seed Oil</div>
              <div>Immunity Boosters</div>
              <div className={styled.changecolor}>Chyawanprasha</div>
              <div className={styled.changecolor}>Vitamin C</div>
              <div className={styled.changecolor}>Herbal Tees</div>
              <div className={styled.changecolor}>Autioxidant Supplements</div>
              <div className={styled.changecolor}>Ayurvedic Supplements</div>
          </div>
          <div className={styled.vitaminsline1}></div>
          <div className={`${styled.vitamins1}`}>
              <div>Specialty Supplements</div>
              <div className={styled.changecolor}>Plantbased Supplements</div>
              <div className={styled.changecolor}>Beauty Supplements</div>
              <div className={styled.changecolor}>Pre and Probiotics</div>
              <div className={styled.changecolor}>Glucosamine</div>
              <div className={styled.changecolor}>Collagen</div>
              <div className={styled.changecolor}>Antioxidants</div>
              <div className={styled.changecolor}>Biotin</div>
              <div>Weight Management</div>
              <div className={styled.changecolor}>Weight Management Herbs</div>
              <div className={styled.changecolor}>Meal Replacements</div>
              <div className={styled.changecolor}>Weight Gain</div>
          </div>
       </div>
       </div>




       </div>
       




{/* Diabetes component*/}

       <div className={`${styled.divs} `}>
        <div style={{display:"flex"}} className={styled.component5}>
        <div className={`${styled.eachdiv}`}>Diabetes</div>
        <div className={`${styled.eachdiv}`}><RiArrowDropDownLine size="20"/></div>
        </div>
     
        <div className={styled.maindiabetes}>
          <div className={styled.diabetes}>
            <div>
                <div>Devices</div>
                <div className={styled.changecolor}>Blood Glucose Monitors</div>
                <div className={styled.changecolor}>Test Strips & Lancets</div>
                <div className={styled.changecolor}>Syringes & Pens</div>
                <div>Diabetic Medicines</div>
                <div className={styled.changecolor}>Vitamins, Minerals & Antioxidants</div>
                <div className={styled.changecolor}>Homeopathy Medicines</div>
                <div className={styled.changecolor}>Ayurvedic Medicines</div>
            </div>
            <div className={styled.verticleline}></div>
            <div className={styled.diabetes1}>
                  <div>Sugar Substitutes</div>
                  <div>Diabetic Diet</div>
                  <div className={styled.changecolor}>Juices & Vinegers</div>
                  <div className={styled.changecolor}>Superfoods</div>
                  <div>Diabetic Foot Health</div>
            </div>
          </div>
        </div>
       </div>



{/*Health Care Devices Component*/}


       <div className={styled.divs}>
        <div style={{display:"flex"}} className={styled.component6}>
        <div className={styled.eachdiv}>Healthcare Devices</div>
        <div className={styled.eachdiv}><RiArrowDropDownLine size="20"/></div>
        </div>
      
      <div className={styled.maindevices}>
        <div className={styled.devices}>
          <div>
              <div>Top branch in Healthcare Devices</div>
               <div className={styled.changecolor}>Omron</div>
               <div className={styled.changecolor}>Accu-chek</div>
               <div className={styled.changecolor}>Dr. Morepen Devices</div>
               <div className={styled.changecolor}>Dr Trust</div>
               <div className={styled.changecolor}>OneTouch</div>
               <div className={styled.changecolor}>Contour</div>
               <div>Marks (N95, Surgical and more)</div>
               <div className={styled.changecolor}>Face Shield</div>
               <div className={styled.changecolor}>Surgical Masks</div>
               <div className={styled.changecolor}>=N95 Masks</div>
               <div>Oxygen Concentrators & Cans</div>
               <div>BP Monitors</div>
               <div>Nebulizers & Vaporizers</div>
          </div>
          <div className={styled.devicesline1}></div>
          <div className={styled.devices1}>
               <div>Oximeters & Pedometers</div>
               <div>Vital Signs Monitors & Wearables</div>
               <div>Weighing Scales</div>
               <div>Thermometers</div>
               <div className={styled.changecolor}>IR Thermometers</div>
               <div>Body Massager</div>
               <div>Diabetes Monitors</div>
               <div>Mobility Equipments</div>
               <div>Exercise Equipments</div>
               <div>Doctor's Corner</div>
               <div className={styled.changecolor}>Stethoscopes</div>
               <div className={styled.changecolor}>Tapes & Bandages</div>
               <div className={styled.changecolor}>Clinical Diagnostic Equipments</div>
               <div className={styled.changecolor}>Dressings & Wound Care</div>
          </div>
          <div className={styled.devicesline2}></div>
          <div className={styled.devices2}>
                <div>Supports & Braces</div>
                <div className={styled.changecolor}>Neck & Shoulder Support</div>
                <div className={styled.changecolor}>Knee & Leg Support</div>
                <div className={styled.changecolor}>Back & Abdomen Support</div>
                <div className={styled.changecolor}>Ankle & Foot Support</div>
                <div className={styled.changecolor}>Hand & Wrist Braces</div>
                <div className={styled.changecolor}>Arm & Elbow Support</div>
                <div className={styled.changecolor}>Cervical Pillows</div>
                <div className={styled.changecolor}>Compression support & sleeves</div>
                <div className={styled.changecolor}>Heel support</div>
          </div>
        </div>
      </div>
       </div>





{/*Personal care component*/ }


       <div className={styled.divs}>
        <div style={{display:"flex"}} className={styled.component7}>
        <div className={styled.eachdiv}>Personal Care</div>
        <div className={styled.eachdiv}><RiArrowDropDownLine size="20"/></div>
        </div>
       
       <div className={styled.mainpersonalcare}>
        <div className={styled.personalcare}>
          <div>
            <div>Sexual Wellness</div>
            <div className={styled.changecolor}>Condoms</div>
            <div className={styled.changecolor}>Lubricants & Massage Gels</div>
            <div className={styled.changecolor}>Persnal body massagers</div>
            <div className={styled.changecolor}>Men Performance Enhancers</div>
            <div className={styled.changecolor}>Sexual Heakth Supplements</div>
            <div>Skin Care</div>
            <div className={styled.changecolor}>Body Lotions</div>
            <div className={styled.changecolor}>Mosquito Repellents</div>
            <div className={styled.changecolor}>Lip Balm</div>
            <div className={styled.changecolor}>Acne Care</div>
            <div className={styled.changecolor}>Bath Essentials</div>
            <div className={styled.changecolor}>Facewash</div>
            <div className={styled.changecolor}>Sanitizers & Handwash</div>
            <div className={styled.changecolor}>Sunscreen</div>
          </div>
          <div className={styled.personalcareline1}></div>
          <div className={styled.personalcare1}>
            <div>Body Care</div>
            <div className={styled.changecolor}>Body & Infant Food</div>
            <div className={styled.changecolor}>Body Diapers, Wipes & more</div>
            <div className={styled.changecolor}>Nursing & Feeding</div>
            <div className={styled.changecolor}>Baby Bath Essentials</div>
            <div className={styled.changecolor}>Bavy Skin Care</div>
            <div className={styled.changecolor}>Baby Healthcare</div>
            <div className={styled.changecolor}>Baby Oral Health</div>
            <div>Hair Care</div>
            <div className={styled.changecolor}>Shampo</div>
            <div className={styled.changecolor}>Hair Conditioners</div>
            <div className={styled.changecolor}>Hair Growth Supplements</div>
            <div className={styled.changecolor}>Hair Oils</div>
            <div className={styled.changecolor}>Hair Growth Products</div>
          </div>
          <div className={styled.personalcareline2}></div>
          <div className={styled.personalcare2}>
            <div>Elderly Care</div>
            <div className={styled.changecolor}>Adult Diapers</div>
            <div className={styled.changecolor}>Bone & Joints Health</div>
            <div className={styled.changecolor}>Living & Safety Aids</div>
            <div className={styled.changecolor}>Orthopaedic Supports</div>
            <div>Women Care</div>
            <div className={styled.changecolor}>Feminine Hygiene</div>
            <div className={styled.changecolor}>Women Care Supplements</div>
            <div className={styled.changecolor}>Mother Care</div>
            <div className={styled.changecolor}>Mwenopause</div>
            <div className={styled.changecolor}>Polycystic Ovary Syndrome</div>
          </div>
          <div className={styled.personalcareline3}></div>
          <div className={styled.personalcare3}>
            <div>Men Care</div>
            <div className={styled.changecolor}>Men Grooming</div>
            <div>Oral Care</div>
            <div>Pet Care</div>
            <div className={styled.changecolor}>Pet Groomimg</div>
            <div className={styled.changecolor}>Pet Food</div>
            <div className={styled.changecolor}>Pet Health Care</div>
          </div>
        </div>
       </div>
       </div>






{/*Health Conditions Component*/}


       <div className={styled.divs}>
        <div className={styled.component8} style={{display:"flex"}}>
        <div className={styled.eachdiv}>Health Conditions</div>
        <div className={styled.eachdiv}><RiArrowDropDownLine size="20"/></div>
        </div>
       
       <div className={styled.mainhealthconditions}>
        <div className={styled.healthconditions}>
          <div>
            <div>Stomach Care</div>
            <div>Heart Care</div>
            <div>Bone, Joint Muscle Care</div>
            <div>Pain Relief</div>
            <div className={styled.changecolor}>Heating Aids</div>
            <div>Eye Care</div>
            <div className={styled.changecolor}>Eye Lubricants</div>
            <div>Ear Care</div>
            <div className={styled.changecolor}>Hearing Aid Devices</div>
          </div>
          <div className={styled.healthconditionsline1}></div>
          <div className={styled.healthconditions1}>
            <div>First Aid</div>
            <div>Liver Care</div>
            <div>Cold & Cough</div>
            <div>Fever</div>
            <div>Mentall Wellness</div>
            <div>Kidney Care</div>
            <div>Respiratory Care</div>
            <div>Piles, Fissures & Fistula</div>
            <div>Smooking Cessation</div>
            <div>Derma Care</div>
          </div>
        </div>
       </div>
       </div>

{/*Ayurveda Products component*/}


       <div className={styled.divs}>
        <div className={styled.component9} style={{display:"flex"}}>
        <div className={styled.eachdiv}>Ayurveda Products</div>
        <div className={styled.eachdiv}><RiArrowDropDownLine size="20"/></div>
        </div>
       
       <div className={styled.mainayurveda}>
        <div className={styled.ayurveda}>
          <div>
            <div>Ayurveda TopBrands</div>
            <div className={styled.changecolor}>Dabur</div>
            <div className={styled.changecolor}>Sri Sri Tattva</div>
            <div className={styled.changecolor}>Kerala Ayurveda</div>
            <div className={styled.changecolor}>Jiva Ayurveda</div>
            <div className={styled.changecolor}>Tata 1mg Herbal Supplements</div>
            <div className={styled.changecolor}>Patanjali</div>
            <div>Popular categories</div>
            <div className={styled.changecolor}>Herbal Juice</div>
            <div className={styled.changecolor}>Chyawanparash</div>
            <div className={styled.changecolor}>Ayurveda Immunity Boosters</div>
            <div className={styled.changecolor}>Explore Popular Herbs</div>
            <div className={styled.changecolor}>Herbal Supplements</div>
            </div>
            <div className={styled.ayurvedaline1}></div>
            <div className={styled.ayurveda1}>
              <div>Top Health Concerns</div>
              <div className={styled.changecolor}>Ayurvedic Respiratory Care</div>
              <div className={styled.changecolor}>Cough, Cold & Fever</div>
              <div className={styled.changecolor}>Sexual Wellness</div>
              <div className={styled.changecolor}>Bone, Joint and Muscle Care</div>
              <div className={styled.changecolor}>Stomach Care</div>
              <div className={styled.changecolor}>Diabetes Care</div>
              <div className={styled.changecolor}>Liver Care</div>
              <div className={styled.changecolor}>Mind Care</div>
              <div className={styled.changecolor}>Cardiac Care</div>
              <div>Unani Medicines</div>
              <div className={styled.changecolor}>Hamdard Unani</div>
              <div className={styled.changecolor}>AMU Dawakhana</div>
              <div className={styled.changecolor}>Rex Remedies</div>
              <div className={styled.changecolor}>Dehivi Remedies</div>
            </div>
        </div>
       </div>
       </div>



{/*Homeopathy component*/}

       <div className={styled.divs}>
        <div className={styled.component10} style={{display:"flex"}}>
        <div className={styled.eachdiv}>Homeopathy</div>
        <div className={styled.eachdiv}><RiArrowDropDownLine size="20"/></div>
        </div>
       
       <div className={styled.mainhomeopathy}>
        <div className={styled.homeopathy}>
          <div>
            <div>Homeopathy Top Brands</div>
            <div className={styled.changecolor}>SBL Homeopathy</div>
            <div className={styled.changecolor}>Dr Reckeweg</div>
            <div className={styled.changecolor}>Dr Willmar Schwabe India</div>
            <div className={styled.changecolor}>Adel Pekana</div>
            <div className={styled.changecolor}>BJAIN Homeopathy</div>
            <div className={styled.changecolor}>Bakson's</div>
            <div className={styled.changecolor}>Allen</div>
            <div className={styled.changecolor}>Wheelzal</div>
            <div className={styled.changecolor}>Dr Willmar Schwabe Germany</div>
            <div className={styled.changecolor}>Haslab</div>
            <div className={styled.changecolor}>Medisynth</div>
            <div className={styled.changecolor}>Boiron</div>
            <div className={styled.changecolor}>Bhandari</div>
            <div className={styled.changecolor}>Dr Bakshi Bakson</div>
            <div className={styled.changecolor}>Dr Batra's</div>
            <div>Homeopathy Wellness Combos</div>
          </div>
          <div className={styled.homeopathyline1}></div>
          <div className={styled.homeopathy1}>
            <div>Homeopathy Popular Categories</div>
            <div className={styled.changecolor}>Homeopathic Care for Cold & Cough</div>
            <div className={styled.changecolor}>Respiratory Wellness</div>
            <div className={styled.changecolor}>Homeopathy Covid Essentials</div>
            <div className={styled.changecolor}>Sexual Health</div>
            <div className={styled.changecolor}>Hair Care Products</div>
            <div className={styled.changecolor}>Skin Care Products</div>
            <div className={styled.changecolor}>Children's Health</div>
            <div className={styled.changecolor}>Women's Health</div>
            <div>Homeopathy Medicines</div>
            <div className={styled.changecolor}>Homeopathic Drops</div>
            <div className={styled.changecolor}>Dilutions</div>
            <div className={styled.changecolor}>Mother Tintures</div>
            <div className={styled.changecolor}>Triturations</div>
            <div className={styled.changecolor}>Bio Combinations</div>
            <div className={styled.changecolor}>Millesimal LM Potencies</div>
            <div className={styled.changecolor}>Biochemics</div>
            <div className={styled.changecolor}>Bach Flower Remedies</div>
          </div>
        </div>
       </div>
       </div>
    </div>
    </div>
    <div>
    
    </div>
    </div>

  )
}

export default Listofitems