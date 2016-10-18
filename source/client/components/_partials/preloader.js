import React from 'react';
import local from './_styles';

/**
  *
  * Partial - preloader
  *
  * @param none
  *
  * @return react component
  */


const images = process.env.NODE_ENV === 'production' ? 'images' : `http://127.0.0.1:9095/static/images`;

export default () => (
  <div className={local.showbox}>
    <div className={local.loader}>
      <svg className={local.circular} viewBox="25 25 50 50">
      <circle className={local.path} cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10"/>
    </svg>
  </div>
</div>
);
