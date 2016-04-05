# WebAPI_HW4
homework 4 for CSCI3800 Web API Technologies
homework 4 for CSCI3800 Web API Technologies

Simply open the postman collection and have fun. ;)

The first get request returns all movies from the collection.

The second get request returns all moves where an actor is Adam Sandler.

The first post request adds information about National Treasure to the movie collection.

***Note that you cannot add the same movie to the collection twice, so only post it once.***

The second post request allows the user to input their own movie into the collection, through header parameters.

The delete request deletes a movie from the collection. You MUST pass the uuid of the movie you wish to delete in as a header to delete the movie. To view the uuid, you can call another get request, find/copy the uuid of the movie you wish to delete, and paste it into the uuid header for the delete request.
