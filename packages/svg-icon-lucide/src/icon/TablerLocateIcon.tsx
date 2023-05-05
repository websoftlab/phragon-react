import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLocateIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLocateIcon = React.forwardRef<SVGSVGElement, TablerLocateIconProps>(function TablerLocateIcon(
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
			<path d="M2 12 L5 12" />
			<path d="M19 12 L22 12" />
			<path d="M12 2 L12 5" />
			<path d="M12 19 L12 22" />
			<path d="M19 12 A7 7 0 0 1 12 19 A7 7 0 0 1 5 12 A7 7 0 0 1 19 12" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLocateIcon.displayName = "TablerLocateIcon";
}
