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
  color: theme.palette.text.secondary,
  height: "150px",
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
          `http://api.mediastack.com/v1/news?access_key=ae0baf702b65b31c4bc116657c2d6a17&keywords=${fav}&limit=5&countries=us`
        )
      );
    });
    console.log(urls);
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

    // mediastack.get(`keywords=${fav}&limit=5&countries=us`).then((res) => {
    //   const favObj = { name: fav, content: res.data.data };
    //   const temp = favNews;
    //   setFavNews([...temp, favObj]);
    // });
    // axios
    //   .get()
    //   .then((res) => {
    //     res.map((fav) => {
    //       mediastack.get(`keywords=${fav}&limit=5&countries=us`).then((res) => {
    //         const favObj = { fav: res.data.data };
    //         setFavNews([...favNews, favObj]);
    //       });
    //     });
    //   })
    //   .catch();
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
              <h4>
                <Link
                  to={{
                    pathname: "/chart",
                    state: { coinName: item?.coinName, favorites: favourites },
                  }}
                  // style={linkStyle}
                >
                  {item?.coinName}
                </Link>
              </h4>
              <Grid container spacing={2}>
                {item?.data.data.map((news) => (
                  <Grid item xs={6} md={4}>
                    <Item>
                      <p>{news?.title}</p>
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
