import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMenorahIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMenorahIcon = React.forwardRef<SVGSVGElement, TablerMenorahIconProps>(function TablerMenorahIcon(
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
			<path d="M12 4v16" />
			<path d="M8 4v2a4 4 0 1 0 8 0v-2" />
			<path d="M4 4v2a8 8 0 1 0 16 0v-2" />
			<path d="M10 20h4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMenorahIcon.displayName = "TablerMenorahIcon";
}
