/* eslint-disable import/prefer-default-export */
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';

const React = require('react');

export const onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  setHeadComponents([
    <script
      src="https://code.jquery.com/jquery-3.4.1.min.js"
      integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
      crossOrigin="anonymous"
    />
  ]);
  setHeadComponents([<script src="https://source.zoom.us/zoom-meeting-1.7.9.min.js" />]);
};
