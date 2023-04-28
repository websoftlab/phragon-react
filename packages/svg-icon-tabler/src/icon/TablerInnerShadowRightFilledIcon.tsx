import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerInnerShadowRightFilledIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerInnerShadowRightFilledIcon = React.forwardRef<SVGSVGElement, TablerInnerShadowRightFilledIconProps>(
	function TablerInnerShadowRightFilledIcon(props, ref) {
		const { children, ...rest } = props;
		return (
			<SvgIcon
				fill="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...rest}
				ref={ref}
				size={24}
				icon={undefined}
				strokeWidth={0}
				stroke="none"
			>
				<path d="M4.929 4.929c3.905 -3.905 10.237 -3.905 14.142 0c3.905 3.905 3.905 10.237 0 14.142c-3.905 3.905 -10.237 3.905 -14.142 0c-3.905 -3.905 -3.905 -10.237 0 -14.142zm12.02 2.121a1 1 0 0 0 -1.413 1.414a5 5 0 0 1 0 7.072a1 1 0 0 0 1.414 1.414a7 7 0 0 0 0 -9.9z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerInnerShadowRightFilledIcon.displayName = "TablerInnerShadowRightFilledIcon";
}
