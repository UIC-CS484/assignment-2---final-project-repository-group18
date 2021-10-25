CREATE TABLE Comments_Table (
    comments_userTableId INTEGER       REFERENCES userDetails (userTableId),
    commentId            INTEGER,
    comments_data        TEXT,
    comments_newsId      VARCHAR (500) 
);
