# dscc - Google Data Studio Community Component Helper Library

<a href="https://travis-ci.org/googledatastudio/ds-component"><img src="https://travis-ci.org/googledatastudio/ds-component.svg?branch=master" alt="Build Status"></a>

`dscc` (Data Studio Community Component) is a library to help with the building
of community components for Google Data Studio. It can be used as a standalone
library, or as a npm dependency. To learn more about Data Studio Community
Components, visit [Data Studio Community Visualizations][dscv-devsite].

## Basic Usage

`dscc` can be used through npm, or by copying the contents into the beginning of
your javascript file.

### Through Npm

To use this library through npm run

```shell
npm install --save @google/dscc
```

#### Example

```javascript
import {
  subscribeToData,
  getHeight,
  getWidth,
} from 'dscc'

const main = () => {
  const unSub = subscribeToData((message) => {
    const width = getWidth();
    const height = getHeight();
    console.log(message)
    // Create component as needed using message, height, and width...
  }, {transform: dscc.tableTransform})
}
main()
```

### Through Copy/Paste

Copy the contents of `lib/dscc.min.js` to the beginning of your components'
javascript file. This will introduce a `dscc` variable with the public interface
exposed.

#### Example

```javascript
// Copied contents would be here...
dscc.subscribeToData(function(message) {
      var width = dscc.getWidth();
      var height = dscc.getHeight();
      console.log(message)
      // Create component as needed using message, height, and width...
}, {transform: dscc.tableTransform});
```

Note: It may be easier to develop this way by writing a simple script to combine
the two files. To do this using bash, for example, you would do the following:

##### build.sh

```bash
# remove the release file if it already there.
rm release.js
# create a new file called release.js
touch release.js
# put in a new line to make sure the code doesn't step on itself.
echo >> release.js
# copy the contents of 'dscc.min.js' into 'release.js'
cat 'dscc.min.js' >> release.js
# copy the contents of 'yourComponentFile.js' into 'release.js'
cat 'yourComponentFile.js' >> release.js
```

[dscv-devsite]: https://developers.google.com/datastudio/visualization/
[docs]: https://googledatastudio.github.io/ds-component/
