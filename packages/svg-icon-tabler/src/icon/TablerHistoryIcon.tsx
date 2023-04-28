import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHistoryIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHistoryIcon = React.forwardRef<SVGSVGElement, TablerHistoryIconProps>(function TablerHistoryIcon(
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
			<path d="M12 8l0 4l2 2" />
			<path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerHistoryIcon.displayName = "TablerHistoryIcon";
}
