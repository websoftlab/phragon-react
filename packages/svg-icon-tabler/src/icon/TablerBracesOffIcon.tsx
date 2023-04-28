import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBracesOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBracesOffIcon = React.forwardRef<SVGSVGElement, TablerBracesOffIconProps>(
	function TablerBracesOffIcon(props, ref) {
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
				<path d="M5.176 5.177c-.113 .251 -.176 .53 -.176 .823v3c0 1.657 -.895 3 -2 3c1.105 0 2 1.343 2 3v3a2 2 0 0 0 2 2" />
				<path d="M17 4a2 2 0 0 1 2 2v3c0 1.657 .895 3 2 3c-1.105 0 -2 1.343 -2 3m-.176 3.821a2 2 0 0 1 -1.824 1.179" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBracesOffIcon.displayName = "TablerBracesOffIcon";
}
