import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerNfcOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerNfcOffIcon = React.forwardRef<SVGSVGElement, TablerNfcOffIconProps>(function TablerNfcOffIcon(
	props,
	ref
) {
	const { children, ...rest } = props;
	return (
		<SvgIcon
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			{...rest}
			ref={ref}
			size={24}
			icon={undefined}
			fill="none"
		>
			<path d="M11 20a3 3 0 0 1 -3 -3v-9" />
			<path d="M13 4a3 3 0 0 1 3 3v5m0 4v2l-5 -5" />
			<path d="M8 4h9a3 3 0 0 1 3 3v9m-.873 3.116a2.99 2.99 0 0 1 -2.127 .884h-10a3 3 0 0 1 -3 -3v-10c0 -.83 .337 -1.582 .882 -2.125" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerNfcOffIcon.displayName = "TablerNfcOffIcon";
}
