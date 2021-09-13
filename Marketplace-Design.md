### Riot Racer Marketplace Design Business Requirements Document

**Problem:** We have done two drops with OpenSea (the most popular NFT marketplace) and both had extensive problems. We attemped to fix 
Drop #2 by allowing people to sign up with a Google form to get on a whitelist drop. The people that made it on to the whitelist 
where told to go bid on the car they got on OpenSea and then we would accept their bid. But OpenSea had problems with their bid acceptance 
system for Matic assets and gave the wrong person the car when we clicked accept. Bottom line - we cannot use or rely on OpenSea anymore for 
drops or car distributions.

**Solution:** We need to build our own marketplace, something similar to Ticketmaster, that allows people to temporarily hold their "place in line" 
until the payment is completed.

**Summary:** We will build our own marketplace that will start out with the minimum set of features and then expand. The biggest issue that we face 
is when the drop starts there are thousands of people trying to buy 500 cars for example - and the matic blockchain cannot handle that much volume yet. 
Se we need to create a way for people to buy and then have X amount of time, say 15 mins, to pay, before the car goes back to the available pool to be 
purchased. And we need to allow them to pay on matic/polygon and on ETH mainnet. To solve this problem we will at first build a way for users to login 
and add themselves to a list for a specific car model and car class, we will then mannually assign them to specific cars, and then they will have the 
ability to pay. The system will detect that they have paid, and add them to the list of cars that needs to be transferred.

The main concern in building this is to make sure that it can handle thousands, and eventually tens of thousands, or users trying to buy a limited number 
of items.

The initial marketplace features need to include:

1. Ability for users to browse what cars are for sale, filter by Factory Model, Price (low to high, and high to low)
- source data for this should be the cars db, with internal flags allowing us to set what car numbers are for sale and when (what day/time).
- button near the image of the car for "Sign Up to Buy" that will take them to the specific page to signup for the type of care - see #2.

2. Ability for users to sign up for certain "type" of car. Type means car model and class. Each drop has 5-7 car models, and in those car models 
each model will have all seven car classes represented. For example, see this link on OpenSea to a list of all the Constellation model cars that 
have been released, you will see all seven car classes represented. Open this car, click on Properties, then click on Factory Model. 
https://opensea.io/assets/matic/0x82bbf7be0eb9a6024b7a641ba179e00812bdae53/524
- when click on "Sign Up to Buy" prompt the user to login if they are not already logged in, after login, bring them back to the same page
- show a page with the different car models available for the specific drop
- when you click on a car model, show that model with a list of car classes
- users can select only one car model (use radio buttons) and a quantity (set the quantity by the db, default to quantities of 1 or 2)
- when a set number of cars by model have been "sold out" because the maximum number of people have signed up for it, that option is grayed out
- when a user submits this process, add their UserID and ETH address they logged in with to a db table that tracks who signed up for what car

3. Once users are on the list for a specific car model and class we need a process to assign them to a specific car.

4. After users are assigned to specific cars, they need to be prompted to page. 

5. We need to detect when they pay and flag those cars as ready to be transferred to each of these users/buyers.

6. We need a process to transfer these cars to the buyers in the most efficient way possible.





