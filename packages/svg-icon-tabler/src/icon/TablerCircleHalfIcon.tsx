import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCircleHalfIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCircleHalfIcon = React.forwardRef<SVGSVGElement, TablerCircleHalfIconProps>(
	function TablerCircleHalfIcon(props, ref) {
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
				<path d="M12 3v18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCircleHalfIcon.displayName = "TablerCircleHalfIcon";
}
