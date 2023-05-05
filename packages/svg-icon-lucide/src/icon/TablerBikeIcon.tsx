import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBikeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBikeIcon = React.forwardRef<SVGSVGElement, TablerBikeIconProps>(function TablerBikeIcon(props, ref) {
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
			<path d="M22 17.5 A3.5 3.5 0 0 1 18.5 21 A3.5 3.5 0 0 1 15 17.5 A3.5 3.5 0 0 1 22 17.5" />
			<path d="M9 17.5 A3.5 3.5 0 0 1 5.5 21 A3.5 3.5 0 0 1 2 17.5 A3.5 3.5 0 0 1 9 17.5" />
			<path d="M16 5 A1 1 0 0 1 15 6 A1 1 0 0 1 14 5 A1 1 0 0 1 16 5" />
			<path d="M12 17.5V14l-3-3 4-3 2 3h2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBikeIcon.displayName = "TablerBikeIcon";
}
