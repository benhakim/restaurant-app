import React from 'react';
import { images } from '../../constants';
import { SubHeading} from '../../components';

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper-reverse'>
      <img src={images.chef} alt="chef" />

    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="chef' s word" />
      <h1 className='headtext__cormorant'>What we believe in</h1>
      <div className='app__chef-content'>
      <div className='app__chef-content-quote'>
        <img src={ images.quote} alt="quote" />
        <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fugiat autem quos officiis rerum odit repudiandae, hic beatae fuga amet.</p>

      </div>
      <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque voluptatibus maxime delectus ipsum laudantium adipisci rerum provident earum illum incidunt.</p>
      </div>
      <div className='app__chef-sign'>
      <p>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={ images.sign} alt="sign" />


      </div>

    </div>
  </div>
);

export default Chef;
