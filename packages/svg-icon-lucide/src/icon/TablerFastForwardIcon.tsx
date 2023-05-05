import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFastForwardIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFastForwardIcon = React.forwardRef<SVGSVGElement, TablerFastForwardIconProps>(
	function TablerFastForwardIcon(props, ref) {
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
				<path d="M13 19 L22 12 L13 5 L13 19Z" />
				<path d="M2 19 L11 12 L2 5 L2 19Z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFastForwardIcon.displayName = "TablerFastForwardIcon";
}
