import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSendIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSendIcon = React.forwardRef<SVGSVGElement, TablerSendIconProps>(function TablerSendIcon(props, ref) {
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
			<path d="M22 2 L11 13" />
			<path d="M22 2 L15 22 L11 13 L2 9 L22 2Z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSendIcon.displayName = "TablerSendIcon";
}
