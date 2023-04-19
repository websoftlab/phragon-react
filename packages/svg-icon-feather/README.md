# @phragon-react/svg-icon-feather

Extender for the `@phragon-react/svg-icon` package.

Icon maker for the https://github.com/feathericons/feather icon collection.\
Feather `v4.29.0`

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

async function someLoaderFunction() {
	const { icons } = await import("@phragon-react/svg-icon-feather/feather-icons.json");
	addSvgIcons("feather", icons);
}

someLoaderFunction().then(() => {
	console.log("Feather icons package added");
});

// use after loaded:
function SomeMenuIconComponent() {
	return (
		<SvgIcon icon="menu" />
	);
}
```
