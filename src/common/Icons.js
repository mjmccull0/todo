import React from 'react';
import styles from './Icons.module.css';

const SearchIcon = () => (
  <span className={styles.wrapper}>
    <svg className={styles.icon} focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
      </path>
    </svg>
  </span>
)

const GridIcon = () => (
  <span className={`${styles.wrapper} ${styles.icon}`}>
    <svg viewBox="0 0 21 20">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-59.000000, -200.000000)" fill="#000000">
                <g transform="translate(56.000000, 160.000000)">
                    <path d="M14.55,60 L24,60 L24,51 L14.55,51 L14.55,60 Z M3,60 L12.45,60 L12.45,51 L3,51 L3,60 Z M14.55,49 L24,49 L24,40 L14.55,40 L14.55,49 Z M3,49 L12.45,49 L12.45,40 L3,40 L3,49 Z"></path>
                </g>
            </g>
        </g>
    </svg>
  </span>
)

const ListIcon = () => (
  <span className={`${styles.wrapper} ${styles.icon}`}>
    <svg focusable="false" viewBox="0 0 511.626 511.627">
      <g>
        <g>
          <path d="M118.771,200.999H27.406c-7.611,0-14.084,2.664-19.414,7.994C2.663,214.32,0,220.791,0,228.407v54.823
            c0,7.61,2.663,14.078,7.992,19.406c5.33,5.329,11.803,7.994,19.414,7.994h91.365c7.611,0,14.084-2.665,19.414-7.994
            c5.33-5.328,7.992-11.796,7.992-19.406v-54.823c0-7.616-2.662-14.087-7.992-19.414S126.382,200.999,118.771,200.999z"/>
          <path d="M118.771,54.814H27.406c-7.611,0-14.084,2.663-19.414,7.993C2.663,68.137,0,74.61,0,82.221v54.821
            c0,7.616,2.663,14.091,7.992,19.417c5.33,5.327,11.803,7.994,19.414,7.994h91.365c7.611,0,14.084-2.667,19.414-7.994
            s7.992-11.798,7.992-19.414V82.225c0-7.611-2.662-14.084-7.992-19.417C132.855,57.48,126.382,54.814,118.771,54.814z"/>
          <path d="M118.771,347.177H27.406c-7.611,0-14.084,2.662-19.414,7.994C2.663,360.502,0,366.974,0,374.585v54.826
            c0,7.61,2.663,14.086,7.992,19.41c5.33,5.332,11.803,7.991,19.414,7.991h91.365c7.611,0,14.084-2.663,19.414-7.991
            c5.33-5.324,7.992-11.8,7.992-19.41v-54.826c0-7.611-2.662-14.083-7.992-19.411S126.382,347.177,118.771,347.177z"/>
          <path d="M484.215,200.999H210.131c-7.614,0-14.084,2.664-19.414,7.994s-7.992,11.798-7.992,19.414v54.823
            c0,7.61,2.662,14.078,7.992,19.406c5.327,5.329,11.8,7.994,19.414,7.994h274.091c7.61,0,14.085-2.665,19.41-7.994
            c5.332-5.328,7.994-11.796,7.994-19.406v-54.823c0-7.616-2.662-14.087-7.997-19.414
            C498.3,203.663,491.833,200.999,484.215,200.999z"/>
          <path d="M484.215,347.177H210.131c-7.614,0-14.084,2.662-19.414,7.994c-5.33,5.331-7.992,11.8-7.992,19.41v54.823
            c0,7.611,2.662,14.089,7.992,19.417c5.327,5.328,11.8,7.987,19.414,7.987h274.091c7.61,0,14.085-2.662,19.41-7.987
            c5.332-5.331,7.994-11.806,7.994-19.417v-54.823c0-7.61-2.662-14.085-7.997-19.41C498.3,349.846,491.833,347.177,484.215,347.177z
            "/>
          <path d="M503.629,62.811c-5.329-5.327-11.797-7.993-19.414-7.993H210.131c-7.614,0-14.084,2.663-19.414,7.993
            s-7.992,11.803-7.992,19.414v54.821c0,7.616,2.662,14.083,7.992,19.414c5.327,5.327,11.8,7.994,19.414,7.994h274.091
            c7.61,0,14.078-2.667,19.41-7.994s7.994-11.798,7.994-19.414V82.225C511.626,74.613,508.964,68.141,503.629,62.811z"/>
        </g>
      </g>
    </svg>
  </span>
)



export { GridIcon, ListIcon, SearchIcon };
