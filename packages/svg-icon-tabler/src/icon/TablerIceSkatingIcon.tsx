import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerIceSkatingIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerIceSkatingIcon = React.forwardRef<SVGSVGElement, TablerIceSkatingIconProps>(
	function TablerIceSkatingIcon(props, ref) {
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
				<path d="M5.905 5h3.418a1 1 0 0 1 .928 .629l1.143 2.856a3 3 0 0 0 2.207 1.83l4.717 .926a2.084 2.084 0 0 1 1.682 2.045v.714a1 1 0 0 1 -1 1h-13.895a1 1 0 0 1 -1 -1.1l.8 -8a1 1 0 0 1 1 -.9z" />
				<path d="M3 19h17a1 1 0 0 0 1 -1" />
				<path d="M9 15v4" />
				<path d="M15 15v4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerIceSkatingIcon.displayName = "TablerIceSkatingIcon";
}
