# Draw-Royale

A cross-platform client similar to [scribbl.io](https://skribbl.io/).

## Plans and Additional features

- [ ] Rooms
    - [ ] Routes for creating and giving custom ids to each room.
    - [ ] Adding and removing players from rooms
    - [ ] Option to replay in the same room
    - [ ] Permanant rooms?

- [ ] Game and Canvas
    - [ ] Handling and storing canvas information
    - [ ] Add different game types and make code generalized to support different game modes.
    - [ ] Add options to change game options like time, no. of players etc.
- [ ] Sockets
    - [ ] Making seperate socket room for each game and adding the players in it.
    - [ ] Transmit Canvas to all players via the sockets for that room, to display changes real time.
    - [ ] Option to chat in real time.
- [ ] Authentication

Client Code: [Draw-Royale-App](https://github.com/dhruv1294/Draw-Royale-App/)

## Getting Started

This project uses but not limited to, Typescript, Express, Mongoose and Sockets. You can refer to the documentation of each with the following links.

[Typescript](https://www.typescriptlang.org/docs/)

[Express](https://expressjs.com/en/5x/api.html)

[Mongoose](https://mongoosejs.com/docs/api.html)

[Socket.io](https://socket.io/docs/)

## Contributing
 - Fork and Clone the repository and add marmikupadhyay/Draw-Royale-Server as remote upstream.
 - Create new branch for features.
 - Strictly follow the commit conventions mentioned [here](http://karma-runner.github.io/latest/dev/git-commit-msg.html).
 - Pull rebase latest changes from upstream before pushing your code or creating a new feature branch.
 - Send a PR to marmikupadhyay/Draw-Royale-Server for review and merging

**NOTE:**
Never push directly to main repository (upstream). Only push to your forked repo (origin) and send a pull request to the main repository

## About DWoC

<a href="url"><img src="https://camo.githubusercontent.com/1ba815f1289125317c999a059ec95bfa5cba3894/68747470733a2f2f696d6775722e636f6d2f544c78357273762e706e67" height="180" width="550"> </a>

DWoC is a winter long program organised by [Delta Force](https://delta.nitt.edu/), the coding club of NIT Trichy. With an aim to support and improve the culture of open source software around us, this serves as a platform for young student developers (or even starters) to hone their technical skills by working on projects of their interests. We hope this encourages collabrative experiences and allows students from all backgrounds to contribute to quality technical projects from diverse fields. 
For more information, visit [DWoC](https://dwoc.io/)


## License

MIT License

Copyright (c) 2021 Draw Royale

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.