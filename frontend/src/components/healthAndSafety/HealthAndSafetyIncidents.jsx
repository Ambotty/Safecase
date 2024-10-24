import React from 'react';
import { FormField } from './FormField';
import styles from './HealthAndSafetyIncidents.module.css';

const formFields = [
  { id: 'incidentType', label: 'Incident type' },
  { id: 'injuryType', label: 'Injury Type' },
  { id: 'severity', label: 'Severity' },
  { id: 'location', label: 'Location' },
  { id: 'date', label: 'Date' },
  { id: 'time', label: 'Time' }
];

export const HealthAndSafetyIncidents = () => {
  return (
    <main className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logoColumn}>
            <img 
              loading="lazy" 
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a4a70eb1ecf3d062ace217e890dd464a58f943c1fe9ce770bf2f485bec4eabf?placeholderIfAbsent=true&apiKey=b67877099f254c4f955d4b1ed8bf2e1c" 
              className={styles.logo} 
              alt="Company logo"
            />
          </div>
          <div className={styles.titleColumn}>
            <div className={styles.titleBar}>
              <img 
                loading="lazy" 
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3d1041c306f3da2f55d5e721af12923160bb7d5cec36d7dfa638d8b243649fc?placeholderIfAbsent=true&apiKey=b67877099f254c4f955d4b1ed8bf2e1c" 
                className={styles.titleIcon} 
                alt=""
              />
              <h1 className={styles.title}>health & Safety incidents</h1>
            </div>
          </div>
        </div>
      </header>

      <section className={styles.formSection}>
        <form className={styles.formContent}>
          <div className={styles.formInputs}>
            <div className={styles.inputContainer}>
              {formFields.map(field => (
                <FormField 
                  key={field.id}
                  id={field.id}
                  label={field.label}
                />
              ))}
            </div>
          </div>

          <div className={styles.descriptionColumn}>
            <div className={styles.descriptionContainer}>
              <div className={styles.textareaWrapper}>
                <label htmlFor="description" className={styles.visually-hidden}>
                  Description
                </label>
                <textarea
                  id="description"
                  placeholder="Enter Description here....."
                  className={styles.description}
                  rows={8}
                />
                <div className={styles.divider} />
              </div>
              <div className={styles.buttonGroup}>
                <button type="submit" className={styles.submitButton}>
                  Submit
                </button>
                <button type="button" className={styles.cancelButton}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};

export default HealthAndSafetyIncidents;