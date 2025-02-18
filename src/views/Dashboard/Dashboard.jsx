import { useSelector } from "react-redux";
import { Paper, Grid, Typography, Box, Zoom } from "@material-ui/core";
import { trim } from "../../helpers";
import "./dashboard.scss";
import { Skeleton } from "@material-ui/lab";

function Dashboard() {
  // Use marketPrice as indicator of loading.
  const isAppLoading = useSelector(state => !state.app?.marketPrice ?? true);
  const marketPrice = useSelector(state => {
    return 0; //state.app.marketPrice;
  });
  const circSupply = useSelector(state => {
    return 0; //state.app.circSupply;
  });
  const totalSupply = useSelector(state => {
    return 0; //state.app.totalSupply;
  });
  const marketCap = useSelector(state => {
    return 0; //state.app.marketCap;
  });

  return (
    <div id="dashboard-view">
      <Grid container spacing={1} className="top-row-data">
        <Grid item lg={4} md={4} sm={3} xs={5} className="olympus-card">
          <Zoom in={true}>
            <Paper className="ohm-card">
              <Typography variant="h6">Price</Typography>
              <Typography variant="h5">
                {isAppLoading ? <Skeleton width="100px" /> : `$${trim(marketPrice, 2)}`}
              </Typography>
            </Paper>
          </Zoom>
        </Grid>

        <Grid item lg={4} md={4} sm={4} xs={7}>
          <Zoom in={true}>
            <Paper className="ohm-card">
              <Typography variant="h6">Market Cap</Typography>
              <Typography variant="h5">
                {isAppLoading ? (
                  <Skeleton width="160px" />
                ) : (
                  new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    maximumFractionDigits: 0,
                    minimumFractionDigits: 0,
                  }).format(marketCap)
                )}
              </Typography>
            </Paper>
          </Zoom>
        </Grid>

        <Grid item lg={4} md={4} sm={5} xs={12}>
          <Zoom in={true}>
            <Paper className="ohm-card">
              <Typography variant="h6">Supply (circulating/total)</Typography>
              <Typography variant="h5">
                {isAppLoading ? (
                  <Skeleton width="250px" />
                ) : (
                  `${new Intl.NumberFormat("en-US", {
                    maximumFractionDigits: 0,
                    minimumFractionDigits: 0,
                  }).format(circSupply)}
                    /
                    ${new Intl.NumberFormat("en-US", {
                      maximumFractionDigits: 0,
                      minimumFractionDigits: 0,
                    }).format(totalSupply)}`
                )}
              </Typography>
            </Paper>
          </Zoom>
        </Grid>
      </Grid>

      <Box className="main-data-area">
        <Grid container spacing={2} className="data-grid">
          <Grid item lg={4} sm={12}>
            <div className="dune-card">
              <iframe
                frameBorder="0"
                loading="lazy"
                src="https://duneanalytics.com/embeds/25282/51827/ab942a0a-8b34-43cb-9f9f-ef1429d7ee76"
                title="Total Value Staking"
              />
            </div>
          </Grid>

          <Grid item lg={4} sm={12}>
            <div className="dune-card">
              <iframe
                frameBorder="0"
                loading="lazy"
                src="https://duneanalytics.com/embeds/25300/51969/e861a333-11eb-4198-a10f-9b5755843332"
                title="Market value of Treasury"
              />
            </div>
          </Grid>

          <Grid item lg={4} sm={12}>
            <div className="dune-card">
              <iframe
                frameBorder="0"
                loading="lazy"
                src="https://duneanalytics.com/embeds/77496/154180/badfb777-1526-4adc-9c50-1822d305578e"
                title="Risk Free Value of Treasury"
              />
            </div>
          </Grid>

          <Grid item lg={4} sm={12}>
            <div className="dune-card">
              <iframe
                frameBorder="0"
                loading="lazy"
                src="https://duneanalytics.com/embeds/26511/53808/f6b6538b-ec46-4aad-8857-f88255986dd8"
                title="Total Value Staking"
              />
            </div>
          </Grid>

          <Grid item lg={4} sm={12}>
            <div className="dune-card">
              <iframe
                frameBorder="0"
                loading="lazy"
                src="https://duneanalytics.com/embeds/36698/72894/7eaad929-5e86-4cb3-aa9b-961fa0500bdf"
                title="Holders"
              />
            </div>
          </Grid>

          <Grid item lg={4} sm={12}>
            <div className="dune-card">
              <iframe
                frameBorder="0"
                loading="lazy"
                src="https://duneanalytics.com/embeds/77496/154187/01b7c8e6-f568-4c52-85ea-fc91b5935818"
                title="APY Over Time"
              />
            </div>
          </Grid>

          <Grid item lg={6} sm={12}>
            <div className="dune-card">
              <iframe
                frameBorder="0"
                loading="lazy"
                src="https://duneanalytics.com/embeds/189821/354539/65a6d19f-4321-47cd-83db-ae2a7316ff45"
                title="OHM Stakers"
              />
            </div>
          </Grid>

          <Grid item lg={6} sm={12}>
            <div className="dune-card">
              <iframe
                frameBorder="0"
                loading="lazy"
                src="https://duneanalytics.com/embeds/25375/51990/5330f13e-30ef-4313-a560-684fdb022a0c"
                title="Runway Available"
              />
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Dashboard;
