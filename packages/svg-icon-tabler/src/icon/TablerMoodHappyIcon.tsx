import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMoodHappyIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMoodHappyIcon = React.forwardRef<SVGSVGElement, TablerMoodHappyIconProps>(
	function TablerMoodHappyIcon(props, ref) {
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
				<path d="M9 9l.01 0" />
				<path d="M15 9l.01 0" />
				<path d="M8 13a4 4 0 1 0 8 0h-8" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMoodHappyIcon.displayName = "TablerMoodHappyIcon";
}
