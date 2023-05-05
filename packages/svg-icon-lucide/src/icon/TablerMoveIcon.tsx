import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMoveIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMoveIcon = React.forwardRef<SVGSVGElement, TablerMoveIconProps>(function TablerMoveIcon(props, ref) {
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
			<path d="M5 9 L2 12 L5 15" />
			<path d="M9 5 L12 2 L15 5" />
			<path d="M15 19 L12 22 L9 19" />
			<path d="M19 9 L22 12 L19 15" />
			<path d="M2 12 L22 12" />
			<path d="M12 2 L12 22" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMoveIcon.displayName = "TablerMoveIcon";
}
