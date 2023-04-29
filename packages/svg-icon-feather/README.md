# @phragon-react/svg-icon-feather

Extender for the `@phragon-react/svg-icon` package.

Icon maker for the https://github.com/feathericons/feather icon collection.\
Feather website: https://feathericons.com/ \
Feather version: `4.29.0`

## ❯ Install

```
$ npm install --save react @phragon-react/svg-icon @phragon-react/svg-icon-feather
```

## Usage

```javascript
import { addSvgIcons, SvgIcon } from "@phragon-react/svg-icon"
import { addFeatherSvgIconMaker } from "@phragon-react/svg-icon-feather";

// add maker
addFeatherSvgIconMaker();

// load icons
import("@phragon-react/svg-icon-feather/feather-icons.json")
    .then(({ icons }) => {
	    addSvgIcons("feather", icons);
    })
    .catch(error => {
	    console.error("Feather icons load failure", error);
    });

// usage icon
function SomeMenuIconComponent() {
	return (
		<SvgIcon icon="menu" />
	);
}
```
