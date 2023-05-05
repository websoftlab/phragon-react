import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHashIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHashIcon = React.forwardRef<SVGSVGElement, TablerHashIconProps>(function TablerHashIcon(props, ref) {
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
			<path d="M4 9 L20 9" />
			<path d="M4 15 L20 15" />
			<path d="M10 3 L8 21" />
			<path d="M16 3 L14 21" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerHashIcon.displayName = "TablerHashIcon";
}
