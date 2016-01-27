# Text Vis Starter Kit

A simple project to provide starter code for text visualization in D3.js or P5.js.

## Getting Started

There is one optional `npm` package you can use to host this site locally.

Running:

```
npm install
```

Should install the `http-server` node module locally.

Then the local server can be started using:

```
npm start
```

Which simply runs the server in this directory.

If you have your own local server solution (like python's simple http server), feel free to use that!

## D3 Example

The `d3.js` example is accessed by viewing `index.html`

It is implemented in `src/main.js`. We use the [D3 Pack Layout](https://github.com/mbostock/d3/wiki/Pack-Layout#pack) to make an odd "text splatter" out of the words in _Alice in Wonderland_ - which is stored in `data/alice.txt`.


![D3 Screenshot](img/d3_screenshot.png)
