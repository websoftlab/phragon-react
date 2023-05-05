import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAxis3dIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAxis3dIcon = React.forwardRef<SVGSVGElement, TablerAxis3dIconProps>(function TablerAxis3dIcon(
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
			<path d="M4 4v16h16" />
			<path d="m4 20 7-7" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerAxis3dIcon.displayName = "TablerAxis3dIcon";
}
