import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerShareIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerShareIcon = React.forwardRef<SVGSVGElement, TablerShareIconProps>(function TablerShareIcon(
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
			<path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
			<path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
			<path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
			<path d="M8.7 10.7l6.6 -3.4" />
			<path d="M8.7 13.3l6.6 3.4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerShareIcon.displayName = "TablerShareIcon";
}
