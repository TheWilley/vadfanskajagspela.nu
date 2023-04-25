# vadfanskajagspela.nu
<p align="center">
  <img width="460" src="./assets/images/favicon.png">
</p>
<p align="center"> A website to generate a random game to play - <a href="http://www.vadfanskajagspela.nu"> vadfanskajagspela.nu </a></p>

## Adding items to list
You can make a pull request to add items to the list. The list is located in the file `static/data.json`. The file is a JSON file with the following structure:
```json
{
    "url": "https://store.steampowered.com/app/277500",
    "name": "Farming World",
    "image": "https://steamcdn-a.akamaihd.net/steam/apps/277500/header.jpg",
    "price": "paid",
    "genres": "Casual,Indie,Simulation"
}
```

Explanation:
- The `url` is the url to the game, and must be a valid steam url (games from other platforms will not be added)
- The `name` is the name of the game
- The `image` is the url to the image of the game
- The `price` is either `paid` or `free`
- The `genres` is a comma separated list of genres

OBS:
* Please make sure that the game is not already in the list before adding it
* Pull request names must follow the syntax `Add <game name>`
* The commit message must follow the syntax `feat: Add <game name>`

