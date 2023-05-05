import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSkipForwardIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSkipForwardIcon = React.forwardRef<SVGSVGElement, TablerSkipForwardIconProps>(
	function TablerSkipForwardIcon(props, ref) {
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
				<path d="M5 4 L15 12 L5 20 L5 4Z" />
				<path d="M19 5 L19 19" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSkipForwardIcon.displayName = "TablerSkipForwardIcon";
}
