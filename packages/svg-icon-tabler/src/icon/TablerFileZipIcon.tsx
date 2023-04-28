import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFileZipIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFileZipIcon = React.forwardRef<SVGSVGElement, TablerFileZipIconProps>(function TablerFileZipIcon(
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
			<path d="M6 20.735a2 2 0 0 1 -1 -1.735v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-1" />
			<path d="M11 17a2 2 0 0 1 2 2v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-2a2 2 0 0 1 2 -2z" />
			<path d="M11 5l-1 0" />
			<path d="M13 7l-1 0" />
			<path d="M11 9l-1 0" />
			<path d="M13 11l-1 0" />
			<path d="M11 13l-1 0" />
			<path d="M13 15l-1 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerFileZipIcon.displayName = "TablerFileZipIcon";
}
