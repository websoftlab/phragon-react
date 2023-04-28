import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerQrcodeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerQrcodeIcon = React.forwardRef<SVGSVGElement, TablerQrcodeIconProps>(function TablerQrcodeIcon(
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
			<path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
			<path d="M7 17l0 .01" />
			<path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
			<path d="M7 7l0 .01" />
			<path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
			<path d="M17 7l0 .01" />
			<path d="M14 14l3 0" />
			<path d="M20 14l0 .01" />
			<path d="M14 14l0 3" />
			<path d="M14 20l3 0" />
			<path d="M17 17l3 0" />
			<path d="M20 17l0 3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerQrcodeIcon.displayName = "TablerQrcodeIcon";
}
