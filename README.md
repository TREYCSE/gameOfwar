# GAME OF WAR

Game of War is a card game in which players play their random cards from their respective parts of the deck to see which hand is larger. The game is built for the user to play directly from the console using object-oriented programming.

Assigned from:
[GA users only](https://git.generalassemb.ly/dc-wdi-fundamentals/game-of-war)

## How to Play

To play, each player reveals the top card in their stack. The player who played the card with the higher rank takes both cards and puts them at the bottom of their stack in an arbitrary order. If there is a tie, then it’s WAR! In the card game each player adds places the top three cards of their stack face down, and then each player reveals the top card again. Whoever wins out of the second reveal takes all of the cards, and if there is another tie the process repeats until there is a winner.

### Prerequisites to Build

Requirements for the software and other tools to build, test and push 
- [Javascript Objects and Classes](https://www.example.com)
- [Object Oriented Programming](https://www.example.com)

### Object Oriented Programming

Object Oriented Programming

Say what the step will be

    Give the example

And repeat

    until finished

End with an example of getting some data out of the system or using it
for a little demo

## Classes amd Instances

Explain how to run the automated tests for this system

### constructor

Constructors are special methods that will be invoked whenever we create a new instance of our class. If our class is what defines our template, the constructor method is what fills it in for a particular instance.

       constructor(cards = newDeck()) {
        this.cards = cards;
        };

### methods

Methods are the "functions of Classses" used methods to initialize, modify, or act on an objects' internal state.

    shuffle () {
      for (let i = this.numberOfCards - 1; i > 0; i--) {
          const newIndex = Math.floor(Math.random() * (i + 1))
          const oldValue = this.cards[newIndex]
          this.cards[newIndex] = this.cards[i]
          this.cards[i] = oldValue;
      };
    };

## attributes

If we want to create our own classes, all we need is a name for our class and a definition of the information and behavior we want to encapsulate in our class. The information and behavior we want to describe with our class has a special name: an attribute. There are two kinds of attributes: data attributes and procedural attributes (more commonly called methods).

## Built With

  - [Contributor Covenant](https://www.contributor-covenant.org/) - Used
    for the Code of Conduct
  - [Creative Commons](https://creativecommons.org/) - Used to choose
    the license

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code
of conduct, and the process for submitting pull requests to us.

## Versioning

We use [Semantic Versioning](http://semver.org/) for versioning. For the versions
available, see the [tags on this
repository](https://github.com/PurpleBooth/a-good-readme-template/tags).

## Authors

  - **Billie Thompson** - *Provided README Template* -
    [PurpleBooth](https://github.com/PurpleBooth)

See also the list of
[contributors](https://github.com/PurpleBooth/a-good-readme-template/contributors)
who participated in this project.

## License

This project is licensed under the [CC0 1.0 Universal](LICENSE.md)
Creative Commons License - see the [LICENSE.md](LICENSE.md) file for
details

## Acknowledgments

  - Hat tip to anyone whose code is used
  - Inspiration
  - etc
