import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBoldIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBoldIcon = React.forwardRef<SVGSVGElement, TablerBoldIconProps>(function TablerBoldIcon(props, ref) {
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
			<path d="M14 12a4 4 0 0 0 0-8H6v8" />
			<path d="M15 20a4 4 0 0 0 0-8H6v8Z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBoldIcon.displayName = "TablerBoldIcon";
}
