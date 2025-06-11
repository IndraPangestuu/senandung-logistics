import React from "react";
import imgSection from '../../assets/hero1.jpg';
import logo from '../../assets/logo_mendatar_senandung.png';

const Section1 = () => {
  return (
    <section className="flex mt-20 px-8 gap-8 h-[580px]">
      <div className="flex-1 h-auto flex flex-col justify-end items-left">
        <img src={imgSection} alt="Image-Section" className="h-[490px] w-[380px] object-cover rounded-xl"/>
      </div>
      <div className="flex-[3] flex flex-col items-center">
        <div className="w-100">
          <img src={logo} alt="Logo-Senandung" />
        </div>
        <div className="pt-10 text-justify text-[#878787]">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore molestias officia quisquam obcaecati quam non, facere expedita fugit itaque nemo incidunt, temporibus quis reiciendis adipisci repellat explicabo, ab magnam excepturi?Hic deserunt rerum ad ipsa molestias aliquam architecto itaque nisi magnam, eius iste blanditiis, corrupti velit laudantium eveniet quis ut quibusdam mollitia asperiores. Ipsam quia voluptatum odio repudiandae? Accusamus, dignissimos?</p>
          <br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At enim perferendis fugiat voluptatum! Voluptatibus laudantium, dignissimos omnis sint illo accusantium rerum necessitatibus id totam delectus reprehenderit recusandae, aut dolore tempora. Quo commodi odit suscipit ratione. Veniam deserunt error reprehenderit exercitationem vitae repellat laborum dolorum doloribus, praesentium aut iste consequatur quam quibusdam quos, excepturi repellendus accusamus perspiciatis rem hic culpa minima!</p>
        </div>
      </div>
    </section>
  )
}

export default Section1;