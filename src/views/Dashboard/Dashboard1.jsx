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
                src="https://duneanalytics.com/embeds/188698/352348/246d0690-f887-497c-8208-7203ac9f5673"
                title="Total Value Staking"
              />
            </div>
          </Grid>

          <Grid item lg={4} sm={12}>
            <div className="dune-card">
              <iframe
                frameBorder="0"
                loading="lazy"
                src="https://duneanalytics.com/embeds/188730/352339/e62888ef-aed2-43dd-9e73-e8e418c8c034"
                title="Market value of Treasury"
              />
            </div>
          </Grid>

          <Grid item lg={4} sm={12}>
            <div className="dune-card">
              <iframe
                frameBorder="0"
                loading="lazy"
                src="https://duneanalytics.com/embeds/188758/352380/95517d96-ebdf-44a3-a0d0-82d6a8599fcd"
                title="Risk Free Value of Treasury"
              />
            </div>
          </Grid>

          <Grid item lg={4} sm={12}>
            <div className="dune-card">
              <iframe
                frameBorder="0"
                loading="lazy"
                src="https://duneanalytics.com/embeds/188698/352508/cb45d9fa-ccdd-4b92-845f-57156dcddd90"
                title="Total Value Staking"
              />
            </div>
          </Grid>

          <Grid item lg={4} sm={12}>
            <div className="dune-card">
              <iframe
                frameBorder="0"
                loading="lazy"
                src="https://duneanalytics.com/embeds/188810/352516/1accba9c-cab4-436f-af3c-229c9d63785c"
                title="Holders"
              />
            </div>
          </Grid>

          <Grid item lg={4} sm={12}>
            <div className="dune-card">
              <iframe
                frameBorder="0"
                loading="lazy"
                src="https://duneanalytics.com/embeds/188750/352366/8aa4dfa0-6261-4e81-8a91-9f065bd0ea08"
                title="APY Over Time"
              />
            </div>
          </Grid>

          <Grid item lg={6} sm={12}>
            <div className="dune-card">
              <iframe
                frameBorder="0"
                loading="lazy"
                src="https://duneanalytics.com/embeds/188697/352375/49910501-6506-490b-abd1-bf5d09bad5d2"
                title="OHM Stakers"
              />
            </div>
          </Grid>

          <Grid item lg={6} sm={12}>
            <div className="dune-card">
              <iframe
                frameBorder="0"
                loading="lazy"
                src="https://duneanalytics.com/embeds/188697/352374/50e6b1b2-e518-47d8-8439-cea049a87862"
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
