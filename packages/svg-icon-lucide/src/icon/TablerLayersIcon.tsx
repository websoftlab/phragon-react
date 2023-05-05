import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLayersIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLayersIcon = React.forwardRef<SVGSVGElement, TablerLayersIconProps>(function TablerLayersIcon(
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
			<path d="M12 2 L2 7 L12 12 L22 7 L12 2Z" />
			<path d="M2 17 L12 22 L22 17" />
			<path d="M2 12 L12 17 L22 12" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLayersIcon.displayName = "TablerLayersIcon";
}
