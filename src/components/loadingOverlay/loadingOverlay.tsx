import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './styles.module.scss';
import { Props } from './types';

export const LoadingOverlay = ({ message }: Props) => {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon="spinner" className={styles.icon} />
      <div className={styles.message}>{message}</div>
    </div>
  );
};
