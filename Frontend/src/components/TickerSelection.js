import React, { useEffect, useState } from "react";
import axios from "axios";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button } from "@material-ui/core";
import "./styles.css";

const TickerSelection = () => {
  const [tickers, setTickers] = useState([]);
  const [checked, setChecked] = useState([]);
  const [coinData, setCoinData] = useState([]);
  const [favourites, setFavourites] = useState([]);

  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc"
      )
      .then((res) => {
        setTickers(res.data.slice(0, 50));
        // console.log(tickers);
      })
      .catch((err) => console.log(err.response));

    // axios.get().then().catch() GET FAVOURITES ON COMPONENT LOAD then setFavourites
  }, []);

  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
    // console.log(checked);
  };

  const handleSubmit = () => {
    const temp = [];
    checked.map((coin) => {
      const newCoin = { name: coin.name, id: coin.id, symbol: coin.symbol };
      if (!favourites.some((item) => item.name === coin.name))
        temp.push(newCoin);
    });
    setFavourites([...favourites, ...temp]);
    setChecked([]);
    const temp2 = JSON.stringify([...favourites, ...temp]);
    console.log(favourites, temp2);
  };

  const resetFavourites = () => {
    setFavourites([]);
  };

  return (
    <div className="tickers">
      <h1>Select your favourite Crypto Currencies!</h1>
      <ThemeProvider theme={theme}>
        <div className="tickers__lists">
          <div className="tickers__all">
            <List
              dense
              sx={{
                width: "100%",
                maxWidth: 360,
                // bgcolor: "background.paper",
                bgcolor: "rgba(0,0,0,.2)",
                // border: "1px solid grey",
              }}
            >
              {tickers?.map((coin) => {
                const labelId = `checkbox-list-secondary-label-${coin.id}`;
                return (
                  <ListItem
                    style={{ marginBottom: "10px" }}
                    key={coin.id}
                    secondaryAction={
                      <Checkbox
                        edge="end"
                        onChange={() => handleToggle(coin)}
                        checked={checked.indexOf(coin) !== -1}
                        inputProps={{ "aria-labelledby": coin.id }}
                      />
                    }
                    disablePadding
                  >
                    <ListItemButton>
                      <ListItemAvatar>
                        <Avatar
                          alt={`Avatar n°${coin.id + 1}`}
                          src={coin.image}
                        />
                      </ListItemAvatar>
                      <ListItemText id={labelId} primary={coin.name} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
            <Button
              onClick={handleSubmit}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add to favourites!
            </Button>
          </div>
          <div className="tickers__favorites">
            <h3>Your favourites:</h3>
            {favourites.map((coin) => (
              <h4>{coin.name}</h4>
            ))}
            <Button
              onClick={resetFavourites}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Reset
            </Button>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default TickerSelection;
