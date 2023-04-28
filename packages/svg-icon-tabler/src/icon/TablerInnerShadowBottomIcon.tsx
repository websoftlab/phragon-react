import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerInnerShadowBottomIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerInnerShadowBottomIcon = React.forwardRef<SVGSVGElement, TablerInnerShadowBottomIconProps>(
	function TablerInnerShadowBottomIcon(props, ref) {
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
				<path d="M18.364 18.364a9 9 0 1 0 -12.728 -12.728a9 9 0 0 0 12.728 12.728z" />
				<path d="M7.757 16.243a6 6 0 0 0 8.486 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerInnerShadowBottomIcon.displayName = "TablerInnerShadowBottomIcon";
}
