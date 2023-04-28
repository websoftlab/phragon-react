import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPinnedOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPinnedOffIcon = React.forwardRef<SVGSVGElement, TablerPinnedOffIconProps>(
	function TablerPinnedOffIcon(props, ref) {
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
				<path d="M3 3l18 18" />
				<path d="M15 4.5l-3.249 3.249m-2.57 1.433l-2.181 .818l-1.5 1.5l7 7l1.5 -1.5l.82 -2.186m1.43 -2.563l3.25 -3.251" />
				<path d="M9 15l-4.5 4.5" />
				<path d="M14.5 4l5.5 5.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPinnedOffIcon.displayName = "TablerPinnedOffIcon";
}
