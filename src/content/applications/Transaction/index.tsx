import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';
import Footer from 'src/components/Footer';

import Transactions from './Transactions';

function ApplicationsTrans() {
  return (
    <>
      <Helmet>
        <title>Transaction - Management</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <Transactions />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default ApplicationsTrans;
