import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLegoIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLegoIcon = React.forwardRef<SVGSVGElement, TablerLegoIconProps>(function TablerLegoIcon(props, ref) {
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
			<path d="M9.5 11l.01 0" />
			<path d="M14.5 11l.01 0" />
			<path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
			<path d="M7 5h1v-2h8v2h1a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3v1h-10v-1a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLegoIcon.displayName = "TablerLegoIcon";
}
