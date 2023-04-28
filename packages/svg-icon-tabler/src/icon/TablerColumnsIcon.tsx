import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerColumnsIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerColumnsIcon = React.forwardRef<SVGSVGElement, TablerColumnsIconProps>(function TablerColumnsIcon(
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
			<path d="M4 6l5.5 0" />
			<path d="M4 10l5.5 0" />
			<path d="M4 14l5.5 0" />
			<path d="M4 18l5.5 0" />
			<path d="M14.5 6l5.5 0" />
			<path d="M14.5 10l5.5 0" />
			<path d="M14.5 14l5.5 0" />
			<path d="M14.5 18l5.5 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerColumnsIcon.displayName = "TablerColumnsIcon";
}
