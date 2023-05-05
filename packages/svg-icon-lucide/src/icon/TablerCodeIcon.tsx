import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCodeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCodeIcon = React.forwardRef<SVGSVGElement, TablerCodeIconProps>(function TablerCodeIcon(props, ref) {
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
			<path d="M16 18 L22 12 L16 6" />
			<path d="M8 6 L2 12 L8 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCodeIcon.displayName = "TablerCodeIcon";
}
