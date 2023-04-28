import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerWiperIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerWiperIcon = React.forwardRef<SVGSVGElement, TablerWiperIconProps>(function TablerWiperIcon(
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
			<path d="M12 18m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			<path d="M3 9l5.5 5.5a5 5 0 0 1 7 0l5.5 -5.5a12 12 0 0 0 -18 0" />
			<path d="M12 18l-2.2 -12.8" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerWiperIcon.displayName = "TablerWiperIcon";
}
