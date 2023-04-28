import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerReportIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerReportIcon = React.forwardRef<SVGSVGElement, TablerReportIconProps>(function TablerReportIcon(
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
			<path d="M8 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h5.697" />
			<path d="M18 14v4h4" />
			<path d="M18 11v-4a2 2 0 0 0 -2 -2h-2" />
			<path d="M8 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
			<path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
			<path d="M8 11h4" />
			<path d="M8 15h3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerReportIcon.displayName = "TablerReportIcon";
}
