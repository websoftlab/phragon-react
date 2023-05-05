import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerImageOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerImageOffIcon = React.forwardRef<SVGSVGElement, TablerImageOffIconProps>(function TablerImageOffIcon(
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
			<path d="M2 2 L22 22" />
			<path d="M10.41 10.41a2 2 0 1 1-2.83-2.83" />
			<path d="M13.5 13.5 L6 21" />
			<path d="M18 12 L21 15" />
			<path d="M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59" />
			<path d="M21 15V5a2 2 0 0 0-2-2H9" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerImageOffIcon.displayName = "TablerImageOffIcon";
}
