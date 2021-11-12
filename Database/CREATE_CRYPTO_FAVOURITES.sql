CREATE TABLE cryptoFavourites (
    crypto_Id              VARCHAR (500),
    favourites_userTableId INTEGER        REFERENCES userDetails (userTableId),
    crypto_ticker          NVARCHAR (100),
    crypto_name            NVARCHAR (400) 
);
