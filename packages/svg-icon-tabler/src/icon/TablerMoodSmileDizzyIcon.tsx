import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMoodSmileDizzyIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMoodSmileDizzyIcon = React.forwardRef<SVGSVGElement, TablerMoodSmileDizzyIconProps>(
	function TablerMoodSmileDizzyIcon(props, ref) {
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
				<path d="M14.5 15a3.5 3.5 0 0 1 -5 0" />
				<path d="M8 9l2 2" />
				<path d="M10 9l-2 2" />
				<path d="M14 9l2 2" />
				<path d="M16 9l-2 2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMoodSmileDizzyIcon.displayName = "TablerMoodSmileDizzyIcon";
}
