import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { axios, mediastack } from "../axios";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import "./styles.css";
import NewsModal from "./NewsModal";
import defaultAxios from "axios";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  backgroundColor: "rgba(0,0,0,0.3) !important",
  color: "lightgrey !important",
  // color: theme.palette.text.primary,
  minHeight: "150px",
}));

function Dashboard({ auth }) {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const history = useHistory();
  const [favNews, setFavNews] = useState([]);
  const favourites = ["bitcoin", "cardano"];

  useEffect(() => {
    const urls = [];
    favourites.map((fav) => {
      urls.push(
        defaultAxios.get(
          `http://api.mediastack.com/v1/news?access_key=ae0baf702b65b31c4bc116657c2d6a17&keywords=${fav}&limit=6&countries=us`
        )
      );
    });
    defaultAxios.all(urls).then(
      defaultAxios.spread((...allData) => {
        let i = 0;
        allData.map((item) => {
          const temp = favNews;
          allData[i].coinName = favourites[i];
          i++;
        });
        setFavNews(allData);
      })
    );
  }, []);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="dashboard_newsBlocks">
        <Box sx={{ flexGrow: 0.8 }}>
          {/* {favourites?.map((item) => (
            <div>
              <h4>{item}</h4>
            </div>
          ))} */}

          {favNews?.map((item) => (
            <div>
              <Link
                to={{
                  pathname: "/chart",
                  state: { coinName: item?.coinName, favorites: favourites },
                }}
                style={{ textDecoration: "none" }}
              >
                <h3 style={{ color: "#fff" }}>
                  {item?.coinName.toUpperCase()}{" "}
                  <span style={{ fontSize: "12px" }}>(View Chart)</span>
                </h3>
              </Link>
              <Grid container spacing={2}>
                {item?.data.data.map((news) => (
                  <Grid item xs={6} md={4}>
                    <Item>
                      <h3>{news?.title}</h3>
                      <p style={{ margin: 0, fontSize: "14px" }}>
                        Published on: {news?.published_at.slice(0, 10)}
                      </p>
                      <a
                        href={news?.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none", color: "#4ba449" }}
                      >
                        Click for more!
                      </a>
                      <NewsModal />
                    </Item>
                  </Grid>
                ))}

                {/* <Grid item xs={6} md={4}>
              <Item>News 2</Item>
              </Grid>
              <Grid item xs={6} md={4}>
              <Item>News 3</Item>
              </Grid>
              <Grid item xs={6} md={4}>
              <Item>News 4</Item>
            </Grid> */}
              </Grid>
            </div>
          ))}
        </Box>
      </div>
    </div>
  );

  // return <div>{user ? <h1>Dashboard</h1> : history.push("/")}</div>;
}

export default Dashboard;
