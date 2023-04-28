import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBookmarkOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBookmarkOffIcon = React.forwardRef<SVGSVGElement, TablerBookmarkOffIconProps>(
	function TablerBookmarkOffIcon(props, ref) {
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
				<path d="M17 17v3l-5 -3l-5 3v-13m1.178 -2.818c.252 -.113 .53 -.176 .822 -.176h6a2 2 0 0 1 2 2v7" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBookmarkOffIcon.displayName = "TablerBookmarkOffIcon";
}
