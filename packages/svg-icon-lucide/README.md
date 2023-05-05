# @phragon-react/svg-icon-lucide

Extender for the `@phragon-react/svg-icon` package.

Icon maker for the https://github.com/lucide-icons/lucide icon collection.\
Lucide website: https://lucide.dev/ \
Lucide version: `0.211.0`

## ❯ Install

```
$ npm install --save react @phragon-react/svg-icon @phragon-react/svg-icon-lucide
```

## Usage

```javascript
import { addSvgIcons, SvgIcon } from "@phragon-react/svg-icon"
import { addLucideSvgIconMaker } from "@phragon-react/svg-icon-lucide";

// add maker
addLucideSvgIconMaker();

// load icons
import("@phragon-react/svg-icon-lucide/lucide-all.json")
    .then(({ icons }) => {
	    addSvgIcons("lucide", icons);
    })
    .catch(error => {
	    console.error("lucide icons load failure", error);
    });

// usage icon
function SomeMenuIconComponent() {
	return (
		<SvgIcon icon="menu" />
	);
}
```
