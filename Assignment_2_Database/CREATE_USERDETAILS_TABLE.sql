

CREATE TABLE userDetails (
    username     NVARCHAR (100),
    userTableId  INTEGER        PRIMARY KEY
                                UNIQUE,
    user_emailID NVARCHAR (500),
    password     NVARCHAR (500),
    salt         INTEGER,
    dob          VARCHAR (100) 
);
