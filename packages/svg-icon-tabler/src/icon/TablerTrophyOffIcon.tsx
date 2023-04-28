import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTrophyOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTrophyOffIcon = React.forwardRef<SVGSVGElement, TablerTrophyOffIconProps>(
	function TablerTrophyOffIcon(props, ref) {
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
				<path d="M8 21h8" />
				<path d="M12 17v4" />
				<path d="M8 4h9" />
				<path d="M17 4v8c0 .31 -.028 .612 -.082 .905m-1.384 2.632a5 5 0 0 1 -8.534 -3.537v-5" />
				<path d="M5 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M19 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTrophyOffIcon.displayName = "TablerTrophyOffIcon";
}
