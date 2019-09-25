<h1 align="center">
  <br>
  dscc-gen
  <br>
</h1>

<p align="center"><a href="https://www.npmjs.com/package/@google/dscc-gen"><img src="https://img.shields.io/npm/v/@google/dscc-gen.svg" alt="npm Version"></a> <a href="https://npmcharts.com/compare/@google/dscc-gen?minimal=true"><img src="https://img.shields.io/npm/dw/@google/dscc-gen.svg" alt="npm Downloads"></a> <a href="http://packagequality.com/#?package=%40google%2Fdscc-gen"><img src="http://npm.packagequality.com/shield/%40google%2Fdscc-gen.svg" alt="Package Quality"></a> <a href="https://github.com/google/clasp"><img src="https://img.shields.io/badge/built%20with-clasp-4285f4.svg" alt="Built with Clasp"></a></p>

Bootstrap a community connector or community viz from the commandline.

> Note: **dscc-gen requires npm 5.2.0 or later**

## Running

`npx @google/dscc-gen viz` or `npx @google/dscc-gen connector`

> Note: dscc-gen supports a few flags. Call with a `-h` or `--help` to see
options.

dscc-gen will ask a series of questions, then create a new project based on the
responses. Once your project has been created, you'll be presented with
information with next steps.

## What We Collect

To improve dscc-gen over time, we gather the following:

+   Start of Execution
+   Stop of Execution
+   Error Stops of Execution (i.e. an exception was thrown)
+   gsutil was not installed
+   SigInt Stop (i.e. C-c to abort running)

None of this is sent if you opt-out of analytics. To opt out at any time, run
`rm ~/.config/insight-nodejs/insight-@google/dscc-gen.json` and you'll be
prompted again the next time you run the tool.

### How We Collect

dscc-gen generates a random uuid to identify your computer, and a random uuid to
identify an individual run of the tool. An individual run of the tool will look
something like: `[Execution Starts] -> [Execution Stops]`.

If you're interested in the weeds of this, check out [analytics.ts].

### Why We Collect

These analytics are used to:

+   Ensure the tool isn't regularly throwing errors
+   Identify gaps in documentation for common errors
+   Understand how users interact with this tool.

## Developer notes
- The top-level `package.json` and `yarn.lock` exist to make sure that yarn is
  available in our travis environment.

[analytics.ts]: ./src/analytics.ts
