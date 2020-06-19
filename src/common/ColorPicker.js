import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import styles from './ColorPicker.module.css';

const ColorPicker = (props) => {
  const [color, setColor] = useState(props.color);
  const [displayPicker, setDisplayPicker] = useState(false);

  const handleClick = () => {
    setDisplayPicker(!displayPicker);
  }

  const handleClose = () => {
    setDisplayPicker(false);
  }

  const handleChange = (color) => {
    setColor(color.rgb);
    props.change(color);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.swatch} onClick={ handleClick }>
        <div
        className={styles.color}
        style={{background: `rgba(${color.r}, ${color.g}, ${color.b}`}} />
      </div>
      { displayPicker
        ? <div className={styles.popover}>
            <div className={styles.cover} onClick={ handleClose }/>
            <SketchPicker color={ color } onChange={ handleChange } />
          </div> 
        : null
      }

    </div>
  )
}

ColorPicker.defaultProps = {
  color: { r: '255', g: '255', b:'255', a: '1' }
};


export default ColorPicker;
