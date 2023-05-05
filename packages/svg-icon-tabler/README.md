# @phragon-react/svg-icon-tabler

Extender for the `@phragon-react/svg-icon` package.

Icon maker for the https://github.com/tabler/tabler-icons icon collection.\
Tabler website: https://tabler-icons.io/ \
Tabler version: `2.17.0`

<p align="center">
<img src="https://raw.githubusercontent.com/websoftlab/phragon-react/master/packages/svg-icon-tabler/tabler-icons.png" width="838" alt="Tabler Icons" />
</p>

## ❯ Install

```
$ npm install --save react @phragon-react/svg-icon @phragon-react/svg-icon-tabler
```

## Usage

```javascript
import { addSvgIcons, SvgIcon } from "@phragon-react/svg-icon"
import { addTablerSvgIconMaker } from "@phragon-react/svg-icon-tabler";

// add maker
addTablerSvgIconMaker();

// add all stroke icons
import("@phragon-react/svg-icon-tabler/tabler-all-stroke.json")
	.then(({icons}) => {
		addSvgIcons("tabler", icons);
	})
	.catch(error => {
		console.error("Icon (stroke) load failure", error);
	});

// add all filled icons
import("@phragon-react/svg-icon-tabler/tabler-filled.json")
	.then(({icons}) => {
		addSvgIcons("tabler-filled", icons);
	})
	.catch(error => {
		console.error("Icon (filled) load failure", error);
	});

// usage icon
function SomeMenuIconComponent() {
	return (
		<SvgIcon icon="menu" />
	);
}
```
