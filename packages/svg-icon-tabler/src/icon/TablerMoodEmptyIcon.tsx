import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMoodEmptyIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMoodEmptyIcon = React.forwardRef<SVGSVGElement, TablerMoodEmptyIconProps>(
	function TablerMoodEmptyIcon(props, ref) {
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
				<path d="M9 10l.01 0" />
				<path d="M15 10l.01 0" />
				<path d="M9 15l6 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMoodEmptyIcon.displayName = "TablerMoodEmptyIcon";
}
