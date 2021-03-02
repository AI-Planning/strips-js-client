
<p align="center">
  <h3 align="center">Strips-JS-Client</h3>

  <p align="center">
    A simple tool to allow the use of the STRIPS library client-side!
    <br />
    <a href="https://github.com/AI-Planning/strips-js-client/issues">Report Bug</a>
    ·
    <a href="https://github.com/AI-Planning/strips-js-client/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

STRIPS is an awesome library that allows us to interact with PDDL files in many useful ways. However, due to it's dependency on loading the grammar for parsing using the NPM FS library, we're unable to use it client-side within a browser. In an effort to circumvent this, I've written a script that fetches the grammar using node, then uses browserify to compile that into a file that will allow the calling of STRIPS in-browser!

### Built With

This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.
* [Browserify](http://browserify.org/)
* [strips](https://github.com/primaryobjects/strips)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

Ensure that both strips and Browserify are installed on your machine.
* Strips
  ```sh
  npm install strips
  ```

* Browserify
  ```sh
  npm install browserify
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. Give the compile.sh script execution permissions 
   ```sh
   chmod +x compile.sh
   ```
3. Execute the compile.sh script to generate the strips.js file
   ```sh
   ./compile.sh
   ```
4. Place the generated strips.js file as a script into your html file
   ```html
   <script src="strips.js"></script>
   ```
5. You can now include scripts that call and use the strips library      client-side!

<!-- USAGE -->
## Usage
In your js files, usage is quite simple:

The updated methods that allow for the loading of PDDL files have slightly different names for distinction.

The main one is: 
```js
loadFromString(domain, problem, callback)
```
* It is used in the exact same way as the (`load`) function in the STRIPS library, with a callback that returns the parsed PDDL domain and problem as JSON objects that can be used within the library. 
* Once parsed, the usage is exactly the same
* Note: There is no need to (`require('strips')`) at the top of the file

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Cam Cunningham - camcunningham188@gmail.com

Project Link: [https://github.com/AI-Planning/strips-js-client](https://github.com/AI-Planning/strips-js-client)


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
