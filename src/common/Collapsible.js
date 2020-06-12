import React from 'react';
import styles from 'common/Collapsible.module.css';
import ArrowButton from 'common/ArrowButton';

const Collapsible = ({open, header, section}) => {
  const [expanded, setExpanded] = React.useState(open);
  return (
    <div className={expanded ? 'open' : 'close'}>
      <div className={styles.header_container}>
        <div className={styles.header}>
          {header}
          <ArrowButton
            className={styles.toggle}
            direction={expanded ? 'up' : 'down'}
            onClick={() => setExpanded(!expanded)}
          />
        </div>
      </div>
      {expanded &&
        <>
         <div className={styles.section}>
           {section}
         </div>
        </>
      }
    </div>
  );
}

export default Collapsible;
