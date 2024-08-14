import React from 'react'
import "./blog.css"
import bigpg from "../assets/bigbg.png"
import smallbg from "../assets/smallbg.png"
import { FaArrowRight } from "react-icons/fa";


const data = [
    {
        img: smallbg ,  
        date:"Feb 13, 2024- Development" , 
        para:"The evolution of design thinking in development"
    } , 
    {
        img: smallbg ,  
        date:"Feb 13, 2024- Development" , 
        para:"The evolution of design thinking in development"
    } , 
    {
        img: smallbg ,  
        date:"Feb 13, 2024- Development" , 
        para:"The evolution of design thinking in development"
    } , 
]

function BlogSection() {
  return (
    <div className='blogwrrap'>

        <div className="blogcont">

          <div className="bloggtop">

            <p className='blogtag'>Our Blog</p>
          <h3>Articles & Resources</h3>
          </div>

          <div className="articles">

            {/* left sidde  */}
            <div className="articlleft">

                <img src={bigpg} alt="" />
                 

                    <span>Feb 13, 2024-Marketing Strategy</span>
                    <p>Explore the transformative impact of artificial intelligence on modern marketing strategies.</p>
                    
                 
            </div>

            <div className="articleright">

           {
            data.map((d , i)=>(
                <div key={i} className="singelblog">

                    <img src={d.img} alt="" />

                    <div className='sinblogleft'>
                        <p className='blodate'>{d.date}</p>
                        <p className='blparap'>{d.para}</p>

                    </div>

                </div>
            ))
           }


            </div>
          </div>

          <button className='viewallbtns'><span>View All Blogs</span> <FaArrowRight />  </button>



        </div>

    </div>
  )
}

export default BlogSection