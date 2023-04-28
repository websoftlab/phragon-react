import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCellIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCellIcon = React.forwardRef<SVGSVGElement, TablerCellIconProps>(function TablerCellIcon(props, ref) {
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
			<path d="M8 4l-4 2v5l4 2l4 -2v-5z" />
			<path d="M12 11l4 2l4 -2v-5l-4 -2l-4 2" />
			<path d="M8 13v5l4 2l4 -2v-5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCellIcon.displayName = "TablerCellIcon";
}
