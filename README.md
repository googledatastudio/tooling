# dscc-gen

Bootstrap a community connector or community viz from the commandline.

Note: dscc-gen requires npm 5.2.0 or later.

## Running

`npx @google/dscc-gen`

Note: dscc-gen supports a few flags. Call with a `-h` or `--help` to see
options.

dscc-gen will ask a series of questions, then create a new project based on the
responses. Once the project has been bootstraped, you'll be presented with links
where you can try out the deployments, or start developing right away!

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

[analytics.ts]: ./src/analytics.ts
