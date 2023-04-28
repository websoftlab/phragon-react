import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBathIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBathIcon = React.forwardRef<SVGSVGElement, TablerBathIconProps>(function TablerBathIcon(props, ref) {
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
			<path d="M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4v-3a1 1 0 0 1 1 -1z" />
			<path d="M6 12v-7a2 2 0 0 1 2 -2h3v2.25" />
			<path d="M4 21l1 -1.5" />
			<path d="M20 21l-1 -1.5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBathIcon.displayName = "TablerBathIcon";
}
