import { Button, Card } from 'components';
import { MainLayout } from 'layouts';
import { useAuthStore } from 'store';

import styles from './styles.module.scss';

export const SettingsPage = () => {
  const { logOut } = useAuthStore();

  return (
    <MainLayout showNavbar label="Settings">
      <Card className={styles.card1}>
        <Card className={styles.card2}>
          <Card className={styles.card3} />
        </Card>
      </Card>
      <Button label="Sign Out" onClick={logOut} className={styles.signOutBtn} />
    </MainLayout>
  );
};
