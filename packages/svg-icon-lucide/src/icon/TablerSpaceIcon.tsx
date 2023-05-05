import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSpaceIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSpaceIcon = React.forwardRef<SVGSVGElement, TablerSpaceIconProps>(function TablerSpaceIcon(
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
			<path d="M22 17 L22 19 L2 19 L2 17" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSpaceIcon.displayName = "TablerSpaceIcon";
}
