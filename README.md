# FantanoApi

### Introduction
Api database based off Anthony Fantano's music reviews. Data includes artists, album name, and scores for each respective album. Anthony Fantano, forever!

### Environment


Postgres
You will need postgres installed. If you haven't installed it already, please download and install the PostgresApp.

Create a database for this project by running:

    echo "CREATE DATABASE fantano;" | psql

Installing Dependencies and Startup

To install dependencies:

    yarn

To run migrations and set up the database:

    yarn migrate

To roll back migrations

    yarn rollback

To run tests:

    yarn test

To run the app:

    yarn start
    
To run the app and refresh after each save:

    yarn dev
    
To run the test environment, please refer to:
    
    http://localhost:4000/graphql
    
### Listing Reviews
You can list all reviews with the follow commands:

          {
            Fantanos{
              ARTISTS
              ALBUM_TITLE
              SCORE
            }
          }
        
You can list some reviews with the follow commands:

          {
            Fantano(artist:"Kendrick"){
              ARTISTS
              ALBUM_TITLE
              SCORE
            }
          }

### Adding Reviews

Adding Reviews
You can add reviews with the follow commands:

          mutation{
            addReview(artist: "Ko Gang", album: "Love Letter", score:"10"){
              ARTISTS
              ALBUM_TITLE
              SCORE
            }
          }
        
### Editing Reviews

Editing Reviews
You can edit Album Titles with the follow commands:

          mutation{
            editTitle(originalName:"Toxicity" newName:"Swagcity"){
              ARTISTS
              ALBUM_TITLE
              SCORE
            }
          }
        
You can edit Artists with the follow commands:

            mutation{
              editArtist(originalName:"DJ Khaled" newName:"DJ Terrible"){
                ARTISTS
                ALBUM_TITLE
                SCORE
              }
            }
          
You can edit Album Score with the follow commands:

              mutation{
                editScore(album:"To Pimp A Butterfly" newScore:"Infinity"){
                  ARTISTS
                  ALBUM_TITLE
                  SCORE
                }
              }
              
### Removing Reviews
Removing Reviews
You can remove reviews based off album titles with the follow commands:

          mutation{
            deleteReview(name:"Dummy Boy"){
              ARTISTS
              ALBUM_TITLE
              SCORE
            }
          }
          
### Credits

Credits to Reddit User /u/Opst3 for compiling the data.
Credits to Anthony Fantano, aka TheNeedleDrop, for his contribution as a music critic.

Anthony Fantano, Forever!
