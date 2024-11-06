import React from 'react';
import styles from './HealthAndSafetyIncidents.module.css';

export const FormField = ({ label, id }) => {
  return (
    <>
      <label htmlFor={id} className={styles.formField}>{label}</label>
      <select id={id} className={styles.selectField} aria-label={label}>
        <option value="">Select here</option>
      </select>
      <div className={styles.divider} />
    </>
  );
};

