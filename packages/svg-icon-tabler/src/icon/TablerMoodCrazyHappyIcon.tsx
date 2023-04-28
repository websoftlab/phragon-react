import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMoodCrazyHappyIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMoodCrazyHappyIcon = React.forwardRef<SVGSVGElement, TablerMoodCrazyHappyIconProps>(
	function TablerMoodCrazyHappyIcon(props, ref) {
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
				<path d="M7 8.5l3 3" />
				<path d="M7 11.5l3 -3" />
				<path d="M14 8.5l3 3" />
				<path d="M14 11.5l3 -3" />
				<path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMoodCrazyHappyIcon.displayName = "TablerMoodCrazyHappyIcon";
}
