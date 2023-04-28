import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSectionIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSectionIcon = React.forwardRef<SVGSVGElement, TablerSectionIconProps>(function TablerSectionIcon(
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
			<path d="M20 20h.01" />
			<path d="M4 20h.01" />
			<path d="M8 20h.01" />
			<path d="M12 20h.01" />
			<path d="M16 20h.01" />
			<path d="M20 4h.01" />
			<path d="M4 4h.01" />
			<path d="M8 4h.01" />
			<path d="M12 4h.01" />
			<path d="M16 4l0 .01" />
			<path d="M4 8m0 1a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSectionIcon.displayName = "TablerSectionIcon";
}
