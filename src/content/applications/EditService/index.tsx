import { Helmet } from 'react-helmet-async';
// import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid, Container, Button, CircularProgress } from '@mui/material';
import Footer from 'src/components/Footer';
import Sidebar from 'src/layouts/SidebarLayout/Sidebar';
import { useContext } from 'react';
import { NavLink as RouterLink, useNavigate, useParams } from 'react-router-dom';
import { SidebarContext } from 'src/contexts/SidebarContext';
import PageHeader from './PageHeader';
import EditService from './Edit';
import { Service } from 'src/content/applications/Services/Services';
import { useGetServiceByIdQuery, useUpdateServiceMutation } from 'src/generated';
// import { Props } from 'react-apexcharts';

// import Vouchers from './Vouchers';
// eslint-disable-next-line @typescript-eslint/no-redeclare

function ApplicationsEditService() {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const { data, loading, error } = useGetServiceByIdQuery({
    variables: { id: parseInt(serviceId) }
  });
  if (loading) return <CircularProgress />;


  return (
    <>
    <Helmet>
      <title>Edit Service</title>
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
            {/* Loading check customer , nho check null */}
            {data && data.laundry_service_service.length > 0 ? (
              // user by id only get one => get at index 0
              <EditService service={data.laundry_service_service[0]} />
            ) : (
              <>
                <div>No Service Found</div>
                <Button
                  className="btn1"
                  disableRipple
                  onClick={() => navigate("/dashboards/service")}
                  sx={{ mt: { xs: 2, md: 0 } }}
                  variant="contained"
                >
                  Back
                </Button>
              </>
            )}
          </Grid>
      </Grid>
    </Container>
    <Footer />
  </>
  );
}

export default ApplicationsEditService;
function setFile(arg0: File): void {
  throw new Error('Function not implemented.');
}

