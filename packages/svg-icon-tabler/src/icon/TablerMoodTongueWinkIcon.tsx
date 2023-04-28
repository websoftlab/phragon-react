import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMoodTongueWinkIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMoodTongueWinkIcon = React.forwardRef<SVGSVGElement, TablerMoodTongueWinkIconProps>(
	function TablerMoodTongueWinkIcon(props, ref) {
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
				<path d="M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z" />
				<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
				<path d="M9 10h.01" />
				<path d="M10 14v2a2 2 0 0 0 4 0v-2" />
				<path d="M15.5 14h-7" />
				<path d="M17 10c-.5 -1 -2.5 -1 -3 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMoodTongueWinkIcon.displayName = "TablerMoodTongueWinkIcon";
}
