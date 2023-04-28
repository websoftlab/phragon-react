import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMoodUnamusedIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMoodUnamusedIcon = React.forwardRef<SVGSVGElement, TablerMoodUnamusedIconProps>(
	function TablerMoodUnamusedIcon(props, ref) {
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
				<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
				<path d="M11 16l4 -1.5" />
				<path d="M10 10c-.5 -1 -2.5 -1 -3 0" />
				<path d="M17 10c-.5 -1 -2.5 -1 -3 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMoodUnamusedIcon.displayName = "TablerMoodUnamusedIcon";
}
