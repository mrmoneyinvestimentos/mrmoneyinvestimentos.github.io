/* eslint-disable import/prefer-default-export */
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';
import './src/css/tailwind.css';

const $ = require('jquery');

export const onInitialClientRender = () => {
  $(document).ready(function() {
    console.log("The answer is don't think about it!");
  });
};
