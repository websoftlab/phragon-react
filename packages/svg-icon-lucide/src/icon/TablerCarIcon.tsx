import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCarIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCarIcon = React.forwardRef<SVGSVGElement, TablerCarIconProps>(function TablerCarIcon(props, ref) {
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
			<path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2" />
			<path d="M9 16.5 A2.5 2.5 0 0 1 6.5 19 A2.5 2.5 0 0 1 4 16.5 A2.5 2.5 0 0 1 9 16.5" />
			<path d="M19 16.5 A2.5 2.5 0 0 1 16.5 19 A2.5 2.5 0 0 1 14 16.5 A2.5 2.5 0 0 1 19 16.5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCarIcon.displayName = "TablerCarIcon";
}
