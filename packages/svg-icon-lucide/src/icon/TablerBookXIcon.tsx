import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBookXIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBookXIcon = React.forwardRef<SVGSVGElement, TablerBookXIconProps>(function TablerBookXIcon(
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
			<path d="M9.5,7l5,5" />
			<path d="M14.5,7l-5,5" />
			<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
			<path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBookXIcon.displayName = "TablerBookXIcon";
}
