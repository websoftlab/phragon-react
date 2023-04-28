import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerToriiIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerToriiIcon = React.forwardRef<SVGSVGElement, TablerToriiIconProps>(function TablerToriiIcon(
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
			<path d="M4 4c5.333 1.333 10.667 1.333 16 0" />
			<path d="M4 8h16" />
			<path d="M12 5v3" />
			<path d="M18 4.5v15.5" />
			<path d="M6 4.5v15.5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerToriiIcon.displayName = "TablerToriiIcon";
}
