import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerOvalIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerOvalIcon = React.forwardRef<SVGSVGElement, TablerOvalIconProps>(function TablerOvalIcon(props, ref) {
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
			<path d="M12 12m-6 0a6 9 0 1 0 12 0a6 9 0 1 0 -12 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerOvalIcon.displayName = "TablerOvalIcon";
}
