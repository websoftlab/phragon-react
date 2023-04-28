import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLollipopIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLollipopIcon = React.forwardRef<SVGSVGElement, TablerLollipopIconProps>(function TablerLollipopIcon(
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
			<path d="M14 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
			<path d="M21 10a3.5 3.5 0 0 0 -7 0" />
			<path d="M14 10a3.5 3.5 0 0 1 -7 0" />
			<path d="M14 17a3.5 3.5 0 0 0 0 -7" />
			<path d="M14 3a3.5 3.5 0 0 0 0 7" />
			<path d="M3 21l6 -6" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLollipopIcon.displayName = "TablerLollipopIcon";
}
